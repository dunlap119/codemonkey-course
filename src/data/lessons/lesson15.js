/**
 * Lesson 15: If All Else Fails — advanced if-else practice
 * Part 2, Original Lesson 25, Puzzle IDs 25-27
 */

export default {
  id: 'L15',
  title: 'If All Else Fails',
  sections: [
    {
      id: 'L15S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "You've been making decisions with <code>if</code> and <code>if-else</code> — now it's time to level up! What happens when you have <strong>multiple conditions</strong> to check in a row? Let's build some serious decision-making code!",
        objectives: [
          'Use <code>if-else</code> inside functions to handle different cases',
          'Chain multiple <code>if</code> checks in sequence',
          'Combine conditionals with loops and functions for complex puzzles',
        ],
        essentialQuestions: [
          'When should you use multiple if statements instead of if-else?',
          'How can functions help organize conditional logic?',
        ],
      },
    },
    {
      id: 'L15S2',
      type: 'content',
      title: 'Conditional Logic in Functions',
      data: {
        subtitle: 'Handle every situation like a pro!',
        blocks: [
          {
            type: 'text',
            content: 'You already know how to use <code>if</code> and <code>if-else</code> to make decisions. Now let\'s put conditional logic <strong>inside functions</strong> so the monkey can handle any type of banana automatically!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Real apps use this pattern all the time! A music app might have a function that checks: is this song downloaded? Is it a podcast? Is it a live stream? Different conditions need different handling.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'If-Else Inside Functions',
          },
          {
            type: 'text',
            content: 'You can put <code>if-else</code> inside a function to handle different cases. This is powerful because you can call the function for every banana and it figures out what to do:',
          },
          {
            type: 'code-block',
            label: 'Conditional Function',
            code: 'handle = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  if b.green()\n    # skip it\n  else\n    goto b',
            annotation: 'This function checks multiple conditions. Frozen bananas get the goat treatment. Green ones are skipped. Ripe ones get collected!',
          },
          {
            type: 'key-term',
            term: 'Conditional Function',
            definition: 'A function that uses <code>if</code> or <code>if-else</code> inside to handle different situations. It makes decisions each time it\'s called based on the input.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Multiple If Checks',
          },
          {
            type: 'text',
            content: 'Sometimes you need to check several conditions one after another. Each <code>if</code> is checked independently:',
          },
          {
            type: 'code-block',
            label: 'Multiple Checks',
            code: 'handle = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b',
            annotation: 'The frozen check runs first. Then the monkey walks to the banana regardless. Multiple if statements let you handle overlapping conditions.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Two separate <code>if</code> statements are both checked independently. With <code>if-else</code>, only ONE branch runs. Choose wisely based on whether the conditions are exclusive!',
          },
        ],
      },
    },
    {
      id: 'L15S3',
      type: 'guided-example',
      title: 'Watch Me: Building a Smart Handler',
      data: {
        intro: "Let me show you how to build a function that handles frozen, green, AND ripe bananas all in one!",
        steps: [
          {
            label: 'Identify the different banana types',
            result: 'I see frozen bananas (need goat), green bananas (skip), and ripe bananas (collect). Three different cases!',
            annotation: 'Before writing code, I count how many different situations the monkey will face. Here there are three types of bananas.',
          },
          {
            label: 'Build the handler function',
            code: 'handle = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b',
            result: 'The function checks if a banana is frozen first. If so, the goat breaks the ice. Then the monkey walks to the banana either way.',
            annotation: 'Frozen bananas get the goat treatment first, then the monkey walks there. Green bananas are auto-skipped. Ripe ones are auto-collected. One function handles everything!',
          },
          {
            label: 'Use it in a loop',
            code: 'for b in bananas\n  handle b',
            result: 'The loop calls handle for every banana. Each one gets the right treatment automatically!',
            annotation: 'This is the power of conditional functions — write the logic once, and it works for any banana in any order.',
          },
        ],
      },
    },
    {
      id: 'L15S4',
      type: 'puzzle',
      title: 'Practice: If All Else Fails',
      data: {
        intro: 'Use conditional functions to handle frozen, green, and ripe bananas. Think about which conditions to check and in what order!',
        puzzles: [
          { part: 2, id: 25 },
          { part: 2, id: 26 },
          { part: 2, id: 27 },
        ],
      },
    },
    {
      id: 'L15S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What happens when you use two <code>if</code> statements in a row?',
            options: [
              'Only the first runs',
              'Only the second runs',
              'Both are checked independently',
              'It causes an error',
            ],
            correct: 2,
            feedback: 'Each if statement is checked on its own. Both conditions are evaluated, and both blocks can run if both are true.',
          },
          {
            type: 'true-false',
            question: '<code>if-else</code> is better than two separate <code>if</code> statements when the conditions are opposites.',
            correct: true,
            feedback: 'Correct! if-else is cleaner when you have two opposite cases — only one branch runs.',
          },
          {
            type: 'multiple-choice',
            question: 'Why put <code>if</code> statements inside a function?',
            options: [
              'It makes the code run faster',
              'So you can reuse the decision logic for multiple items',
              'It is required by CoffeeScript',
              'Functions cannot contain if statements',
            ],
            correct: 1,
            feedback: 'Putting conditionals in functions lets you call the same decision-making logic on every item in a loop!',
          },
        ],
      },
    },
    {
      id: 'L15S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Now you can handle ANY situation! Frozen, green, ripe — your functions check the conditions and do the right thing. That's some seriously smart monkey code!",
        keyTakeaways: [
          '<strong>Conditional functions</strong> use <code>if-else</code> inside to handle different cases automatically.',
          '<strong>Multiple if checks</strong> are evaluated independently — both can run if both conditions are true.',
          '<strong>Use if-else</strong> when conditions are opposites (one or the other). Use separate <code>if</code> statements when checks are independent.',
          '<strong>Combine loops + functions + conditionals</strong> to build powerful solutions.',
        ],
        nextPreview: 'In Lesson 16, you\'ll learn the <strong>AND operator</strong> — combining two conditions into one check. If BOTH conditions are true, the result is true!',
      },
    },
  ],
};
