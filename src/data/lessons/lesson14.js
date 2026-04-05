/**
 * Lesson 14: Green Banana Sorbet — if-else, green bananas
 * Part 2, Original Lesson 24, Puzzles 22-24
 */

export default {
  id: 'L14',
  title: 'Green Banana Sorbet',
  sections: [
    {
      id: 'L14S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Not all bananas are created equal! Some are <strong>green</strong> (unripe) and the monkey should skip them. But how does your code choose between two options? That's where <strong>if-else</strong> comes in! It's like a fork in the road — your code picks one path or the other. Let's sort some bananas!",
        objectives: [
          'Write <strong>if-else</strong> statements to choose between two actions',
          'Use <code>banana.green()</code> to check if a banana is unripe',
          'Understand the difference between <code>if</code> (one action) and <code>if-else</code> (two actions)',
          'Handle mixed banana types: frozen, green, and ripe',
        ],
        essentialQuestions: [
          'When would you use if-else instead of just if?',
          'How does your code handle situations where there are more than two possible cases?',
        ],
      },
    },
    {
      id: 'L14S2',
      type: 'content',
      title: 'If-Else: Choosing Between Two Paths',
      data: {
        subtitle: 'When life gives you green bananas, skip them!',
        blocks: [
          {
            type: 'heading',
            level: 3,
            content: 'If-Else Statements',
          },
          {
            type: 'text',
            content: 'You already know <code>if</code> — it runs code when a condition is true. But what if you want to do something DIFFERENT when it\'s false? That\'s what <strong>else</strong> is for!',
          },
          {
            type: 'code-block',
            label: 'If-Else',
            code: 'if banana.green()\n  # skip it — do nothing\nelse\n  # collect it!\n  turnTo banana\n  step distanceTo banana',
            annotation: 'When the condition is true (banana is green), the first block runs. When it\'s false (banana is ripe), the else block runs. One or the other — never both!',
          },
          {
            type: 'key-term',
            term: 'If-Else',
            definition: 'A conditional that provides two paths: one for when the condition is true, and another for when it\'s false. Exactly one path always runs.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Green Bananas',
          },
          {
            type: 'text',
            content: '<code>banana.green()</code> returns <strong>true</strong> for unripe green bananas that the monkey should skip, and <strong>false</strong> for ripe yellow bananas that should be collected.',
          },
          {
            type: 'key-term',
            term: 'banana.green()',
            definition: 'Returns true for unripe green bananas (skip them!) and false for ripe yellow bananas (collect them!).',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Think of if-else like a true/false quiz question. The condition is either true or false, and each answer leads to a different action. There\'s no "maybe"!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'If vs. If-Else',
          },
          {
            type: 'text',
            content: 'Use <strong>if</strong> alone when you only want to do something extra in one case. Use <strong>if-else</strong> when you want to choose between two completely different actions.',
          },
          {
            type: 'code-block',
            label: 'If Only (one extra action)',
            code: '# If: do something extra for frozen bananas\nif b.frozen()\n  goat.goto b\n  goat.hit b\n# Then always collect\nturnTo b\nstep distanceTo b',
            annotation: 'With just <code>if</code>, the goat code is extra — it runs for frozen bananas, then the monkey ALWAYS collects. The collection code runs no matter what.',
          },
          {
            type: 'code-block',
            label: 'If-Else (choose one path)',
            code: '# If-else: do one thing OR another\nif b.green()\n  # skip\nelse\n  turnTo b\n  step distanceTo b',
            annotation: 'With <code>if-else</code>, you do one thing OR the other. Green bananas are skipped entirely; only ripe ones are collected.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Handling Multiple Types',
          },
          {
            type: 'text',
            content: 'What about puzzles with frozen, green, AND ripe bananas? You can check multiple conditions one after another!',
          },
          {
            type: 'code-block',
            label: 'Multiple Conditions',
            code: 'for b in bananas\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b',
            annotation: 'Frozen bananas get the goat treatment first. Green bananas are auto-skipped during collection. Ripe bananas are collected normally. Each condition handles its own case!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Real apps use if-else ALL the time! When you swipe right on a photo app: IF the photo is the last one, show "end of album", ELSE show the next photo. Every app is full of decisions like these!',
          },
        ],
      },
    },
    {
      id: 'L14S3',
      type: 'guided-example',
      title: 'Watch Me: Sorting Bananas',
      data: {
        intro: "Some bananas are green, some are frozen, some are ripe. Let me show you how to handle all of them with if-else!",
        steps: [
          {
            label: 'Survey the bananas',
            result: 'The grid has a mix: a green banana, a ripe banana, and a frozen banana. I need different handling for each type.',
            annotation: 'Three different cases: frozen needs the goat, green should be skipped, ripe should be collected. Time for conditional logic!',
          },
          {
            label: 'Write the handling logic',
            code: 'for b in bananas\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b',
            result: 'The code loops through all bananas. Frozen ones get the goat sent first. Then the monkey walks to each one — green bananas are automatically skipped during collection.',
            annotation: 'The if statement handles the frozen case. The auto-grab system handles skipping green bananas. Simple and effective!',
          },
          {
            label: 'Verify the results',
            result: 'The frozen banana was defrosted by the goat and collected. The green banana was visited but skipped. The ripe banana was collected normally. All cases handled!',
            annotation: 'Each banana type got the right treatment. That\'s the power of conditionals — your code makes smart decisions for each situation.',
          },
        ],
      },
    },
    {
      id: 'L14S4',
      type: 'puzzle',
      title: 'Practice: Green Banana Puzzles',
      data: {
        intro: 'Sort through green, frozen, and ripe bananas using if-else conditionals. Think about which bananas to skip and which to collect!',
        puzzles: [
          { part: 2, id: 22 },
          { part: 2, id: 23 },
          { part: 2, id: 24 },
        ],
      },
    },
    {
      id: 'L14S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does the <code>else</code> part of if-else do?',
            options: [
              'Runs when the condition is true',
              'Runs when the condition is false',
              'Runs every time',
              'Does nothing',
            ],
            correct: 1,
            feedback: 'The else block runs when the if condition is false. It provides an alternative path — the code goes one way or the other.',
          },
          {
            type: 'true-false',
            question: '<code>banana.green()</code> returns true for ripe yellow bananas.',
            correct: false,
            feedback: 'green() returns true for GREEN (unripe) bananas, not yellow ones! Ripe yellow bananas return false.',
          },
          {
            type: 'multiple-choice',
            question: 'When should you use <code>if-else</code> instead of just <code>if</code>?',
            options: [
              'When you only need one action',
              'When you want to choose between two different actions',
              'When you have a loop',
              'When you define a function',
            ],
            correct: 1,
            feedback: 'Use if-else when you have two different paths and want exactly one of them to run. Use just if when you only need an optional extra action.',
          },
        ],
      },
    },
    {
      id: 'L14S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Your code is getting SMART! With if-else, the monkey can make real decisions — collect ripe bananas, skip green ones, and call the goat for frozen ones. You're handling multiple cases like a pro programmer!",
        keyTakeaways: [
          '<strong>If-else</strong> lets your code choose between two paths: one for true, one for false.',
          '<strong>banana.green()</strong> returns true for unripe green bananas that should be skipped.',
          'Use <strong>if</strong> alone for an optional extra action. Use <strong>if-else</strong> when you need to choose between two different actions.',
          'You can check <strong>multiple conditions</strong> one after another to handle frozen, green, and ripe bananas differently.',
        ],
        nextPreview: 'Next lesson: <strong>If All Else Fails</strong>! You\'ll practice putting if-else inside functions and handling even more complex decision-making scenarios!',
      },
    },
  ],
};
