/**
 * Lesson 11: Cut to the Chase — until + functions, chase pattern, runtime efficiency
 * Part 2, Original Lesson 21, Puzzles 13-15
 */

export default {
  id: 'L11',
  title: 'Cut to the Chase',
  sections: [
    {
      id: 'L11S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Time to combine what you know into something amazing! You'll create a <strong>chase</strong> function that uses <code>until near</code> to track down any target on the grid. We'll also talk about <strong>runtime efficiency</strong> — is there a faster way to reach the banana? Let's cut to the chase!",
        objectives: [
          'Build a <strong>chase function</strong> that combines <code>turnTo</code>, <code>until</code>, and <code>near</code>',
          'Use the chase function with <strong>for loops</strong> to collect many bananas',
          'Understand <strong>runtime efficiency</strong> — comparing different approaches to the same problem',
        ],
        essentialQuestions: [
          'How does combining until loops with functions make code more powerful and reusable?',
          'When should you choose step distanceTo over until near, and vice versa?',
        ],
      },
    },
    {
      id: 'L11S2',
      type: 'content',
      title: 'The Chase Pattern',
      data: {
        subtitle: 'One function to find them all!',
        blocks: [
          {
            type: 'heading',
            level: 3,
            content: 'Building the Chase Function',
          },
          {
            type: 'text',
            content: 'Combining <code>until</code> with functions creates powerful patterns. The <strong>chase</strong> function wraps up the "turn toward and walk until near" pattern into a single, reusable command.',
          },
          {
            type: 'code-block',
            label: 'The Chase Function',
            code: 'chase = (b) ->\n  turnTo b\n  until near b\n    step 1',
            annotation: 'This function works for <strong>any target</strong> at <strong>any distance</strong>. Pass in a banana (or anything else with a position) and the monkey will chase it down!',
          },
          {
            type: 'key-term',
            term: 'Chase Pattern',
            definition: 'A reusable function that turns toward a target and walks until it\'s reached. It works for any target at any distance.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Chase + Loops = Collect All',
          },
          {
            type: 'text',
            content: 'The chase function becomes incredibly powerful when combined with a for loop. You can collect every banana on the grid with just a few lines of code!',
          },
          {
            type: 'code-block',
            label: 'Chase in a Loop',
            code: 'chase = (b) ->\n  turnTo b\n  until near b\n    step 1\n\nfor b in bananas\n  chase b',
            annotation: 'The loop calls <code>chase</code> for every banana in the array. No matter how many bananas there are or where they\'re placed, this handles them all!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Runtime Efficiency',
          },
          {
            type: 'text',
            content: 'There are often multiple ways to solve the same problem. <strong>Runtime efficiency</strong> means choosing the approach that uses fewer steps or resources.',
          },
          {
            type: 'code-block',
            label: 'Two Approaches',
            code: '# Approach 1: until near (more flexible)\nuntil near b\n  step 1\n\n# Approach 2: step distanceTo (more efficient)\nstep distanceTo b',
            annotation: '<code>step distanceTo b</code> gets there in one command. <code>until near</code> takes many small steps. The first is more efficient, but the second is more flexible for complex paths.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'In real programming, efficiency matters a lot! But don\'t worry about it too much right now. Focus on getting the right answer first, then think about making it faster.',
          },
        ],
      },
    },
    {
      id: 'L11S3',
      type: 'guided-example',
      title: 'Watch Me: Chasing Bananas',
      data: {
        intro: "Let me show you how the chase function handles any number of bananas in any arrangement!",
        steps: [
          {
            label: 'Define the chase function',
            code: 'chase = (b) ->\n  turnTo b\n  until near b\n    step 1',
            result: 'I\'ve created a reusable chase function. It takes any target as a parameter.',
            annotation: 'This function is a game-changer. Turn toward the target, walk until near it. Works for anything, anywhere!',
          },
          {
            label: 'Chase a single banana',
            code: 'chase = (b) ->\n  turnTo b\n  until near b\n    step 1\n\nchase banana',
            result: 'The monkey turns to face the banana and walks toward it step by step until it arrives.',
            annotation: 'One function call, one banana collected. Simple and clean!',
          },
          {
            label: 'Chase all bananas with a loop',
            code: 'chase = (b) ->\n  turnTo b\n  until near b\n    step 1\n\nfor b in bananas\n  chase b',
            result: 'The monkey chases down every single banana, one after another. Works no matter the layout!',
            annotation: 'This is the power of functions + loops. The chase function handles navigation, the loop handles repetition. Together they solve almost any puzzle!',
          },
        ],
      },
    },
    {
      id: 'L11S4',
      type: 'puzzle',
      title: 'Practice: Chase Puzzles',
      data: {
        intro: 'Build and use the chase function to collect bananas scattered across the grid. Try to earn all 3 stars!',
        puzzles: [
          { part: 2, id: 13 },
          { part: 2, id: 14 },
          { part: 2, id: 15 },
        ],
      },
    },
    {
      id: 'L11S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'Which is more runtime-efficient for reaching a banana?',
            options: [
              '<code>until near b / step 1</code>',
              '<code>step distanceTo b</code>',
              'Both are equally efficient',
              'Neither works',
            ],
            correct: 1,
            feedback: 'step distanceTo b reaches the banana in one command, while until near / step 1 takes many individual steps. The first is more efficient!',
          },
          {
            type: 'true-false',
            question: 'The chase function can be used for any target, not just bananas.',
            correct: true,
            feedback: 'Correct! chase works with any object that has x and y coordinates — bananas, piles, or any other target on the grid.',
          },
          {
            type: 'multiple-choice',
            question: 'What does the chase function combine?',
            options: [
              '<code>grab()</code> and <code>drop()</code>',
              '<code>turnTo</code> and <code>until near</code> with <code>step</code>',
              '<code>for</code> and <code>if</code>',
              '<code>wait()</code> and <code>turn</code>',
            ],
            correct: 1,
            feedback: 'The chase function combines turnTo (to face the target) with an until near loop (to walk there step by step). It\'s a powerful, reusable pattern!',
          },
        ],
      },
    },
    {
      id: 'L11S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "The chase function is one of the most useful tools you'll ever build! It works on any target at any distance, and when you pair it with a loop, it can collect everything on the grid. You're thinking like a real programmer now!",
        keyTakeaways: [
          'The <strong>chase function</strong> combines <code>turnTo</code> and <code>until near</code> to navigate to any target.',
          '<strong>Chase + for loops</strong> can collect every banana on the grid, no matter the layout.',
          '<strong>Runtime efficiency</strong> means choosing the approach that uses fewer steps — <code>step distanceTo</code> is faster than <code>until near</code>.',
          'Build <strong>reusable functions</strong> to solve many similar problems with minimal code.',
        ],
        nextPreview: 'Next lesson: <strong>Wait for It...</strong> You\'ll meet a sleeping cat that blocks your path! Learn about <code>wait()</code> and character states to get past obstacles.',
      },
    },
  ],
};
