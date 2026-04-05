/**
 * Lesson 19: Fashion Alert! — penguins, and/or with if
 * Part 2, Original Lesson 29, Puzzle IDs 37-39
 */

export default {
  id: 'L19',
  title: 'Fashion Alert!',
  sections: [
    {
      id: 'L19S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "New characters incoming! Say hello to the <strong>penguins</strong>! These stylish birds wear accessories — some have glasses, some have bow ties, and some have BOTH. You'll use <code>and</code> and <code>or</code> to figure out which penguins are the fanciest!",
        objectives: [
          'Use <code>p.hasGlasses()</code> and <code>p.hasBowTie()</code> to check penguin accessories',
          'Combine <code>and</code> and <code>or</code> to filter penguins by their accessories',
          'Apply logic operators in real scenarios with new object types',
        ],
        essentialQuestions: [
          'How do you check what properties an object has?',
          'When would you use <code>and</code> vs. <code>or</code> to filter penguins?',
        ],
      },
    },
    {
      id: 'L19S2',
      type: 'content',
      title: 'Penguin Accessories & Logic',
      data: {
        subtitle: 'Fashion meets Boolean logic!',
        blocks: [
          {
            type: 'text',
            content: 'The penguins have arrived, and they\'re dressed to impress! Each penguin may or may not have <strong>glasses</strong> and a <strong>bow tie</strong>. Your job is to use logic operators to identify the right penguins.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Checking Penguin Accessories',
          },
          {
            type: 'text',
            content: 'Each penguin has two methods you can check:',
          },
          {
            type: 'code-block',
            label: 'Penguin Checks',
            code: 'if p.hasGlasses()\n  # this penguin wears glasses!\n\nif p.hasBowTie()\n  # this one has a bow tie!',
            annotation: 'Each method returns true or false. You can check them individually or combine them with and/or.',
          },
          {
            type: 'key-term',
            term: 'hasGlasses()',
            definition: 'Returns <code>true</code> if the penguin is wearing glasses, <code>false</code> otherwise.',
          },
          {
            type: 'key-term',
            term: 'hasBowTie()',
            definition: 'Returns <code>true</code> if the penguin has a bow tie, <code>false</code> otherwise.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Combining with AND and OR',
          },
          {
            type: 'text',
            content: 'Now you can use everything you learned about <code>and</code> and <code>or</code> with penguins:',
          },
          {
            type: 'code-block',
            label: 'AND with Penguins',
            code: 'if p.hasGlasses() and p.hasBowTie()\n  # extra fancy! Has BOTH accessories',
            annotation: 'AND requires both — only penguins with glasses AND a bow tie match.',
          },
          {
            type: 'code-block',
            label: 'OR with Penguins',
            code: 'if p.hasGlasses() or p.hasBowTie()\n  # has at least one accessory',
            annotation: 'OR is more flexible — any penguin with at LEAST one accessory matches.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Think about what you\'re looking for: "the fanciest penguin" (AND — needs both) vs. "any dressed-up penguin" (OR — needs at least one).',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Looping Through Penguins',
          },
          {
            type: 'text',
            content: 'Just like bananas, you can loop through the <code>penguins</code> array:',
          },
          {
            type: 'code-block',
            label: 'Penguin Loop',
            code: 'for p in penguins\n  if p.hasGlasses() and p.hasBowTie()\n    turnTo p\n    step distanceTo p',
            annotation: 'This only visits penguins that have BOTH accessories. Others are skipped.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'This is how search filters work in real apps! When you filter products by "color: red AND size: medium," the app uses AND logic. When you search "comedy OR action" movies, it uses OR logic!',
          },
        ],
      },
    },
    {
      id: 'L19S3',
      type: 'guided-example',
      title: 'Watch Me: Finding Fancy Penguins',
      data: {
        intro: "Let me show you how to use AND and OR to find penguins with the right accessories!",
        steps: [
          {
            label: 'Survey the penguins',
            result: 'I see three penguins: one with glasses only, one with a bow tie only, and one with both! Plus there are bananas to collect.',
            annotation: 'I need to figure out which penguins match my criteria. Let me check their accessories with hasGlasses() and hasBowTie().',
          },
          {
            label: 'Find the fanciest penguin (AND)',
            code: 'for p in penguins\n  if p.hasGlasses() and p.hasBowTie()\n    turnTo p\n    step distanceTo p',
            result: 'Only one penguin has BOTH glasses and a bow tie. The monkey visits just that one!',
            annotation: 'AND is strict — only the penguin with both accessories passes the check.',
          },
          {
            label: 'Find any dressed-up penguin (OR)',
            code: 'for p in penguins\n  if p.hasGlasses() or p.hasBowTie()\n    turnTo p\n    step distanceTo p',
            result: 'Two out of three penguins have at least one accessory. The monkey visits both of them!',
            annotation: 'OR is flexible — any penguin with at least one accessory qualifies. The plain penguin is the only one left out.',
          },
        ],
      },
    },
    {
      id: 'L19S4',
      type: 'puzzle',
      title: 'Practice: Fashion Alert!',
      data: {
        intro: 'Meet the penguins! Use <code>hasGlasses()</code>, <code>hasBowTie()</code>, and logic operators to filter and visit the right penguins while collecting bananas.',
        puzzles: [
          { part: 2, id: 37 },
          { part: 2, id: 38 },
          { part: 2, id: 39 },
        ],
      },
    },
    {
      id: 'L19S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: '<code>p.hasGlasses() and p.hasBowTie()</code> is true when:',
            options: [
              'Penguin has glasses',
              'Penguin has a bow tie',
              'Penguin has BOTH glasses and a bow tie',
              'Penguin has EITHER glasses or a bow tie',
            ],
            correct: 2,
            feedback: 'AND requires both conditions to be true. The penguin must have glasses AND a bow tie.',
          },
          {
            type: 'multiple-choice',
            question: '<code>p.hasGlasses() or p.hasBowTie()</code> is true when:',
            options: [
              'Penguin has both accessories',
              'Penguin has at least one accessory',
              'Penguin has no accessories',
              'Never',
            ],
            correct: 1,
            feedback: 'OR requires at least one condition to be true. Any penguin with glasses, a bow tie, or both qualifies.',
          },
          {
            type: 'multiple-choice',
            question: 'Which operator finds penguins with NO accessories?',
            options: [
              '<code>p.hasGlasses() and p.hasBowTie()</code>',
              '<code>p.hasGlasses() or p.hasBowTie()</code>',
              '<code>not p.hasGlasses() and not p.hasBowTie()</code>',
              '<code>not p.hasGlasses() or not p.hasBowTie()</code>',
            ],
            correct: 2,
            feedback: 'To find penguins with NO accessories, both hasGlasses() and hasBowTie() must be false. Use not on both with and!',
          },
        ],
      },
    },
    {
      id: 'L19S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "The penguins are impressed with your logic skills! You can now filter objects by their properties using AND and OR. Whether it's accessories, banana types, or anything else — you've got the tools to check any combination!",
        keyTakeaways: [
          '<strong><code>hasGlasses()</code> and <code>hasBowTie()</code></strong> check penguin accessories, returning true or false.',
          '<strong>Use <code>and</code></strong> to find penguins with BOTH accessories (strict filter).',
          '<strong>Use <code>or</code></strong> to find penguins with at LEAST one accessory (flexible filter).',
          '<strong>Logic operators work with any objects</strong> — not just bananas! Penguins, turtles, and more.',
        ],
        nextPreview: 'In Lesson 20, you\'ll <strong>review all three loop types</strong> — for-range, for-in, and until. Each one is best for different situations. Time to become a loop master!',
      },
    },
  ],
};
