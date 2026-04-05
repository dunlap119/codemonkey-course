/**
 * Lesson 7: Function Farm — grab/drop, defining functions, parameters
 * Part 2, Original Lesson 17, Puzzles 1-3
 */

export default {
  id: 'L7',
  title: 'Function Farm',
  sections: [
    {
      id: 'L7S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Welcome to <strong>Part 2</strong> of the CodeMonkey adventure! You already know how to define and call functions — now it's time to put them to REAL work. Today you'll learn <strong>grab()</strong> and <strong>drop()</strong>, and discover how to give functions <strong>parameters</strong> so they can do different things each time you call them. Let's farm some bananas!",
        objectives: [
          'Use <code>grab()</code> and <code>drop()</code> to pick up and place items',
          'Define a function that performs a multi-step task',
          'Add a <strong>parameter</strong> to a function so it can accept input',
          'Use <code>turnTo</code> and <code>distanceTo</code> inside a function with a parameter',
        ],
        essentialQuestions: [
          'How do grab() and drop() change the way the monkey interacts with objects?',
          'Why would you give a function a parameter instead of hard-coding values?',
        ],
      },
    },
    {
      id: 'L7S2',
      type: 'content',
      title: 'Grab, Drop, and Function Parameters',
      data: {
        subtitle: 'Pick it up, carry it, put it down!',
        blocks: [
          {
            type: 'text',
            content: 'In Part 1, the monkey collected bananas just by walking over them. Now things get more interesting — you need to <strong>grab</strong> items and <strong>drop</strong> them at specific locations!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'New Commands: grab() and drop()',
          },
          {
            type: 'text',
            content: '<code>grab()</code> picks up the item you\'re standing on. <code>drop()</code> places it down at your current position. Think of the monkey picking up a banana and carrying it to a pile!',
          },
          {
            type: 'code-block',
            label: 'Grab and Drop',
            code: 'step 3\ngrab()\nstep 3\ndrop()',
            annotation: 'Walk to the banana, pick it up with <code>grab()</code>, carry it 3 more steps, then place it with <code>drop()</code>.',
          },
          {
            type: 'key-term',
            term: 'grab()',
            definition: 'Picks up the item at the monkey\'s current position. The monkey carries it until you use drop().',
          },
          {
            type: 'key-term',
            term: 'drop()',
            definition: 'Places the item the monkey is carrying at the monkey\'s current position.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Functions Review',
          },
          {
            type: 'text',
            content: 'Remember from Part 1: a <strong>function</strong> is a set of instructions that performs a specific task. You define it once and call it whenever you need it.',
          },
          {
            type: 'code-block',
            label: 'Defining a Function',
            code: 'deliver = () ->\n  step 2\n  grab()\n  step 2\n  drop()',
            annotation: 'This <code>deliver</code> function walks to a banana, grabs it, walks to a pile, and drops it. Call it with <code>deliver()</code>.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Function Parameters',
          },
          {
            type: 'text',
            content: 'Sometimes you want a function to do slightly different things each time. A <strong>parameter</strong> is a variable that you pass into the function so it can work with different data.',
          },
          {
            type: 'code-block',
            label: 'Function with a Parameter',
            code: 'goto = (a) ->\n  turnTo a\n  step distanceTo a\n\ngoto bananas[0]\ngoto bananas[1]',
            annotation: 'The <code>goto</code> function takes a parameter <code>a</code>. Each time you call it, you pass a different target. The function turns toward that target and walks to it.',
          },
          {
            type: 'key-term',
            term: 'Parameter',
            definition: 'A variable in a function definition that acts as a placeholder for data you pass in when calling the function. It lets one function work with many different inputs.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Parameters are like filling in the blank! <code>goto ___</code> — you decide what goes in the blank each time you call the function. That\'s what makes functions so powerful and reusable.',
          },
        ],
      },
    },
    {
      id: 'L7S3',
      type: 'guided-example',
      title: 'Watch Me: Grab, Deliver, Repeat',
      data: {
        intro: "The monkey needs to deliver bananas to piles. Let me show you how to build a deliver function and use it multiple times!",
        steps: [
          {
            label: 'Understand the puzzle',
            result: 'There are two bananas and two piles. Each banana is 2 steps before its pile. The monkey starts at the left.',
            annotation: 'I see a pattern: walk to a banana, grab it, walk to its pile, drop it. This pattern repeats twice — sounds like a function!',
          },
          {
            label: 'Define the deliver function',
            code: 'deliver = () ->\n  step 2\n  grab()\n  step 2\n  drop()',
            result: 'The function is defined but hasn\'t run yet. It wraps up 4 actions into one reusable command.',
            annotation: 'Each delivery is the same: step 2 to the banana, grab, step 2 to the pile, drop. Perfect for a function!',
          },
          {
            label: 'Call it twice to solve',
            code: 'deliver = () ->\n  step 2\n  grab()\n  step 2\n  drop()\n\ndeliver()\ndeliver()',
            result: 'The monkey delivers both bananas! First call handles banana 1, second call handles banana 2.',
            annotation: 'Two calls, two deliveries. Without the function, we\'d need 8 lines of code. With it, just 2 calls!',
          },
        ],
      },
    },
    {
      id: 'L7S4',
      type: 'puzzle',
      title: 'Practice: Function Farm Puzzles',
      data: {
        intro: 'Time to grab, drop, and define your own functions! Start with the basics and work up to functions with parameters.',
        puzzles: [
          { part: 2, id: 1 },
          { part: 2, id: 2 },
          { part: 2, id: 3 },
        ],
      },
    },
    {
      id: 'L7S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does <code>grab()</code> do?',
            options: [
              'Moves the monkey forward',
              'Picks up the item you\'re standing on',
              'Creates a new banana',
              'Turns the monkey around',
            ],
            correct: 1,
            feedback: 'grab() picks up whatever item is at the monkey\'s current position. The monkey carries it until you use drop().',
          },
          {
            type: 'multiple-choice',
            question: 'How do you define a function called "fetch" with parameter "x"?',
            options: [
              '<code>fetch x -></code>',
              '<code>fetch = (x) -></code>',
              '<code>function fetch(x)</code>',
              '<code>def fetch x</code>',
            ],
            correct: 1,
            feedback: 'In CoffeeScript, a function with a parameter uses the pattern: name = (param) ->. The parameter goes inside the parentheses.',
          },
          {
            type: 'true-false',
            question: 'A function definition runs immediately when the code starts.',
            correct: false,
            feedback: 'A function only runs when you CALL it in your code! Defining a function just saves it for later use.',
          },
        ],
      },
    },
    {
      id: 'L7S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Great start to Part 2! You've learned how to grab and drop items, and you even gave your functions parameters so they can work with different targets. The monkey is becoming quite the delivery expert!",
        keyTakeaways: [
          '<strong>grab()</strong> picks up an item at the monkey\'s position; <strong>drop()</strong> places it down.',
          '<strong>Functions</strong> wrap multiple steps into one reusable command.',
          '<strong>Parameters</strong> let a function accept different inputs each time: <code>goto = (a) -> ...</code>',
          'Use <code>turnTo</code> and <code>distanceTo</code> with a parameter to navigate to any target.',
        ],
        nextPreview: 'Next up: <strong>Fun-ctions!</strong> You\'ll learn to move backward with negative steps, practice debugging, and combine loops with functions for maximum power!',
      },
    },
  ],
};
