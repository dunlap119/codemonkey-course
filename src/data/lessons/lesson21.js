/**
 * Lesson 21: What's the Conditional? — review conditionals
 * Part 2, Original Lesson 31, Puzzle IDs 43-45
 */

export default {
  id: 'L21',
  title: "What's the Conditional?",
  sections: [
    {
      id: 'L21S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "You've learned <code>if</code>, <code>if-else</code>, <code>and</code>, <code>or</code>, and <code>not</code> — that's a LOT of decision-making tools! Now let's put them ALL together in one mega review. Can you handle frozen, green, and ripe bananas using every conditional trick you know?",
        objectives: [
          'Review <code>if</code> statements for conditional execution',
          'Review <code>if-else</code> for choosing between two paths',
          'Review <code>and</code>, <code>or</code>, and <code>not</code> logic operators',
          'Combine all conditional tools with loops and functions',
        ],
        essentialQuestions: [
          'How do you choose the right conditional tool for a given problem?',
          'How do conditionals, loops, and functions work together in complex programs?',
        ],
      },
    },
    {
      id: 'L21S2',
      type: 'content',
      title: 'Conditional Review: All the Tools',
      data: {
        subtitle: 'Your complete decision-making toolkit!',
        blocks: [
          {
            type: 'text',
            content: 'Let\'s review every conditional tool you\'ve learned. Together, these let the monkey make any kind of decision!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'if — Run Code Conditionally',
          },
          {
            type: 'code-block',
            label: 'if',
            code: 'if b.frozen()\n  goat.goto b\n  goat.hit b',
            annotation: 'Runs the indented code ONLY when the condition is true. If false, it\'s skipped entirely.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'if-else — Choose Between Two Paths',
          },
          {
            type: 'code-block',
            label: 'if-else',
            code: 'if b.green()\n  # skip this banana\nelse\n  turnTo b\n  step distanceTo b',
            annotation: 'When the condition is true, the if block runs. When false, the else block runs. Exactly ONE block always runs.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'and — Both Must Be True',
          },
          {
            type: 'code-block',
            label: 'and',
            code: 'if not b.frozen() and not b.green()\n  # safe to collect!',
            annotation: 'Both conditions must be true. If either is false, the whole expression is false.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'or — At Least One Must Be True',
          },
          {
            type: 'code-block',
            label: 'or',
            code: 'if b.frozen() or b.green()\n  # this banana has a problem!',
            annotation: 'At least one condition must be true. Only false when BOTH are false.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'not — Reverse a Condition',
          },
          {
            type: 'code-block',
            label: 'not',
            code: 'if not b.frozen()\n  # banana is NOT frozen, safe to grab directly',
            annotation: 'Flips true to false and false to true. Useful for checking the opposite of a condition.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Quick Reference',
          },
          {
            type: 'comparison-table',
            headers: ['Tool', 'Use When...', 'Example'],
            rows: [
              ['<code>if</code>', 'You want to do something sometimes', '<code>if b.frozen()</code>'],
              ['<code>if-else</code>', 'You have two opposite cases', '<code>if b.green() ... else ...</code>'],
              ['<code>and</code>', 'Both conditions must pass', '<code>A and B</code>'],
              ['<code>or</code>', 'At least one must pass', '<code>A or B</code>'],
              ['<code>not</code>', 'You want the opposite', '<code>not b.frozen()</code>'],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'The real power comes from COMBINING these tools! Use if with and/or inside functions, then call those functions in loops. That\'s how professional code works!',
          },
        ],
      },
    },
    {
      id: 'L21S3',
      type: 'guided-example',
      title: 'Watch Me: Using All Conditionals Together',
      data: {
        intro: "Let me show you a solution that combines if, and/or, functions, AND loops — the full toolkit!",
        steps: [
          {
            label: 'Analyze the puzzle',
            result: 'I see frozen bananas, green bananas, and ripe bananas. Plus a goat to help break ice. I need to handle all three types!',
            annotation: 'This is a complex puzzle. Let me think about which conditional tools I need for each banana type.',
          },
          {
            label: 'Build a process function',
            code: 'process = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b',
            result: 'The function checks if frozen (uses goat), then walks to the banana. Green ones are auto-skipped, ripe ones are auto-collected.',
            annotation: 'I\'m using if to check for frozen, the goat for ice-breaking, and the auto-grab system handles the rest. One function covers all cases!',
          },
          {
            label: 'Loop through all bananas',
            code: 'process = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b\n\nfor b in bananas\n  process b',
            result: 'Every banana gets processed correctly! Frozen ones get ice-broken, green ones are skipped, ripe ones are collected.',
            annotation: 'This combines if (conditional), -> (function), and for (loop) — all the major tools working together!',
          },
        ],
      },
    },
    {
      id: 'L21S4',
      type: 'puzzle',
      title: 'Practice: Conditional Review',
      data: {
        intro: 'Put all your conditional skills to the test! These puzzles require combining if, and/or, functions, and loops.',
        puzzles: [
          { part: 2, id: 43 },
          { part: 2, id: 44 },
          { part: 2, id: 45 },
        ],
      },
    },
    {
      id: 'L21S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'Which conditional tool checks TWO conditions at once?',
            options: [
              '<code>if</code>',
              '<code>else</code>',
              '<code>and</code> / <code>or</code>',
              '<code>not</code>',
            ],
            correct: 2,
            feedback: 'The and and or operators combine two conditions into one check. AND requires both to be true; OR requires at least one.',
          },
          {
            type: 'true-false',
            question: 'You can combine loops, functions, and conditionals in the same code.',
            correct: true,
            feedback: 'Correct! Real programs combine all these tools together. A function can contain conditionals, and you call it from a loop.',
          },
          {
            type: 'multiple-choice',
            question: 'Which is the best way to handle frozen, green, and ripe bananas?',
            options: [
              'Write separate code for each banana',
              'Use a function with if statements, called in a loop',
              'Only collect ripe bananas and ignore the rest',
              'Use only until loops',
            ],
            correct: 1,
            feedback: 'A function with conditionals handles every case, and calling it in a loop processes all bananas automatically!',
          },
        ],
      },
    },
    {
      id: 'L21S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You've reviewed EVERY conditional tool in your toolkit! if, if-else, and, or, not — and you know how to combine them with loops and functions. You're coding like a professional!",
        keyTakeaways: [
          '<strong><code>if</code></strong> runs code when a condition is true. <strong><code>if-else</code></strong> chooses between two paths.',
          '<strong><code>and</code></strong> requires both conditions to be true. <strong><code>or</code></strong> requires at least one.',
          '<strong><code>not</code></strong> reverses a condition — flips true to false and vice versa.',
          '<strong>Combine everything!</strong> Functions with conditionals inside, called from loops, solve complex problems cleanly.',
        ],
        nextPreview: 'Get ready for the <strong>GRAND FINALE</strong>! Lesson 22 is the Stars Party — you\'ll optimize your code to earn 3 stars and tackle the ultimate puzzle that uses EVERYTHING you\'ve learned!',
      },
    },
  ],
};
