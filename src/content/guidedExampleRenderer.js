/**
 * Guided example renderer — step-by-step code walkthroughs.
 * Adapted for coding-focused examples with code blocks.
 */

import { getMascotSvg } from '../graphics/mascot.js';

export function renderGuidedExample(sectionData, lesson, containerEl) {
  containerEl.innerHTML = '';

  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<h2>${sectionData.title}</h2>`;
  containerEl.appendChild(heading);

  // Mascot introduction
  const mascot = document.createElement('div');
  mascot.className = 'mascot-speech';
  mascot.innerHTML = `
    <div class="mascot-img">${getMascotSvg('pointing')}</div>
    <div class="speech-bubble">${sectionData.data.intro || "Let me show you how this works step by step. Click 'Next Step' to follow along!"}</div>
  `;
  containerEl.appendChild(mascot);

  // Steps container
  const stepsContainer = document.createElement('div');
  stepsContainer.className = 'guided-steps';

  const steps = sectionData.data.steps;

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const stepEl = document.createElement('div');
    stepEl.className = `guided-step ${i === 0 ? 'revealed' : 'hidden-step'}`;
    stepEl.dataset.stepIndex = i;

    let bodyHtml = `
      <div class="guided-step-header">
        <span class="step-number">${i + 1}</span>
        <span class="step-label">${step.label}</span>
      </div>
      <div class="guided-step-body">
        ${step.code ? `<div class="code-block-wrapper"><div class="code-block-header">CoffeeScript</div><pre class="code-block"><code>${step.code}</code></pre></div>` : ''}
        ${step.prompt ? `<div class="prompt-bubble ${step.isImproved ? 'prompt-bubble-good' : 'prompt-bubble-bad'}">${step.prompt}</div>` : ''}
        ${step.result ? `<div class="callout callout-example"><span class="callout-icon">🎮</span><div class="callout-content"><p>${step.result}</p></div></div>` : ''}
        ${step.annotation ? `<div class="step-annotation">${step.annotation}</div>` : ''}
      </div>
    `;

    stepEl.innerHTML = bodyHtml;

    // Add "Next Step" button (except last)
    if (i < steps.length - 1) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'reveal-btn';
      nextBtn.innerHTML = `Next Step: ${steps[i + 1].label} →`;
      nextBtn.addEventListener('click', () => {
        const nextEl = stepsContainer.querySelector(`[data-step-index="${i + 1}"]`);
        if (nextEl) {
          nextEl.classList.remove('hidden-step');
          nextEl.classList.add('revealed');
          nextBtn.innerHTML = `${steps[i + 1].label} ✓`;
          nextBtn.disabled = true;
          nextBtn.style.background = 'var(--course-success)';
          nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      stepEl.appendChild(nextBtn);
    } else {
      const doneTag = document.createElement('div');
      doneTag.className = 'reveal-btn';
      doneTag.style.background = 'var(--course-success)';
      doneTag.style.cursor = 'default';
      doneTag.style.display = 'inline-block';
      doneTag.innerHTML = 'All steps complete ✓';
      stepEl.appendChild(doneTag);
    }

    stepsContainer.appendChild(stepEl);
  }

  containerEl.appendChild(stepsContainer);

  return { requireInteraction: false };
}
