/**
 * Lesson 17: Take it or Leave it! — the OR operator
 * Part 2, Original Lesson 27, Puzzle IDs 31-33
 */

export default {
  id: 'L17',
  title: 'Take it or Leave it!',
  sections: [
    {
      id: 'L17S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Last lesson you learned <code>and</code> — both conditions must be true. But what if you want to check if <strong>at least one</strong> thing is true? That's the <code>or</code> operator! If a banana is frozen OR green, it's got a problem. Let's take it or leave it!",
        objectives: [
          'Understand how the <code>or</code> operator combines conditions',
          'Read a truth table for <code>or</code>',
          'Compare <code>and</code> vs. <code>or</code> and choose the right one',
          'Use <code>or</code> in functions with loops',
        ],
        essentialQuestions: [
          'When is an <code>or</code> expression true?',
          'How is <code>or</code> different from <code>and</code>?',
        ],
      },
    },
    {
      id: 'L17S2',
      type: 'content',
      title: 'The OR Operator',
      data: {
        subtitle: 'At least one must be true!',
        blocks: [
          {
            type: 'text',
            content: 'The <code>or</code> operator checks two conditions and returns true if <strong>at least one</strong> of them is true. It\'s only false when BOTH conditions are false.',
          },
          {
            type: 'code-block',
            label: 'Using or',
            code: 'if b.frozen() or b.green()\n  # this banana has a problem!',
            annotation: 'This is true if the banana is frozen, green, or both. Any problem flags the banana.',
          },
          {
            type: 'key-term',
            term: 'OR Operator',
            definition: 'Combines two conditions. The result is <code>true</code> when at least one condition is true. Only false when BOTH are false.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Truth Table for OR',
          },
          {
            type: 'text',
            content: 'Compare this truth table with the AND table from last lesson. Notice how OR is much more generous — it only needs ONE condition to pass:',
          },
          {
            type: 'comparison-table',
            headers: ['Condition A', 'Condition B', 'A or B'],
            rows: [
              ['true', 'true', '<strong style="color:#4a4;">true</strong>'],
              ['true', 'false', '<strong style="color:#4a4;">true</strong>'],
              ['false', 'true', '<strong style="color:#4a4;">true</strong>'],
              ['false', 'false', '<span style="color:#a44;">false</span>'],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Think of <code>or</code> like a friendly doorman: if you have ANY valid ID, you can come in. Only if you have NOTHING are you turned away!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'AND vs. OR',
          },
          {
            type: 'comparison-table',
            headers: ['Operator', 'True When...', 'Use When You Need...'],
            rows: [
              ['<code>and</code>', 'BOTH conditions are true', 'Everything to pass (strict)'],
              ['<code>or</code>', 'At LEAST one is true', 'Any one thing to pass (flexible)'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            content: 'De Morgan\'s Law (Bonus!)',
          },
          {
            type: 'text',
            content: 'Here\'s a cool trick: <code>not (A or B)</code> is the same as <code>not A and not B</code>. Flipping an <code>or</code> with <code>not</code> turns it into <code>and</code> — and vice versa!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'De Morgan\'s Law is named after Augustus De Morgan, a 19th-century mathematician. Programmers use this rule all the time to simplify complex conditions!',
          },
        ],
      },
    },
    {
      id: 'L17S3',
      type: 'guided-example',
      title: 'Watch Me: Using OR to Detect Problems',
      data: {
        intro: "Let me show you how OR helps detect bananas with ANY kind of problem!",
        steps: [
          {
            label: 'Identify the banana problems',
            result: 'Some bananas are frozen (need goat), some are green (skip), and some are ripe (collect). I want to find bananas with ANY problem.',
            annotation: 'If a banana is frozen OR green, it has a problem. The <code>or</code> operator catches either issue in one check.',
          },
          {
            label: 'Write the OR condition',
            code: 'if b.frozen() or b.green()\n  # banana has a problem!\nelse\n  # safe to collect!',
            result: 'Frozen bananas? Caught. Green bananas? Caught. Both frozen AND green? Also caught. Only ripe bananas pass the else branch.',
            annotation: 'With <code>or</code>, having even ONE problem is enough to flag the banana. Only perfectly ripe bananas skip the if block.',
          },
          {
            label: 'Build the full solution',
            code: 'process = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b\n\nfor b in bananas\n  process b',
            result: 'Each banana gets processed: frozen ones get goat help, then the monkey walks to all of them. Green are auto-skipped, ripe are collected!',
            annotation: 'The process function combines conditionals with the goat and handles every banana type correctly.',
          },
        ],
      },
    },
    {
      id: 'L17S4',
      type: 'puzzle',
      title: 'Practice: OR Operator',
      data: {
        intro: 'Use the <code>or</code> operator to check if bananas have any problems. Remember: with <code>or</code>, at least one side must be true for the whole thing to be true!',
        puzzles: [
          { part: 2, id: 31 },
          { part: 2, id: 32 },
          { part: 2, id: 33 },
        ],
      },
    },
    {
      id: 'L17S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'When is <code>A or B</code> true?',
            options: [
              'Only when both are true',
              'When at least one is true',
              'Only when A is true',
              'Never',
            ],
            correct: 1,
            feedback: 'The or operator returns true when at least one condition is true. It\'s only false when BOTH are false.',
          },
          {
            type: 'multiple-choice',
            question: '<code>not (A or B)</code> is the same as:',
            options: [
              'not A or not B',
              'not A and not B',
              'A and B',
              'A or B',
            ],
            correct: 1,
            feedback: 'This is De Morgan\'s Law! Negating an OR turns it into AND with negated parts. not (A or B) = not A and not B.',
          },
          {
            type: 'multiple-choice',
            question: 'Which operator should you use to check if a banana has ANY problem (frozen or green)?',
            options: [
              '<code>and</code>',
              '<code>or</code>',
              '<code>not</code>',
              '<code>if</code>',
            ],
            correct: 1,
            feedback: 'Use or when you want to catch ANY of several conditions. b.frozen() or b.green() catches bananas with either issue.',
          },
        ],
      },
    },
    {
      id: 'L17S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "AND and OR — you've got the dynamic duo of logic! <code>and</code> is the strict one (both must pass), <code>or</code> is the flexible one (just one needs to pass). You're thinking like a real programmer now!",
        keyTakeaways: [
          '<strong>The <code>or</code> operator</strong> is true when at least one condition is true — only false when BOTH are false.',
          '<strong><code>and</code> vs. <code>or</code></strong>: AND requires both; OR requires at least one.',
          '<strong>De Morgan\'s Law:</strong> <code>not (A or B)</code> equals <code>not A and not B</code>.',
          '<strong>Use <code>or</code></strong> to catch items with ANY of several properties (like frozen or green bananas).',
        ],
        nextPreview: 'In Lesson 18, you\'ll learn about <strong>array literals</strong> — creating your own custom lists with <code>[ ]</code>. You\'ll mix different object types and plan optimal routes!',
      },
    },
  ],
};
