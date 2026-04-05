/**
 * Course landing page — CodeMonkey Coding Adventure.
 */

import { course } from '../data/courseStructure.js';
import { isSectionComplete, getCompletedSections, getTotalStars } from '../progress/progressStore.js';
import { getMascotSvg } from '../graphics/mascot.js';
import { getLessonHeaderHtml } from '../graphics/lessonHeaders.js';
import { navigate } from '../router.js';
import { isSectionUnlocked } from '../progress/unlockManager.js';

export function renderLanding(containerEl) {
  containerEl.innerHTML = '';

  const completed = getCompletedSections();
  let totalSections = 0;
  course.lessons.forEach(l => { totalSections += l.sections.length; });
  const pct = totalSections > 0 ? Math.round((completed.length / totalSections) * 100) : 0;
  const totalStars = getTotalStars();

  // Hero banner
  const hero = document.createElement('div');
  hero.className = 'landing-hero';
  hero.innerHTML = `
    <div class="landing-hero-text">
      <h1>${course.title}</h1>
      <p class="landing-subtitle">${course.subtitle}</p>
      <p class="landing-desc">A free, self-paced coding course from <strong>Create a Loop</strong>. Write CoffeeScript code to help a monkey collect bananas — and learn real programming concepts along the way!</p>
    </div>
    <div class="landing-hero-mascot">${getMascotSvg('greeting')}</div>
  `;
  containerEl.appendChild(hero);

  // Progress (only show if started)
  if (completed.length > 0) {
    const progressSection = document.createElement('div');
    progressSection.className = 'landing-progress';
    progressSection.innerHTML = `
      <div class="landing-progress-bar">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
      <p>${pct}% complete — ${completed.length} of ${totalSections} sections finished${totalStars > 0 ? ` — ⭐ ${totalStars} stars earned` : ''}</p>
    `;
    containerEl.appendChild(progressSection);

    const resumeBtn = document.createElement('button');
    resumeBtn.className = 'nav-btn nav-btn-next landing-resume-btn';
    resumeBtn.textContent = 'Continue Where You Left Off →';
    resumeBtn.addEventListener('click', () => {
      for (const lesson of course.lessons) {
        for (const section of lesson.sections) {
          if (!isSectionComplete(section.id) && isSectionUnlocked(section.id)) {
            navigate(section.id);
            return;
          }
        }
      }
    });
    containerEl.appendChild(resumeBtn);
  }

  // What you'll learn
  const whatLearn = document.createElement('div');
  whatLearn.className = 'landing-section';
  whatLearn.innerHTML = `
    <h2>What You'll Learn</h2>
    <div class="landing-skills">
      <div class="landing-skill-card">
        <span class="skill-icon">🐒</span>
        <strong>Move & Turn</strong>
        <p>Write code to move a monkey around a grid and collect bananas</p>
      </div>
      <div class="landing-skill-card">
        <span class="skill-icon">🎯</span>
        <strong>Smart Navigation</strong>
        <p>Use turnTo and distanceTo to navigate efficiently</p>
      </div>
      <div class="landing-skill-card">
        <span class="skill-icon">🔄</span>
        <strong>Loops</strong>
        <p>Repeat actions with for loops instead of writing the same code over and over</p>
      </div>
      <div class="landing-skill-card">
        <span class="skill-icon">⚡</span>
        <strong>Functions</strong>
        <p>Define reusable functions to make your code shorter and cleaner</p>
      </div>
      <div class="landing-skill-card">
        <span class="skill-icon">🧠</span>
        <strong>Conditions</strong>
        <p>Use if/else and until to make decisions in your code</p>
      </div>
      <div class="landing-skill-card">
        <span class="skill-icon">🏆</span>
        <strong>61 Puzzles</strong>
        <p>Progressive challenges that build on each other — earn up to 3 stars each!</p>
      </div>
    </div>
  `;
  containerEl.appendChild(whatLearn);

  // Lesson cards
  const lessonsSection = document.createElement('div');
  lessonsSection.className = 'landing-section';
  lessonsSection.innerHTML = '<h2>Course Outline</h2>';

  const grid = document.createElement('div');
  grid.className = 'landing-lesson-grid';

  for (const lesson of course.lessons) {
    const completedCount = lesson.sections.filter(s => isSectionComplete(s.id)).length;
    const allDone = completedCount === lesson.sections.length;
    const firstUnlocked = isSectionUnlocked(lesson.sections[0].id);

    const card = document.createElement('div');
    card.className = `landing-lesson-card ${allDone ? 'complete' : ''} ${!firstUnlocked ? 'locked' : ''}`;

    card.innerHTML = `
      <div class="lesson-card-illustration">${getLessonHeaderHtml(lesson.num)}</div>
      <div class="lesson-card-body">
        <div class="lesson-card-num">Lesson ${lesson.num}</div>
        <h3>${lesson.title}</h3>
        <p>${lesson.subtitle}</p>
        <div class="lesson-card-progress">
          ${allDone
            ? '<span class="lesson-card-badge complete">✓ Complete</span>'
            : !firstUnlocked
            ? '<span class="lesson-card-badge locked">🔒 Locked</span>'
            : `<span class="lesson-card-badge">${completedCount}/${lesson.sections.length} sections</span>`
          }
        </div>
      </div>
    `;

    if (firstUnlocked) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        for (const section of lesson.sections) {
          if (!isSectionComplete(section.id)) {
            navigate(section.id);
            return;
          }
        }
        navigate(lesson.sections[0].id);
      });
    }

    grid.appendChild(card);
  }

  lessonsSection.appendChild(grid);
  containerEl.appendChild(lessonsSection);

  // Start button (if not started)
  if (completed.length === 0) {
    const startBtn = document.createElement('button');
    startBtn.className = 'nav-btn nav-btn-next landing-start-btn';
    startBtn.textContent = 'Start Learning →';
    startBtn.addEventListener('click', () => navigate('L1S1'));
    containerEl.appendChild(startBtn);
  }
}
