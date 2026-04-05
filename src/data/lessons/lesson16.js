/**
 * Lesson 16: And in the End — the AND operator
 * Part 2, Original Lesson 26, Puzzle IDs 28-30
 */

export default {
  id: 'L16',
  title: 'And in the End',
  sections: [
    {
      id: 'L16S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "What if you need <strong>TWO things</strong> to be true at the same time? Like: the banana is NOT frozen <strong>AND</strong> NOT green? That's where the <code>and</code> operator comes in. Let's learn to combine conditions!",
        objectives: [
          'Understand how the <code>and</code> operator combines two conditions',
          'Read a truth table for <code>and</code>',
          'Use <code>and</code> in <code>if</code> statements and functions',
        ],
        essentialQuestions: [
          'When is an <code>and</code> expression true?',
          'Why would you combine conditions instead of using separate if statements?',
        ],
      },
    },
    {
      id: 'L16S2',
      type: 'content',
      title: 'The AND Operator',
      data: {
        subtitle: 'Both must be true!',
        blocks: [
          {
            type: 'text',
            content: 'Sometimes one condition isn\'t enough. You need to check <strong>two things at once</strong>. The <code>and</code> operator lets you combine conditions — and the result is only true when <strong>BOTH</strong> are true.',
          },
          {
            type: 'code-block',
            label: 'Using and',
            code: 'if not b.frozen() and not b.green()\n  # safe to collect!',
            annotation: 'This checks two things: the banana is NOT frozen AND NOT green. Only when BOTH conditions are true does the code inside run.',
          },
          {
            type: 'key-term',
            term: 'AND Operator',
            definition: 'Combines two conditions. The result is <code>true</code> only when BOTH conditions are true. If either one is false, the whole thing is false.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Truth Table for AND',
          },
          {
            type: 'text',
            content: 'A truth table shows every possible combination of inputs and the result. Here\'s the truth table for <code>and</code>:',
          },
          {
            type: 'comparison-table',
            headers: ['Condition A', 'Condition B', 'A and B'],
            rows: [
              ['true', 'true', '<strong style="color:#4a4;">true</strong>'],
              ['true', 'false', '<span style="color:#a44;">false</span>'],
              ['false', 'true', '<span style="color:#a44;">false</span>'],
              ['false', 'false', '<span style="color:#a44;">false</span>'],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Think of <code>and</code> like a strict bouncer: BOTH conditions must pass to get in. If even one fails, you\'re out!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'AND with Functions',
          },
          {
            type: 'text',
            content: 'You can use <code>and</code> inside functions to create smart filters:',
          },
          {
            type: 'code-block',
            label: 'AND in a Function',
            code: 'process = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b\n\nfor b in bananas\n  process b',
            annotation: 'The function handles each banana: frozen ones get the goat, then the monkey walks to collect. Combined with <code>and</code>, you can build even smarter checks!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Logic operators like <code>and</code> were invented by mathematician George Boole in the 1800s. That\'s why true/false values are called "Boolean" values — named after him!',
          },
        ],
      },
    },
    {
      id: 'L16S3',
      type: 'guided-example',
      title: 'Watch Me: Filtering with AND',
      data: {
        intro: "Let me show you how to use AND to check multiple conditions at once when processing bananas!",
        steps: [
          {
            label: 'Identify the conditions',
            result: 'Some bananas are frozen, some are green, and some are ripe. I need to handle frozen ones with the goat and only collect the safe ones.',
            annotation: 'I need to think about which combinations of conditions matter. A banana that is NOT frozen AND NOT green is safe to eat!',
          },
          {
            label: 'Write the condition with and',
            code: 'if not b.frozen() and not b.green()\n  turnTo b\n  step distanceTo b',
            result: 'This only collects bananas that pass BOTH checks — not frozen AND not green.',
            annotation: 'The <code>and</code> operator combines both checks into a single line. Much cleaner than nesting two separate if statements!',
          },
          {
            label: 'Handle the frozen case too',
            code: 'process = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b\n\nfor b in bananas\n  process b',
            result: 'Frozen bananas get the goat treatment first. Then the monkey walks to each banana. Green ones are auto-skipped, ripe ones are collected!',
            annotation: 'By combining conditionals with the goat and auto-skip behavior, we handle every type of banana correctly.',
          },
        ],
      },
    },
    {
      id: 'L16S4',
      type: 'puzzle',
      title: 'Practice: AND Operator',
      data: {
        intro: 'Use the <code>and</code> operator to combine conditions. Remember: with <code>and</code>, BOTH sides must be true for the whole expression to be true!',
        puzzles: [
          { part: 2, id: 28 },
          { part: 2, id: 29 },
          { part: 2, id: 30 },
        ],
      },
    },
    {
      id: 'L16S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'When is <code>A and B</code> true?',
            options: [
              'When A is true',
              'When B is true',
              'When BOTH A and B are true',
              'When either is true',
            ],
            correct: 2,
            feedback: 'The and operator requires BOTH conditions to be true. If either one is false, the result is false.',
          },
          {
            type: 'true-false',
            question: '<code>not frozen() and not green()</code> means the banana is safe to eat.',
            correct: true,
            feedback: 'Correct! Both conditions must be true — not frozen AND not green means it\'s a ripe, unfrozen banana.',
          },
          {
            type: 'multiple-choice',
            question: 'What is the result of <code>true and false</code>?',
            options: [
              'true',
              'false',
              'It depends',
              'Error',
            ],
            correct: 1,
            feedback: 'With and, BOTH must be true. Since one is false, the whole expression is false.',
          },
        ],
      },
    },
    {
      id: 'L16S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You just learned Boolean logic! George Boole would be proud. You can now combine conditions with <code>and</code> to make really precise checks. The monkey's decision-making just got a major upgrade!",
        keyTakeaways: [
          '<strong>The <code>and</code> operator</strong> combines two conditions — BOTH must be true for the result to be true.',
          '<strong>Truth tables</strong> show every possible combination of inputs and outputs for a logical operator.',
          '<strong><code>not b.frozen() and not b.green()</code></strong> checks that a banana is safe to collect.',
          '<strong>Use <code>and</code> inside functions</strong> to build smart, reusable decision logic.',
        ],
        nextPreview: 'In Lesson 17, you\'ll learn the <strong>OR operator</strong> — true when at LEAST one condition is true. It\'s the opposite philosophy from AND!',
      },
    },
  ],
};
