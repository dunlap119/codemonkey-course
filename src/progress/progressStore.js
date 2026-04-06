/**
 * localStorage-based progress persistence.
 * Tracks section completion, quiz scores, and puzzle stars.
 * Sends events to Google Sheets via tracker.
 */

import { trackEvent } from './tracker.js';

const STORAGE_KEY = 'cm_course_progress';

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { sections: {}, quizScores: {}, puzzleStars: {}, currentSection: null };
  } catch {
    return { sections: {}, quizScores: {}, puzzleStars: {}, currentSection: null };
  }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function markSectionComplete(sectionId) {
  const data = load();
  if (!data.sections[sectionId]?.completed) {
    data.sections[sectionId] = { completed: true, completedAt: new Date().toISOString() };
    save(data);
    trackEvent('section_complete', { sectionId });
  }
}

export function isSectionComplete(sectionId) {
  const data = load();
  return !!data.sections[sectionId]?.completed;
}

export function saveQuizScore(quizId, score, total) {
  const data = load();
  data.quizScores[quizId] = { score, total, attempts: (data.quizScores[quizId]?.attempts || 0) + 1 };
  save(data);
  trackEvent('quiz_complete', { quizId, score, total });
}

export function getQuizScore(quizId) {
  const data = load();
  return data.quizScores[quizId] || null;
}

export function setCurrentSection(sectionId) {
  const data = load();
  data.currentSection = sectionId;
  save(data);
}

export function getCurrentSection() {
  const data = load();
  return data.currentSection;
}

export function getCompletedSections() {
  const data = load();
  return Object.keys(data.sections).filter(id => data.sections[id].completed);
}

// --- Puzzle stars ---

export function savePuzzleStars(sectionId, puzzleIndex, stars) {
  const data = load();
  if (!data.puzzleStars[sectionId]) data.puzzleStars[sectionId] = {};
  const existing = data.puzzleStars[sectionId][puzzleIndex] || 0;
  if (stars > existing) {
    data.puzzleStars[sectionId][puzzleIndex] = stars;
    save(data);
    trackEvent('puzzle_complete', { sectionId, puzzleIndex, stars });
  }
}

export function getPuzzleStars(sectionId) {
  const data = load();
  return data.puzzleStars[sectionId] || {};
}

export function getTotalStars() {
  const data = load();
  let total = 0;
  for (const section of Object.values(data.puzzleStars)) {
    for (const stars of Object.values(section)) {
      total += stars;
    }
  }
  return total;
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
