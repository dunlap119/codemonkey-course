/**
 * Lesson 8: Fun-ctions! — step -x, debugging, for + functions
 * Part 2, Original Lesson 18, Puzzles 4-6
 */

export default {
  id: 'L8',
  title: 'Fun-ctions!',
  sections: [
    {
      id: 'L8S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Ready to level up your function skills? Today you'll discover that the monkey can walk <strong>backward</strong> using negative numbers, learn the art of <strong>debugging</strong> (finding and fixing mistakes), and combine <strong>loops with functions</strong> for super-efficient code. Let's have some fun with fun-ctions!",
        objectives: [
          'Use <code>step -x</code> to move the monkey backward',
          'Practice <strong>debugging</strong> — reading code carefully to find and fix mistakes',
          'Combine <strong>for loops</strong> with <strong>functions</strong> for powerful, compact code',
        ],
        essentialQuestions: [
          'When would you need to move the monkey backward instead of turning around?',
          'What strategies help you find and fix bugs in your code?',
        ],
      },
    },
    {
      id: 'L8S2',
      type: 'content',
      title: 'Backward Steps, Debugging, and Loop Functions',
      data: {
        subtitle: 'New tricks for your coding toolbox!',
        blocks: [
          {
            type: 'heading',
            level: 3,
            content: 'Negative Steps',
          },
          {
            type: 'text',
            content: 'You can use <strong>negative numbers</strong> with the step command to move the monkey backward without turning around!',
          },
          {
            type: 'code-block',
            label: 'Moving Backward',
            code: 'step 2\nstep -4',
            annotation: '<code>step 2</code> moves forward 2 squares. <code>step -4</code> moves backward 4 squares — the monkey doesn\'t turn, it just moonwalks!',
          },
          {
            type: 'key-term',
            term: 'step -x',
            definition: 'Moves the monkey backward by x squares without changing the direction it\'s facing. Think of it like walking backward!',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Negative steps are useful when you need to backtrack to collect something you passed. No need to turn around and turn back again!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Debugging',
          },
          {
            type: 'text',
            content: '<strong>Debugging</strong> means finding and fixing mistakes in code. Even professional programmers make mistakes — what matters is knowing how to find them!',
          },
          {
            type: 'text',
            content: 'Here are some debugging tips: <strong>1)</strong> Read the code line by line. <strong>2)</strong> Run the code and watch what happens. <strong>3)</strong> Compare what the code <em>does</em> with what it <em>should</em> do. <strong>4)</strong> Fix the line that causes the wrong behavior.',
          },
          {
            type: 'key-term',
            term: 'Debugging',
            definition: 'The process of finding and fixing errors (bugs) in your code. Read carefully, test, and compare expected vs. actual results.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Loops Inside Functions',
          },
          {
            type: 'text',
            content: 'You can put a <strong>for loop inside a function</strong> to create a reusable pattern. This is incredibly powerful — one function call can execute many steps!',
          },
          {
            type: 'code-block',
            label: 'Loop Inside a Function',
            code: 'zigzag = () ->\n  for i in [1..3]\n    step 1\n    turn right\n    step 1\n    turn left',
            annotation: 'The <code>zigzag</code> function contains a loop that runs 3 times. Calling <code>zigzag()</code> runs the entire zigzag pattern!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'The term "bug" in computing goes back to 1947, when a real moth got stuck in a computer at Harvard and caused errors. They literally had to "debug" the machine!',
          },
        ],
      },
    },
    {
      id: 'L8S3',
      type: 'guided-example',
      title: 'Watch Me: Debug and Loop',
      data: {
        intro: "Let me show you how to debug some code and then combine a function with a loop to solve a puzzle efficiently!",
        steps: [
          {
            label: 'Spot the bug',
            code: 'step 4\nturn right\nstep 3',
            result: 'The monkey goes right 4, turns down, and goes 3 — but it misses the banana at (4,4)! It ends up at (4,3).',
            annotation: 'The monkey needs to reach row 4, but step 3 only gets to row 3. The bug is in the last line — it should be step 4, not step 3.',
          },
          {
            label: 'Fix the bug',
            code: 'step 4\nturn right\nstep 4',
            result: 'Now the monkey reaches (4,4) and collects the banana! Debugging complete.',
            annotation: 'Debugging strategy: run the code, watch what happens, compare to what you expected, fix the difference. One number was off!',
          },
          {
            label: 'Combine a function with a loop',
            code: 'hop = () ->\n  step 2\n\nfor i in [1..4]\n  hop()',
            result: 'The monkey hops 2 steps, four times — collecting bananas at positions 2, 4, 6, and 8.',
            annotation: 'The function <code>hop</code> does one small action. The loop repeats it. Together they\'re a powerful combo!',
          },
        ],
      },
    },
    {
      id: 'L8S4',
      type: 'puzzle',
      title: 'Practice: Fun-ctions Puzzles',
      data: {
        intro: 'Try moving backward, debugging broken code, and combining loops with functions. Think carefully about what each line does!',
        puzzles: [
          { part: 2, id: 4 },
          { part: 2, id: 5 },
          { part: 2, id: 6 },
        ],
      },
    },
    {
      id: 'L8S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does <code>step -3</code> do?',
            options: [
              'Moves forward 3',
              'Moves backward 3',
              'Causes an error',
              'Turns around',
            ],
            correct: 1,
            feedback: 'step -3 moves the monkey backward 3 squares without changing the direction it\'s facing.',
          },
          {
            type: 'multiple-choice',
            question: 'What is debugging?',
            options: [
              'Adding bugs to code',
              'Finding and fixing mistakes in code',
              'Deleting all code',
              'Running code faster',
            ],
            correct: 1,
            feedback: 'Debugging is the process of finding and fixing errors (bugs) in your code. It\'s one of the most important skills a programmer can have!',
          },
          {
            type: 'multiple-choice',
            question: 'What happens when you put a for loop inside a function and call that function?',
            options: [
              'Only the first iteration runs',
              'The loop runs an error',
              'The entire loop runs each time you call the function',
              'The function is ignored',
            ],
            correct: 2,
            feedback: 'When you call a function, ALL the code inside it runs — including any loops. So the entire loop executes each time you call the function.',
          },
        ],
      },
    },
    {
      id: 'L8S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Awesome work! You can now moonwalk with negative steps, squash bugs like a pro debugger, and combine loops with functions for maximum power. These skills will serve you well in every lesson ahead!",
        keyTakeaways: [
          '<strong>step -x</strong> moves the monkey backward x squares without turning around.',
          '<strong>Debugging</strong> means finding and fixing mistakes — read carefully, test, and compare expected vs. actual results.',
          '<strong>Loops inside functions</strong> create powerful, reusable patterns. One function call can trigger many repeated actions.',
          'Combining loops and functions keeps your code <strong>short, readable, and efficient</strong>.',
        ],
        nextPreview: 'Next lesson: <strong>Fake It \'Til You Make It</strong>! You\'ll learn how functions can call other functions, creating powerful chains. You\'ll also explore pseudo-code to plan before you code!',
      },
    },
  ],
};
