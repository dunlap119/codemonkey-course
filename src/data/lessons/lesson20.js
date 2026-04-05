/**
 * Lesson 20: Loops are Fun — review all loop types
 * Part 2, Original Lesson 30, Puzzle IDs 40-42
 */

export default {
  id: 'L20',
  title: 'Loops are Fun',
  sections: [
    {
      id: 'L20S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "You've been using loops throughout this whole course — now it's time for a <strong>loop review</strong>! There are three types, and each one shines in different situations. Let's make sure you know exactly when to use each one!",
        objectives: [
          'Review <code>for i in [1..n]</code> range loops',
          'Review <code>for b in bananas</code> collection loops',
          'Review <code>until condition</code> loops',
          'Choose the right loop type for each situation',
        ],
        essentialQuestions: [
          'What are the three types of loops and when should you use each?',
          'How do you decide which loop fits the problem?',
        ],
      },
    },
    {
      id: 'L20S2',
      type: 'content',
      title: 'Loop Review: Three Types',
      data: {
        subtitle: 'The right loop for the right job!',
        blocks: [
          {
            type: 'text',
            content: 'You\'ve learned three types of loops throughout this course. Let\'s review each one and understand when to use them!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Type 1: For-Range Loop',
          },
          {
            type: 'code-block',
            label: 'For-Range',
            code: 'for i in [1..8]\n  step 1',
            annotation: 'Repeats exactly 8 times. Use this when you know the EXACT number of repetitions.',
          },
          {
            type: 'text',
            content: '<strong>Best for:</strong> When you know exactly how many times to repeat. The number can be a variable too: <code>for i in [1..n]</code>.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Type 2: For-In Loop',
          },
          {
            type: 'code-block',
            label: 'For-In',
            code: 'for b in bananas\n  turnTo b\n  step distanceTo b',
            annotation: 'Runs once for each banana in the array. The variable b represents the current banana.',
          },
          {
            type: 'text',
            content: '<strong>Best for:</strong> When you want to visit or process every item in a collection. Works with any array — bananas, penguins, custom arrays, etc.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Type 3: Until Loop',
          },
          {
            type: 'code-block',
            label: 'Until',
            code: 'until near banana\n  step 1',
            annotation: 'Keeps going until the condition is true. Use this when you don\'t know exactly how many times to repeat.',
          },
          {
            type: 'text',
            content: '<strong>Best for:</strong> When you don\'t know the exact count — you just know when to stop. Great for "keep going until you reach the target" situations.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Choosing the Right Loop',
          },
          {
            type: 'comparison-table',
            headers: ['Situation', 'Best Loop', 'Why'],
            rows: [
              ['Do something exactly 5 times', '<code>for i in [1..5]</code>', 'You know the exact count'],
              ['Visit every banana', '<code>for b in bananas</code>', 'You want to process each item'],
              ['Walk until you reach something', '<code>until near target</code>', 'You don\'t know the distance'],
              ['Process a custom list of targets', '<code>for t in targets</code>', 'Iterate through your array'],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'When in doubt, ask yourself: "Do I know exactly how many times?" If yes, use for-range. "Am I processing a list?" Use for-in. "Am I waiting for something?" Use until.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Professional programmers use these same three patterns every day! Python has "for i in range(n)," "for item in list," and "while condition." The syntax is different but the ideas are the same!',
          },
        ],
      },
    },
    {
      id: 'L20S3',
      type: 'guided-example',
      title: 'Watch Me: Picking the Right Loop',
      data: {
        intro: "Let me show you how to choose the right loop for different puzzles!",
        steps: [
          {
            label: 'Scenario 1: 8 bananas in a line',
            code: 'for i in [1..8]\n  step 1',
            result: 'The monkey collects all 8 bananas by stepping forward 8 times.',
            annotation: 'I know exactly how many steps: 8. A for-range loop is perfect — simple and clean!',
          },
          {
            label: 'Scenario 2: Scattered bananas',
            code: 'for b in bananas\n  turnTo b\n  step distanceTo b',
            result: 'The monkey turns and walks to each banana, no matter where it is on the grid.',
            annotation: 'Bananas are scattered in different positions. A for-in loop visits each one using turnTo and step distanceTo.',
          },
          {
            label: 'Scenario 3: Unknown distance with obstacles',
            code: 'turn down\nuntil near banana\n  step 1',
            result: 'The monkey walks step by step until it\'s near the banana, avoiding getting stuck.',
            annotation: 'I don\'t know the exact distance, and there might be obstacles. The until loop keeps going until the condition is met — flexible and safe!',
          },
        ],
      },
    },
    {
      id: 'L20S4',
      type: 'puzzle',
      title: 'Practice: Loop Review',
      data: {
        intro: 'Each puzzle is designed for a different loop type. Think about which loop fits best before you start coding!',
        puzzles: [
          { part: 2, id: 40 },
          { part: 2, id: 41 },
          { part: 2, id: 42 },
        ],
      },
    },
    {
      id: 'L20S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'Which loop type is best when you don\'t know the exact distance?',
            options: [
              '<code>for i in [1..n]</code>',
              '<code>until near target</code>',
              '<code>for b in bananas</code>',
              'All work equally well',
            ],
            correct: 1,
            feedback: 'Until loops keep going until a condition is met, making them perfect when you don\'t know the exact number of steps.',
          },
          {
            type: 'multiple-choice',
            question: 'Which loop type is best for visiting every item in a collection?',
            options: [
              '<code>for i in [1..n]</code>',
              '<code>until near target</code>',
              '<code>for b in bananas</code>',
              '<code>while true</code>',
            ],
            correct: 2,
            feedback: 'For-in loops automatically iterate through every item in an array, making them perfect for processing collections.',
          },
          {
            type: 'multiple-choice',
            question: 'You need to repeat an action exactly 10 times. Which loop is best?',
            options: [
              '<code>for i in [1..10]</code>',
              '<code>until near banana</code>',
              '<code>for b in bananas</code>',
              'Any loop works the same',
            ],
            correct: 0,
            feedback: 'For-range loops are perfect when you know the exact number of repetitions. for i in [1..10] repeats exactly 10 times.',
          },
        ],
      },
    },
    {
      id: 'L20S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Loop master status: ACHIEVED! You know all three loop types and when to use each one. For-range for exact counts, for-in for collections, and until for conditions. That's some serious coding knowledge!",
        keyTakeaways: [
          '<strong><code>for i in [1..n]</code></strong> — repeats exactly n times. Use when you know the count.',
          '<strong><code>for b in bananas</code></strong> — visits every item in a collection. Use for processing arrays.',
          '<strong><code>until condition</code></strong> — repeats until something becomes true. Use when you don\'t know the count.',
          '<strong>Choose wisely!</strong> The right loop makes your code cleaner. Ask: Do I know the count? Am I processing a list? Am I waiting for something?',
        ],
        nextPreview: 'In Lesson 21, you\'ll <strong>review all conditional tools</strong> — if, if-else, and, or, and not. Time to put your decision-making skills to the ultimate test!',
      },
    },
  ],
};
