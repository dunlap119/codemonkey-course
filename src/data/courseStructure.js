/**
 * Master course outline — defines all lessons and sections.
 */

export const course = {
  title: 'CoffeeScript Coding Adventure',
  subtitle: 'Write code. Catch bananas. Learn to program!',
  lessons: [
    // --- Part 1: CoffeeScript Basics ---
    {
      id: 'L1', num: 1,
      title: 'First Steps',
      subtitle: 'Move the monkey with the step command',
      sections: [
        { id: 'L1S1', type: 'intro', title: 'Introduction' },
        { id: 'L1S2', type: 'content', title: 'The step Command' },
        { id: 'L1S3', type: 'guided-example', title: 'Watch Me: Moving the Monkey' },
        { id: 'L1S4', type: 'puzzle', title: 'Practice: Step Puzzles' },
        { id: 'L1S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L1S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L2', num: 2,
      title: 'Turning',
      subtitle: 'Change direction with turn left and turn right',
      sections: [
        { id: 'L2S1', type: 'intro', title: 'Introduction' },
        { id: 'L2S2', type: 'content', title: 'The turn Command' },
        { id: 'L2S3', type: 'guided-example', title: 'Watch Me: Turning Corners' },
        { id: 'L2S4', type: 'puzzle', title: 'Practice: Turn Puzzles' },
        { id: 'L2S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L2S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L3', num: 3,
      title: 'Smart Navigation',
      subtitle: 'Use turnTo and distanceTo for efficient movement',
      sections: [
        { id: 'L3S1', type: 'intro', title: 'Introduction' },
        { id: 'L3S2', type: 'content', title: 'turnTo & distanceTo' },
        { id: 'L3S3', type: 'guided-example', title: 'Watch Me: Smart Moves' },
        { id: 'L3S4', type: 'puzzle', title: 'Practice: Navigation Puzzles' },
        { id: 'L3S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L3S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L4', num: 4,
      title: 'Obstacles & Mazes',
      subtitle: 'Navigate around bushes and plan your path',
      sections: [
        { id: 'L4S1', type: 'intro', title: 'Introduction' },
        { id: 'L4S2', type: 'content', title: 'Working with Obstacles' },
        { id: 'L4S3', type: 'guided-example', title: 'Watch Me: Maze Strategy' },
        { id: 'L4S4', type: 'puzzle', title: 'Practice: Obstacle Puzzles' },
        { id: 'L4S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L4S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L5', num: 5,
      title: 'Loops',
      subtitle: 'Repeat actions with for loops',
      sections: [
        { id: 'L5S1', type: 'intro', title: 'Introduction' },
        { id: 'L5S2', type: 'content', title: 'For Loops' },
        { id: 'L5S3', type: 'guided-example', title: 'Watch Me: Building Loops' },
        { id: 'L5S4', type: 'puzzle', title: 'Practice: Loop Puzzles' },
        { id: 'L5S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L5S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L6', num: 6,
      title: 'Functions',
      subtitle: 'Define reusable blocks of code',
      sections: [
        { id: 'L6S1', type: 'intro', title: 'Introduction' },
        { id: 'L6S2', type: 'content', title: 'Defining Functions' },
        { id: 'L6S3', type: 'guided-example', title: 'Watch Me: Creating Functions' },
        { id: 'L6S4', type: 'puzzle', title: 'Practice: Function Puzzles' },
        { id: 'L6S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L6S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },

    // --- Part 2: Functions & Beyond ---
    {
      id: 'L7', num: 7,
      title: 'Function Farm',
      subtitle: 'grab, drop, and defining functions',
      sections: [
        { id: 'L7S1', type: 'intro', title: 'Introduction' },
        { id: 'L7S2', type: 'content', title: 'grab & drop' },
        { id: 'L7S3', type: 'guided-example', title: 'Watch Me: Functions in Action' },
        { id: 'L7S4', type: 'puzzle', title: 'Practice: Function Farm' },
        { id: 'L7S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L7S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L8', num: 8,
      title: 'Fun-ctions!',
      subtitle: 'Debugging, step -x, and loops with functions',
      sections: [
        { id: 'L8S1', type: 'intro', title: 'Introduction' },
        { id: 'L8S2', type: 'content', title: 'Debugging & step -x' },
        { id: 'L8S3', type: 'guided-example', title: 'Watch Me: Debugging Code' },
        { id: 'L8S4', type: 'puzzle', title: 'Practice: Fun-ctions!' },
        { id: 'L8S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L8S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L9', num: 9,
      title: "Fake It 'Til You Make It",
      subtitle: 'Functions calling functions',
      sections: [
        { id: 'L9S1', type: 'intro', title: 'Introduction' },
        { id: 'L9S2', type: 'content', title: 'Nested Functions' },
        { id: 'L9S3', type: 'guided-example', title: 'Watch Me: Functions in Functions' },
        { id: 'L9S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L9S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L9S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L10', num: 10,
      title: "It Ain't Over Until It's Over",
      subtitle: 'until loops and near()',
      sections: [
        { id: 'L10S1', type: 'intro', title: 'Introduction' },
        { id: 'L10S2', type: 'content', title: 'Until Loops' },
        { id: 'L10S3', type: 'guided-example', title: 'Watch Me: Until Loops' },
        { id: 'L10S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L10S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L10S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L11', num: 11,
      title: 'Cut to the Chase',
      subtitle: 'Chase functions and efficiency',
      sections: [
        { id: 'L11S1', type: 'intro', title: 'Introduction' },
        { id: 'L11S2', type: 'content', title: 'Chase Functions' },
        { id: 'L11S3', type: 'guided-example', title: 'Watch Me: Building a Chase' },
        { id: 'L11S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L11S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L11S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L12', num: 12,
      title: 'Wait for It...',
      subtitle: 'Character states and the wait() command',
      sections: [
        { id: 'L12S1', type: 'intro', title: 'Introduction' },
        { id: 'L12S2', type: 'content', title: 'wait() & Character States' },
        { id: 'L12S3', type: 'guided-example', title: 'Watch Me: Waiting for Characters' },
        { id: 'L12S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L12S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L12S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L13', num: 13,
      title: 'Act the Goat',
      subtitle: 'Goat commands and if conditionals',
      sections: [
        { id: 'L13S1', type: 'intro', title: 'Introduction' },
        { id: 'L13S2', type: 'content', title: 'Goats & Conditionals' },
        { id: 'L13S3', type: 'guided-example', title: 'Watch Me: Working with the Goat' },
        { id: 'L13S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L13S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L13S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L14', num: 14,
      title: 'Green Banana Sorbet',
      subtitle: 'if-else and banana types',
      sections: [
        { id: 'L14S1', type: 'intro', title: 'Introduction' },
        { id: 'L14S2', type: 'content', title: 'if-else Decisions' },
        { id: 'L14S3', type: 'guided-example', title: 'Watch Me: Checking Banana Types' },
        { id: 'L14S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L14S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L14S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L15', num: 15,
      title: 'If All Else Fails',
      subtitle: 'Advanced if-else in functions',
      sections: [
        { id: 'L15S1', type: 'intro', title: 'Introduction' },
        { id: 'L15S2', type: 'content', title: 'if-else in Functions' },
        { id: 'L15S3', type: 'guided-example', title: 'Watch Me: Smart Functions' },
        { id: 'L15S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L15S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L15S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L16', num: 16,
      title: 'And in the End',
      subtitle: 'The AND operator and truth tables',
      sections: [
        { id: 'L16S1', type: 'intro', title: 'Introduction' },
        { id: 'L16S2', type: 'content', title: 'The AND Operator' },
        { id: 'L16S3', type: 'guided-example', title: 'Watch Me: Combining Conditions' },
        { id: 'L16S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L16S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L16S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L17', num: 17,
      title: 'Take it or Leave it!',
      subtitle: 'The OR operator',
      sections: [
        { id: 'L17S1', type: 'intro', title: 'Introduction' },
        { id: 'L17S2', type: 'content', title: 'The OR Operator' },
        { id: 'L17S3', type: 'guided-example', title: 'Watch Me: Using OR' },
        { id: 'L17S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L17S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L17S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L18', num: 18,
      title: 'Mix and Match',
      subtitle: 'Array literals and polymorphism',
      sections: [
        { id: 'L18S1', type: 'intro', title: 'Introduction' },
        { id: 'L18S2', type: 'content', title: 'Arrays & Polymorphism' },
        { id: 'L18S3', type: 'guided-example', title: 'Watch Me: Working with Arrays' },
        { id: 'L18S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L18S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L18S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L19', num: 19,
      title: 'Fashion Alert!',
      subtitle: 'Penguin properties with and/or',
      sections: [
        { id: 'L19S1', type: 'intro', title: 'Introduction' },
        { id: 'L19S2', type: 'content', title: 'Penguin Properties' },
        { id: 'L19S3', type: 'guided-example', title: 'Watch Me: Checking Accessories' },
        { id: 'L19S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L19S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L19S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L20', num: 20,
      title: 'Loops are Fun',
      subtitle: 'Review all three loop types',
      sections: [
        { id: 'L20S1', type: 'intro', title: 'Introduction' },
        { id: 'L20S2', type: 'content', title: 'Loop Review' },
        { id: 'L20S3', type: 'guided-example', title: 'Watch Me: Choosing the Right Loop' },
        { id: 'L20S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L20S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L20S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L21', num: 21,
      title: "What's the Conditional?",
      subtitle: 'Review all conditional patterns',
      sections: [
        { id: 'L21S1', type: 'intro', title: 'Introduction' },
        { id: 'L21S2', type: 'content', title: 'Conditional Review' },
        { id: 'L21S3', type: 'guided-example', title: 'Watch Me: Picking Conditionals' },
        { id: 'L21S4', type: 'puzzle', title: 'Practice Puzzles' },
        { id: 'L21S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L21S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L22', num: 22,
      title: 'Stars Party!',
      subtitle: 'Code optimization and the grand finale',
      sections: [
        { id: 'L22S1', type: 'intro', title: 'Introduction' },
        { id: 'L22S2', type: 'content', title: 'Code Optimization' },
        { id: 'L22S3', type: 'guided-example', title: 'Watch Me: Optimizing Solutions' },
        { id: 'L22S4', type: 'puzzle', title: 'Practice: Final Puzzles' },
        { id: 'L22S5', type: 'quiz', title: 'Final Assessment' },
        { id: 'L22S6', type: 'summary', title: 'Course Complete!' },
      ],
    },
  ],
};

/** Get a flat ordered list of all section IDs */
export function getAllSectionIds() {
  const ids = [];
  for (const lesson of course.lessons) {
    for (const section of lesson.sections) {
      ids.push(section.id);
    }
  }
  return ids;
}

/** Find lesson + section objects by section ID */
export function findSection(sectionId) {
  for (const lesson of course.lessons) {
    for (const section of lesson.sections) {
      if (section.id === sectionId) {
        return { lesson, section };
      }
    }
  }
  return null;
}

/** Get the section ID before/after the given one */
export function getAdjacentSections(sectionId) {
  const all = getAllSectionIds();
  const idx = all.indexOf(sectionId);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
