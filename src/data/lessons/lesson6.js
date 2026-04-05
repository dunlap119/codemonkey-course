/**
 * Lesson 6: Functions — defining and calling reusable code
 */

export default {
  id: 'L6',
  title: 'Functions',
  sections: [
    {
      id: 'L6S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "You've come SO far — you can step, turn, use variables, and loop like a pro! But what if you could create your own <strong>custom commands</strong>? That's exactly what a <strong>function</strong> does. Let's wrap up Part 1 with this awesome superpower!",
        objectives: [
          'Understand what a function is and why it\'s useful',
          'Define a function using the arrow syntax <code>name = () -></code>',
          'Call (run) a function by writing its name',
          'Recognize how functions make code shorter and easier to read',
        ],
        essentialQuestions: [
          'Why would you put code inside a function instead of just writing it directly?',
          'What\'s the difference between defining a function and calling a function?',
        ],
      },
    },
    {
      id: 'L6S2',
      type: 'content',
      title: 'Creating Custom Commands with Functions',
      data: {
        subtitle: 'Name it, save it, reuse it!',
        blocks: [
          {
            type: 'text',
            content: 'You already know built-in commands like <code>step</code>, <code>turnRight</code>, and <code>turnTo</code>. But what if you could <strong>invent your own commands</strong>? That\'s exactly what a function lets you do!',
          },
          {
            type: 'text',
            content: 'A <strong>function</strong> is a block of code that you give a name to. Once you define it, you can run that whole block just by typing the name. Think of it like a recipe — you write the steps once, then you can make the dish any time you want.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Every app on your phone is built with thousands of functions! When you tap "send" on a text message, a function handles sending it. When you scroll on TikTok, functions load the next video. Functions are everywhere!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Defining a Function',
          },
          {
            type: 'text',
            content: 'To create a function in CoffeeScript, you write the name, an equals sign, empty parentheses, and an arrow. Then indent the code that should run when the function is called:',
          },
          {
            type: 'code-block',
            label: 'Function Definition',
            code: 'goGet = () ->\n  step 2\n  turnRight\n  step 1',
            annotation: 'This creates a function called <code>goGet</code>. It doesn\'t run yet — it\'s just saved for later. When called, it will step 2, turn right, then step 1.',
          },
          {
            type: 'key-term',
            term: 'Function',
            definition: 'A named block of code that you can run (call) whenever you need it. It\'s like creating your own custom command.',
          },
          {
            type: 'key-term',
            term: 'Define',
            definition: 'Creating a function and telling it what code to contain. Defining a function does NOT run it — it just saves it so you can use it later.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Calling a Function',
          },
          {
            type: 'text',
            content: 'Defining a function is like writing a recipe. <strong>Calling</strong> a function is like actually cooking the recipe. To call a function, just type its name followed by empty parentheses:',
          },
          {
            type: 'code-block',
            label: 'Calling a Function',
            code: 'goGet = () ->\n  step 2\n  turnRight\n  step 1\n\ngoGet()\ngoGet()\ngoGet()',
            annotation: 'First we define <code>goGet</code>. Then we call it 3 times! Each call runs all 3 lines inside the function. That\'s 9 actions from just 3 short calls.',
          },
          {
            type: 'key-term',
            term: 'Call',
            definition: 'Running a function by typing its name with parentheses, like <code>goGet()</code>. Each time you call it, all the code inside the function runs from top to bottom.',
          },
          {
            type: 'callout',
            style: 'warning',
            content: 'Order matters! You must <strong>define</strong> a function before you <strong>call</strong> it. If you try to call <code>goGet()</code> before defining it, you\'ll get an error.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Why Use Functions?',
          },
          {
            type: 'text',
            content: 'Functions are one of the most important ideas in programming. Here\'s why coders love them:',
          },
          {
            type: 'comparison-table',
            headers: ['Without Functions', 'With Functions'],
            rows: [
              ['You repeat the same code in multiple places', 'You write the code once and call it by name'],
              ['Changing one thing means editing it everywhere', 'Change the function once and every call gets the update'],
              ['Long, hard-to-read programs', 'Short, organized, easy-to-read programs'],
              ['Hard to understand what each part does', 'Function names describe what the code does'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            content: 'Indentation for Functions',
          },
          {
            type: 'text',
            content: 'Just like loops, functions use <strong>indentation</strong> to show which lines belong inside. Everything indented under the arrow <code>-></code> is part of the function:',
          },
          {
            type: 'code-block',
            label: 'What\'s Inside vs. Outside',
            code: 'dance = () ->\n  turnRight\n  turnLeft\n  turnRight\n\ndance()\nstep 3',
            annotation: 'The 3 turn commands are inside the function. <code>dance()</code> calls the function, then <code>step 3</code> runs separately after — it\'s not part of the function.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Give your functions descriptive names! A function called <code>goGet</code> or <code>collectBanana</code> is much easier to understand than one called <code>f1</code> or <code>doStuff</code>.',
          },
        ],
      },
    },
    {
      id: 'L6S3',
      type: 'guided-example',
      title: 'Watch Me: Solving with Functions',
      data: {
        intro: "The monkey needs to do the same move several times to collect bananas. Let me show you how a function turns repetitive code into something clean and short!",
        steps: [
          {
            label: 'Look at the puzzle',
            result: 'The monkey needs to reach 3 bananas. Each banana requires stepping forward 2 squares. Between bananas, the monkey needs to turn.',
            annotation: 'I can see a pattern here: step 2, collect banana, turn, step 2, collect banana, turn... The "step 2" part repeats. That sounds like a job for a function!',
          },
          {
            label: 'Solve it without functions',
            code: 'step 2\nturnRight\nstep 2\nturnRight\nstep 2',
            result: 'The monkey collects all 3 bananas. But there\'s a lot of repeated code.',
            annotation: 'It works, but I\'m writing <code>step 2</code> three times and <code>turnRight</code> twice. If the puzzle were bigger, this would get really long.',
          },
          {
            label: 'Define a function for the repeated part',
            code: 'goGet = () ->\n  step 2',
            result: 'I\'ve created a function called goGet that steps forward 2 squares. It doesn\'t run yet — I just defined it.',
            annotation: 'Now I have a custom command called <code>goGet</code>. Every time I call <code>goGet()</code>, the monkey will step 2 squares forward.',
          },
          {
            label: 'Solve it with the function',
            code: 'goGet = () ->\n  step 2\n\ngoGet()\nturnRight\ngoGet()\nturnRight\ngoGet()',
            result: 'The monkey does the same thing as before — collects all 3 bananas! But now the code is clearer about what each part does.',
            annotation: 'Reading <code>goGet()</code> instantly tells me "the monkey goes and gets a banana." Functions make code read almost like English!',
          },
        ],
      },
    },
    {
      id: 'L6S4',
      type: 'puzzle',
      title: 'Practice: Function Puzzles',
      data: {
        intro: 'Time to define your own functions! Create a function to avoid repeating the same code, then call it to solve the puzzle. Remember: define first, then call!',
        puzzles: [
          { part: 1, id: 13 },
        ],
      },
    },
    {
      id: 'L6S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'Which line of code correctly <strong>defines</strong> a function called <code>jump</code>?',
            options: [
              '<code>jump()</code>',
              '<code>jump = () -></code>',
              '<code>function jump</code>',
              '<code>define jump()</code>',
            ],
            correct: 1,
            feedback: 'In CoffeeScript, you define a function with the pattern: name = () ->. The arrow (->) tells CoffeeScript that a function body follows on the next indented lines.',
          },
          {
            type: 'true-false',
            question: 'You can call a function before it is defined.',
            correct: false,
            feedback: 'No! You must define a function first, then call it. CoffeeScript reads your code from top to bottom, so it needs to see the definition before it encounters the call.',
          },
          {
            type: 'multiple-choice',
            question: 'What happens when you write <code>goGet()</code> after defining <code>goGet = () -> step 2</code>?',
            options: [
              'Nothing happens — defining is the same as calling',
              'The monkey steps forward 2 squares',
              'An error because you can\'t use parentheses',
              'The function is deleted',
            ],
            correct: 1,
            feedback: 'Calling goGet() runs all the code inside the function. Since goGet contains step 2, the monkey moves forward 2 squares.',
          },
        ],
      },
    },
    {
      id: 'L6S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "WOO-HOO! You just finished Part 1 of the CodeMonkey course! You've gone from writing your very first <code>step</code> command to building loops and functions like a real coder. I am SO proud of you! Get ready — Part 2 is going to take things to a whole new level!",
        keyTakeaways: [
          '<strong>Functions</strong> let you name a block of code and reuse it by calling its name.',
          '<strong>Define a function</strong> with <code>name = () -></code> and indent the code that belongs inside it.',
          '<strong>Call a function</strong> by writing its name with parentheses: <code>name()</code>. Each call runs all the code inside.',
          '<strong>Define before you call!</strong> The function definition must come before any calls to it in your code.',
          '<strong>Functions save time</strong> — write once, use many times. They also make your code shorter and easier to read.',
        ],
        nextPreview: 'Welcome to <strong>Part 2</strong>! You\'ll meet new characters like <strong>goats</strong> and <strong>penguins</strong>, learn to <strong>grab and drop</strong> objects, and use <strong>conditions</strong> (if/else) to make the monkey make decisions. The adventure is just getting started!',
      },
    },
  ],
};
