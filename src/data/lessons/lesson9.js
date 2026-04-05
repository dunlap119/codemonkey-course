/**
 * Lesson 9: Fake It 'Til You Make It — functions calling functions, pseudo-code, call stack
 * Part 2, Original Lesson 19, Puzzles 7-9
 */

export default {
  id: 'L9',
  title: "Fake It 'Til You Make It",
  sections: [
    {
      id: 'L9S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Here's a cool secret: functions can call <strong>other functions</strong>! That means you can build small helper functions and then combine them into bigger, more powerful ones. Today you'll also learn about <strong>pseudo-code</strong> — planning your solution in plain English before writing actual code. Fake it 'til you make it!",
        objectives: [
          'Understand how one function can <strong>call another function</strong>',
          'Learn what a <strong>call stack</strong> is — the chain of functions calling each other',
          'Use <strong>pseudo-code</strong> to plan solutions before writing CoffeeScript',
          'Build pattern functions that combine simpler operations',
        ],
        essentialQuestions: [
          'Why is it useful for functions to call other functions?',
          'How does planning with pseudo-code help you write better code?',
        ],
      },
    },
    {
      id: 'L9S2',
      type: 'content',
      title: 'Functions Calling Functions',
      data: {
        subtitle: 'Build big things from small pieces!',
        blocks: [
          {
            type: 'text',
            content: 'A function can <strong>call other functions</strong> inside its body. This creates a <strong>call stack</strong> — a chain of function calls where each function might call another.',
          },
          {
            type: 'code-block',
            label: 'Function Chain',
            code: 'goto = (a) ->\n  turnTo a\n  step distanceTo a\n\ncollect = (a) ->\n  goto a\n  grab()',
            annotation: '<code>collect</code> calls <code>goto</code>, which calls <code>turnTo</code> and <code>step</code>. Each function builds on the ones before it!',
          },
          {
            type: 'key-term',
            term: 'Call Stack',
            definition: 'The chain of functions that call each other. When function A calls function B, B runs first, then control returns to A. Think of it like stacking plates — the last one put on is the first one taken off.',
          },
          {
            type: 'text',
            content: 'This is one of the most powerful ideas in programming: you build simple functions first, then combine them into more complex ones. It\'s like building with LEGO bricks!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Pattern Functions',
          },
          {
            type: 'text',
            content: 'A <strong>pattern function</strong> captures a movement pattern so you can repeat it easily. For example, a zigzag pattern:',
          },
          {
            type: 'code-block',
            label: 'Pattern Function',
            code: 'zigStep = () ->\n  step 2\n  turn right\n  step 2\n  turn left\n\nzigStep()\nzigStep()\nzigStep()',
            annotation: 'Each call to <code>zigStep</code> moves the monkey in a diagonal step pattern. Three calls create a full zigzag!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Pseudo-code',
          },
          {
            type: 'text',
            content: '<strong>Pseudo-code</strong> is a way to plan your algorithm in plain language before writing real code. It helps you think through the solution without worrying about syntax.',
          },
          {
            type: 'code-block',
            label: 'Pseudo-code Example',
            code: '# Pseudo-code:\n# 1. Define a "getNext" function that goes to a target\n# 2. Loop through all bananas\n# 3. Call getNext for each banana',
            annotation: 'Write your plan as comments first, then translate each step into real CoffeeScript. This helps you organize your thinking!',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'When you\'re stuck on a puzzle, try writing pseudo-code first! Break the problem into small steps in plain English, then code each step one at a time.',
          },
        ],
      },
    },
    {
      id: 'L9S3',
      type: 'guided-example',
      title: 'Watch Me: Building a Function Chain',
      data: {
        intro: "Let me show you how to build small functions and chain them together to solve a complex puzzle!",
        steps: [
          {
            label: 'Plan with pseudo-code',
            code: '# 1. Create a "getNext" function to go to any target\n# 2. Loop through all bananas\n# 3. Call getNext for each one',
            result: 'I have a plan! Now I just need to translate each step into real code.',
            annotation: 'Pseudo-code helps me think about the big picture before getting lost in details.',
          },
          {
            label: 'Build the helper function',
            code: 'getNext = (b) ->\n  turnTo b\n  step distanceTo b',
            result: 'getNext can navigate to any target. It uses turnTo and step — two built-in functions.',
            annotation: 'This simple function is a building block. It handles the "go to a target" logic that I\'ll reuse.',
          },
          {
            label: 'Use it in a loop',
            code: 'getNext = (b) ->\n  turnTo b\n  step distanceTo b\n\nfor b in bananas\n  getNext b',
            result: 'The monkey visits every banana, no matter where they are! The function handles navigation, and the loop handles repetition.',
            annotation: 'Functions + loops = powerful code. getNext does the work, the for loop calls it for each banana in the array.',
          },
        ],
      },
    },
    {
      id: 'L9S4',
      type: 'puzzle',
      title: 'Practice: Function Chain Puzzles',
      data: {
        intro: 'Build functions that call other functions, create movement patterns, and use loops to collect all the bananas!',
        puzzles: [
          { part: 2, id: 7 },
          { part: 2, id: 8 },
          { part: 2, id: 9 },
        ],
      },
    },
    {
      id: 'L9S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What is a call stack?',
            options: [
              'A list of bananas',
              'A chain of functions calling each other',
              'A type of loop',
              'A debugging tool',
            ],
            correct: 1,
            feedback: 'A call stack is the chain of functions that call each other. When function A calls function B, B runs first, then control returns to A.',
          },
          {
            type: 'true-false',
            question: 'A function can only call built-in functions like step and turn.',
            correct: false,
            feedback: 'Functions can call ANY function, including ones you defined! That\'s how you build powerful function chains.',
          },
          {
            type: 'multiple-choice',
            question: 'What is pseudo-code?',
            options: [
              'Code that doesn\'t work',
              'A programming language',
              'A way to plan your solution in plain language before writing real code',
              'Comments that the computer runs',
            ],
            correct: 2,
            feedback: 'Pseudo-code is a planning tool — you write your algorithm in plain English first, then translate it into real code. It helps you think before you type!',
          },
        ],
      },
    },
    {
      id: 'L9S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You're becoming a function master! You can chain functions together like building blocks, plan with pseudo-code, and create pattern functions. That's some seriously smart coding!",
        keyTakeaways: [
          '<strong>Functions can call other functions</strong>, creating a call stack — a chain of function calls.',
          '<strong>Pattern functions</strong> capture movement patterns so you can repeat them easily.',
          '<strong>Pseudo-code</strong> helps you plan your solution in plain English before writing real code.',
          'Build <strong>small, simple functions</strong> first, then combine them into more complex ones — like LEGO bricks!',
        ],
        nextPreview: 'Next lesson: <strong>It Ain\'t Over Until It\'s Over</strong>! You\'ll learn about <strong>until loops</strong> that repeat code until a condition is met. No more counting steps — the monkey will know when to stop!',
      },
    },
  ],
};
