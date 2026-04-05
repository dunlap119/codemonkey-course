/**
 * Maps section IDs to puzzle definitions.
 * Bridges the course structure with puzzle data files.
 */

const puzzleCache = {};

// Section ID -> array of { part, id } references
const PUZZLE_MAP = {
  // Part 1: L1-L6
  'L1S4': [{ part: 1, id: 1 }, { part: 1, id: 2 }],
  'L2S4': [{ part: 1, id: 3 }, { part: 1, id: 4 }],
  'L3S4': [{ part: 1, id: 5 }, { part: 1, id: 6 }, { part: 1, id: 7 }],
  'L4S4': [{ part: 1, id: 8 }, { part: 1, id: 12 }],
  'L5S4': [{ part: 1, id: 9 }, { part: 1, id: 10 }, { part: 1, id: 11 }],
  'L6S4': [{ part: 1, id: 13 }],

  // Part 2: L7-L22 (each lesson has 3 puzzles)
  'L7S4':  [{ part: 2, id: 1 },  { part: 2, id: 2 },  { part: 2, id: 3 }],
  'L8S4':  [{ part: 2, id: 4 },  { part: 2, id: 5 },  { part: 2, id: 6 }],
  'L9S4':  [{ part: 2, id: 7 },  { part: 2, id: 8 },  { part: 2, id: 9 }],
  'L10S4': [{ part: 2, id: 10 }, { part: 2, id: 11 }, { part: 2, id: 12 }],
  'L11S4': [{ part: 2, id: 13 }, { part: 2, id: 14 }, { part: 2, id: 15 }],
  'L12S4': [{ part: 2, id: 16 }, { part: 2, id: 17 }, { part: 2, id: 18 }],
  'L13S4': [{ part: 2, id: 19 }, { part: 2, id: 20 }, { part: 2, id: 21 }],
  'L14S4': [{ part: 2, id: 22 }, { part: 2, id: 23 }, { part: 2, id: 24 }],
  'L15S4': [{ part: 2, id: 25 }, { part: 2, id: 26 }, { part: 2, id: 27 }],
  'L16S4': [{ part: 2, id: 28 }, { part: 2, id: 29 }, { part: 2, id: 30 }],
  'L17S4': [{ part: 2, id: 31 }, { part: 2, id: 32 }, { part: 2, id: 33 }],
  'L18S4': [{ part: 2, id: 34 }, { part: 2, id: 35 }, { part: 2, id: 36 }],
  'L19S4': [{ part: 2, id: 37 }, { part: 2, id: 38 }, { part: 2, id: 39 }],
  'L20S4': [{ part: 2, id: 40 }, { part: 2, id: 41 }, { part: 2, id: 42 }],
  'L21S4': [{ part: 2, id: 43 }, { part: 2, id: 44 }, { part: 2, id: 45 }],
  'L22S4': [{ part: 2, id: 46 }, { part: 2, id: 47 }, { part: 2, id: 48 }],
};

async function loadPuzzlePart(part) {
  if (puzzleCache[part]) return puzzleCache[part];
  if (part === 1) {
    const m = await import('./puzzleData.js');
    puzzleCache[1] = m.default;
  } else {
    const m = await import('./puzzleDataPart2.js');
    puzzleCache[2] = m.default;
  }
  return puzzleCache[part];
}

export async function getPuzzleForSection(part, id) {
  const puzzles = await loadPuzzlePart(part);
  return puzzles.find(p => p.id === id) || null;
}

export function getPuzzleCount(sectionId) {
  const refs = PUZZLE_MAP[sectionId];
  return refs ? refs.length : 0;
}

export function getPuzzleRefs(sectionId) {
  return PUZZLE_MAP[sectionId] || [];
}
