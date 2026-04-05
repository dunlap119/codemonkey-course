/**
 * Puzzle runner — embeds CoffeeScript code editor + canvas game inline.
 * Registers as a renderer for "puzzle" section type.
 * Full implementation in Phase 2.
 */

import { registerRenderer } from '../content/sectionRenderer.js';
import { markSectionComplete, savePuzzleStars, getPuzzleStars } from '../progress/progressStore.js';
import { getPuzzleForSection, getPuzzleCount } from '../data/puzzles/puzzleIndex.js';
import { Grid } from '../engine/grid.js';
import { interpret, PuzzleError } from '../engine/interpreter.js';
import { Animator } from '../engine/animator.js';
import { initCanvas, resizeCanvas, draw, getCellSize } from '../renderer/canvas.js';
import { clearSpriteCache, waitForImages } from '../renderer/sprites.js';

function renderPuzzleSection(sectionData, lesson, containerEl) {
  containerEl.innerHTML = '';

  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<h2>${sectionData.title}</h2>`;
  containerEl.appendChild(heading);

  if (sectionData.data.intro) {
    const introEl = document.createElement('div');
    introEl.className = 'content-card';
    introEl.innerHTML = `<p>${sectionData.data.intro}</p>`;
    containerEl.appendChild(introEl);
  }

  const puzzleRefs = sectionData.data.puzzles;
  const totalPuzzles = puzzleRefs.length;
  const completedPuzzles = new Set();
  const existingStars = getPuzzleStars(sectionData.id);

  // Check which puzzles are already completed
  for (let i = 0; i < totalPuzzles; i++) {
    if (existingStars[i] && existingStars[i] > 0) completedPuzzles.add(i);
  }

  // Progress dots (if multiple puzzles)
  let progressEl = null;
  if (totalPuzzles > 1) {
    progressEl = document.createElement('div');
    progressEl.className = 'activity-progress';
    progressEl.innerHTML = `
      <span>Puzzle</span>
      <div class="progress-dots">${puzzleRefs.map((_, i) => `<span class="dot${completedPuzzles.has(i) ? ' complete' : ''}" data-idx="${i}"></span>`).join('')}</div>
      <span class="progress-count">${completedPuzzles.size}/${totalPuzzles}</span>
    `;
    containerEl.appendChild(progressEl);
  }

  const puzzleContainer = document.createElement('div');
  containerEl.appendChild(puzzleContainer);

  function updateDots(idx) {
    if (!progressEl) return;
    progressEl.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('complete', completedPuzzles.has(i));
      dot.classList.toggle('current', i === idx);
    });
    progressEl.querySelector('.progress-count').textContent = `${completedPuzzles.size}/${totalPuzzles}`;
  }

  async function renderPuzzle(idx) {
    puzzleContainer.innerHTML = '';
    updateDots(idx);

    const ref = puzzleRefs[idx];
    const puzzleDef = await getPuzzleForSection(ref.part, ref.id);
    if (!puzzleDef) {
      puzzleContainer.innerHTML = '<div class="content-card"><p>Puzzle not found.</p></div>';
      return;
    }

    await waitForImages();

    // Create puzzle embed
    const embed = document.createElement('div');
    embed.className = 'puzzle-embed';

    // Header
    const header = document.createElement('div');
    header.className = 'puzzle-header';
    header.innerHTML = `
      <span class="puzzle-num">#${puzzleDef.id}</span>
      <span class="puzzle-title">${puzzleDef.title}</span>
      <span class="puzzle-concept">${puzzleDef.concept}</span>
    `;
    embed.appendChild(header);

    // Canvas pane
    const canvasPane = document.createElement('div');
    canvasPane.className = 'puzzle-canvas-pane';
    const canvas = document.createElement('canvas');
    canvasPane.appendChild(canvas);
    const starDisplay = document.createElement('div');
    starDisplay.className = 'puzzle-star-display';
    starDisplay.style.display = 'none';
    canvasPane.appendChild(starDisplay);
    embed.appendChild(canvasPane);

    // Editor pane
    const editorPane = document.createElement('div');
    editorPane.className = 'puzzle-editor-pane';

    const editorHeader = document.createElement('div');
    editorHeader.className = 'puzzle-editor-header';
    editorHeader.innerHTML = '<span>CoffeeScript Editor</span>';
    const hintBtn = document.createElement('button');
    hintBtn.className = 'puzzle-hint-btn';
    hintBtn.textContent = 'Show Hint';
    editorHeader.appendChild(hintBtn);
    editorPane.appendChild(editorHeader);

    const hintBox = document.createElement('div');
    hintBox.className = 'puzzle-hint-box';
    hintBox.textContent = puzzleDef.hint || '';
    hintBox.style.display = 'none';
    editorPane.appendChild(hintBox);

    hintBtn.addEventListener('click', () => {
      if (hintBox.style.display === 'none') {
        hintBox.style.display = '';
        hintBtn.textContent = 'Hide Hint';
      } else {
        hintBox.style.display = 'none';
        hintBtn.textContent = 'Show Hint';
      }
    });

    const textarea = document.createElement('textarea');
    editorPane.appendChild(textarea);
    embed.appendChild(editorPane);

    // Button bar
    const buttonBar = document.createElement('div');
    buttonBar.className = 'puzzle-button-bar';

    const runBtn = document.createElement('button');
    runBtn.className = 'puzzle-btn-run';
    runBtn.textContent = 'Run Code';

    const resetBtn = document.createElement('button');
    resetBtn.className = 'puzzle-btn-secondary';
    resetBtn.textContent = 'Reset';

    const stopBtn = document.createElement('button');
    stopBtn.className = 'puzzle-btn-secondary';
    stopBtn.textContent = 'Stop';
    stopBtn.style.display = 'none';

    const speedControl = document.createElement('div');
    speedControl.className = 'puzzle-speed-control';
    speedControl.innerHTML = '<label>Speed:</label><input type="range" min="1" max="5" value="3">';

    buttonBar.appendChild(runBtn);
    buttonBar.appendChild(resetBtn);
    buttonBar.appendChild(stopBtn);
    buttonBar.appendChild(speedControl);
    embed.appendChild(buttonBar);

    // Error display
    const errorDisplay = document.createElement('div');
    errorDisplay.className = 'puzzle-error';
    errorDisplay.style.display = 'none';
    embed.appendChild(errorDisplay);

    // Success panel
    const successPanel = document.createElement('div');
    successPanel.className = 'puzzle-success';
    successPanel.style.display = 'none';
    embed.appendChild(successPanel);

    puzzleContainer.appendChild(embed);

    // --- Initialize engine ---

    // CodeMirror
    const cm = CodeMirror.fromTextArea(textarea, {
      mode: 'coffeescript',
      theme: 'monokai',
      lineNumbers: false,
      indentUnit: 2,
      tabSize: 2,
      indentWithTabs: false,
      matchBrackets: true,
      autoCloseBrackets: true,
      lineWrapping: true,
      extraKeys: {
        Tab: (cm) => cm.execCommand('indentMore'),
        'Shift-Tab': (cm) => cm.execCommand('indentLess'),
        'Cmd-Enter': () => runCode(),
        'Ctrl-Enter': () => runCode(),
      },
    });
    cm.setSize('100%', '180px');
    cm.setValue(puzzleDef.starterCode);
    cm.clearHistory();

    // Grid + Canvas
    let grid = new Grid(puzzleDef);
    clearSpriteCache();
    initCanvas(canvas);

    // Size canvas to fit the container
    const maxW = Math.min(canvasPane.clientWidth - 32, 700);
    const maxH = 340;
    let cellSize = Math.floor(Math.min(maxW / puzzleDef.gridWidth, maxH / puzzleDef.gridHeight));
    cellSize = Math.max(cellSize, 24);
    cellSize = Math.min(cellSize, 56);
    canvas.width = puzzleDef.gridWidth * cellSize;
    canvas.height = puzzleDef.gridHeight * cellSize;
    resizeCanvas(puzzleDef.gridWidth, puzzleDef.gridHeight, maxW, maxH);
    draw(grid, null);

    let currentAnimator = null;

    function resetPuzzle() {
      if (currentAnimator) {
        currentAnimator.stop();
        currentAnimator = null;
      }
      grid = new Grid(puzzleDef);
      clearSpriteCache();
      initCanvas(canvas);
      resizeCanvas(puzzleDef.gridWidth, puzzleDef.gridHeight, maxW, maxH);
      draw(grid, null);
      errorDisplay.style.display = 'none';
      successPanel.style.display = 'none';
      starDisplay.style.display = 'none';
      stopBtn.style.display = 'none';
      // Clear error highlights
      for (let i = 0; i < cm.lineCount(); i++) {
        cm.removeLineClass(i, 'background', 'cm-error-line');
      }
    }

    function showError(msg) {
      errorDisplay.textContent = msg;
      errorDisplay.style.display = '';
    }

    function showStars(count) {
      let html = '';
      for (let i = 0; i < 3; i++) {
        html += i < count
          ? '<span class="star-filled">★</span>'
          : '<span class="star-empty">★</span>';
      }
      starDisplay.innerHTML = html;
      starDisplay.style.display = 'flex';
    }

    function calculateStars(code) {
      const lines = code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length;
      const [s1, s2, s3] = puzzleDef.starThresholds;
      if (lines <= s3) return 3;
      if (lines <= s2) return 2;
      return 1;
    }

    function onWin(stars) {
      savePuzzleStars(sectionData.id, idx, stars);
      showStars(stars);
      completedPuzzles.add(idx);
      updateDots(idx);

      const messages = [
        'Nice work! You solved it! Can you make your code shorter?',
        'Great job! Your code is efficient! Can you get 3 stars?',
        'Perfect! Couldn\'t be shorter!',
      ];

      successPanel.innerHTML = `
        <h3>Great Job!</h3>
        <div class="stars">${starDisplay.innerHTML}</div>
        <p>${messages[Math.min(stars, 3) - 1]}</p>
        <div class="puzzle-success-btns">
          ${stars < 3 ? '<button class="puzzle-btn-secondary" data-action="retry">Retry for 3 Stars</button>' : ''}
          ${idx < totalPuzzles - 1
            ? '<button class="puzzle-btn-run" data-action="next">Next Puzzle →</button>'
            : completedPuzzles.size >= totalPuzzles
            ? '<button class="puzzle-btn-run" data-action="complete">All Puzzles Complete! ✓</button>'
            : '<button class="puzzle-btn-run" data-action="complete">Continue →</button>'
          }
        </div>
      `;
      successPanel.style.display = '';

      successPanel.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.action;
          if (action === 'retry') {
            resetPuzzle();
          } else if (action === 'next') {
            renderPuzzle(idx + 1);
          } else if (action === 'complete') {
            if (completedPuzzles.size >= totalPuzzles) {
              markSectionComplete(sectionData.id);
              window.dispatchEvent(new CustomEvent('section-completed', { detail: sectionData.id }));
            }
          }
        });
      });
    }

    function runCode() {
      resetPuzzle();

      const code = cm.getValue();
      errorDisplay.style.display = 'none';

      // Interpret
      let actionQueue;
      try {
        actionQueue = interpret(code, grid, puzzleDef);
      } catch (e) {
        if (e instanceof PuzzleError) {
          showError(e.message);
          if (e.line != null) cm.addLineClass(e.line, 'background', 'cm-error-line');
        } else {
          showError(e.message || 'Unknown error');
        }
        return;
      }

      if (actionQueue.length === 0) {
        const codeNoComments = code.split('\n').filter(l => !l.trim().startsWith('#')).join('\n');
        if (codeNoComments.includes('for') && !codeNoComments.includes('[')) {
          showError('Check your loop syntax! Use: for i in [1..4] (with square brackets around the range).');
        } else {
          showError('Your code didn\'t produce any actions. Try using step or turn!');
        }
        return;
      }

      // Check required commands
      if (puzzleDef.requiredCommands) {
        const codeNoComments = code.split('\n').filter(l => !l.trim().startsWith('#')).join('\n');
        for (const cmd of puzzleDef.requiredCommands) {
          if (!codeNoComments.includes(cmd)) {
            showError(`This puzzle requires you to use ${cmd} in your solution. Try using it!`);
            return;
          }
        }
      }

      // Animate
      const speedSlider = speedControl.querySelector('input');
      currentAnimator = new Animator(
        grid,
        (won) => {
          stopBtn.style.display = 'none';
          if (won) {
            const stars = calculateStars(code);
            onWin(stars);
          }
        },
        (errorMsg) => {
          showError(errorMsg);
        }
      );
      currentAnimator.setSpeed(parseInt(speedSlider.value));
      stopBtn.style.display = '';
      currentAnimator.play(actionQueue);
    }

    // Wire buttons
    runBtn.addEventListener('click', runCode);
    resetBtn.addEventListener('click', () => {
      resetPuzzle();
      cm.setValue(puzzleDef.starterCode);
      cm.clearHistory();
    });
    stopBtn.addEventListener('click', () => {
      if (currentAnimator) {
        currentAnimator.stop();
        currentAnimator = null;
      }
      stopBtn.style.display = 'none';
    });
  }

  // Start with first puzzle
  renderPuzzle(0);

  return { requireInteraction: true };
}

registerRenderer('puzzle', renderPuzzleSection);
