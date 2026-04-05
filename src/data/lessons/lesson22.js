/**
 * Lesson 22: Stars Party! — optimization & grand finale
 * Part 2, Original Lesson 32, Puzzle IDs 46-48
 */

export default {
  id: 'L22',
  title: 'Stars Party!',
  sections: [
    {
      id: 'L22S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "THIS IS IT! The grand finale! You've learned commands, turns, variables, loops, functions, conditionals, logic operators, arrays, and so much more. Now it's time to put it ALL together and write the <strong>shortest, smartest code possible</strong>. Let's earn those 3 stars!",
        objectives: [
          'Optimize code to be as short and efficient as possible',
          'Use loops instead of repeated lines',
          'Use functions to eliminate duplicate code',
          'Combine every tool you\'ve learned to solve the ultimate puzzle',
        ],
        essentialQuestions: [
          'What makes code "efficient" and why does it matter?',
          'How do loops and functions help you write shorter code?',
        ],
      },
    },
    {
      id: 'L22S2',
      type: 'content',
      title: 'Code Optimization',
      data: {
        subtitle: 'Write less, do more!',
        blocks: [
          {
            type: 'text',
            content: 'Throughout this course, you\'ve earned stars based on how short and efficient your code is. Now let\'s officially learn the art of <strong>code optimization</strong> — making your code as clean and short as possible!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Why Optimize?',
          },
          {
            type: 'text',
            content: 'Shorter code isn\'t just about earning stars. In real programming, efficient code:',
          },
          {
            type: 'text',
            content: '<ul><li><strong>Runs faster</strong> — fewer instructions means quicker execution</li><li><strong>Is easier to read</strong> — less clutter, clearer intent</li><li><strong>Has fewer bugs</strong> — less code means fewer places for mistakes</li><li><strong>Is easier to update</strong> — change one function instead of editing 10 places</li></ul>',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Optimization Tips',
          },
          {
            type: 'text',
            content: 'Here are the key techniques you\'ve learned that make code shorter:',
          },
          {
            type: 'callout',
            style: 'tip',
            content: '<strong>Tip 1: Use loops!</strong> If you\'re writing the same command multiple times, a loop is almost always shorter.',
          },
          {
            type: 'code-block',
            label: 'Before (repetitive)',
            code: 'step 1\nstep 1\nstep 1\nstep 1\nstep 1',
            annotation: '5 lines of code to move 5 squares. Repetitive!',
          },
          {
            type: 'code-block',
            label: 'After (optimized)',
            code: 'for i in [1..5]\n  step 1',
            annotation: 'Just 2 lines — and it works for any number! Change the 5 to move any distance.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: '<strong>Tip 2: Use functions!</strong> If you repeat a pattern of commands, wrap them in a function and call it.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: '<strong>Tip 3: Use <code>for b in bananas</code> with <code>turnTo</code> and <code>step distanceTo</code>!</strong> This 3-line pattern handles ANY arrangement of bananas.',
          },
          {
            type: 'code-block',
            label: 'Universal Banana Collector',
            code: 'for b in bananas\n  turnTo b\n  step distanceTo b',
            annotation: 'This works for ANY number of bananas in ANY position. Three lines handle everything!',
          },
          {
            type: 'callout',
            style: 'tip',
            content: '<strong>Tip 4: <code>step distanceTo b</code> is shorter than an until loop!</strong> When you know the path is clear, distanceTo is more efficient.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The Grand Finale',
          },
          {
            type: 'text',
            content: 'The final puzzle uses <strong>everything</strong>: functions, loops, conditionals, and/or, the goat, frozen and green bananas, and obstacles. You\'ve spent 22 lessons building up to this moment. You\'re ready!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Code optimization is a real job skill! Companies like Google and Netflix employ engineers specifically to make their code faster and more efficient. Every millisecond matters when you serve billions of users!',
          },
        ],
      },
    },
    {
      id: 'L22S3',
      type: 'guided-example',
      title: 'Watch Me: Optimizing for 3 Stars',
      data: {
        intro: "Let me show you how to take a working solution and make it shorter to earn maximum stars!",
        steps: [
          {
            label: 'Start with a working solution',
            code: 'step 1\nstep 1\nstep 1\nstep 1\nstep 1\nstep 1\nstep 1\nstep 1\nstep 1\nstep 1',
            result: 'The monkey collects all 10 bananas. It works, but that\'s 10 lines of code!',
            annotation: 'This earns 1 star — it solves the puzzle but it\'s very long. Let\'s optimize!',
          },
          {
            label: 'Optimize with a loop',
            code: 'for i in [1..10]\n  step 1',
            result: 'Same result — all 10 bananas collected. But now it\'s just 2 lines!',
            annotation: 'The for-range loop replaces 10 identical lines with just 2 lines. That earns 3 stars!',
          },
          {
            label: 'The universal pattern',
            code: 'for b in bananas\n  turnTo b\n  step distanceTo b',
            result: 'This works for ANY arrangement of bananas — scattered, in a line, in a spiral, anything!',
            annotation: 'This 3-line pattern is the most versatile solution. It handles any puzzle where you just need to collect all bananas. Combine it with a conditional function when bananas have different types!',
          },
        ],
      },
    },
    {
      id: 'L22S4',
      type: 'puzzle',
      title: 'Practice: Stars Party!',
      data: {
        intro: 'Time for the ultimate challenge! Optimize your code for 3 stars, then face the Grand Finale puzzle that uses EVERYTHING you\'ve learned!',
        puzzles: [
          { part: 2, id: 46 },
          { part: 2, id: 47 },
          { part: 2, id: 48 },
        ],
      },
    },
    {
      id: 'L22S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What is the best way to make code shorter?',
            options: [
              'Delete comments',
              'Use loops and functions',
              'Remove all whitespace',
              'Use shorter variable names',
            ],
            correct: 1,
            feedback: 'Loops eliminate repetition and functions package reusable code. Together they are the main tools for writing shorter, more efficient code.',
          },
          {
            type: 'multiple-choice',
            question: 'Which approach collects scattered bananas most efficiently?',
            options: [
              'Step to each one individually',
              '<code>for b in bananas</code> with <code>turnTo</code> and <code>step distanceTo</code>',
              '<code>until near</code> each banana',
              'Random walking',
            ],
            correct: 1,
            feedback: 'The for-in loop with turnTo and step distanceTo is the most efficient pattern for collecting scattered bananas.',
          },
          {
            type: 'true-false',
            question: 'You completed Coding Adventure Part 2!',
            correct: true,
            feedback: 'Congratulations! You\'ve mastered functions, loops, conditionals, and logic operators!',
          },
        ],
      },
    },
    {
      id: 'L22S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "YOU DID IT!! You completed the ENTIRE CodeMonkey Coding Adventure! From your very first <code>step</code> command all the way to optimized functions with conditionals and logic operators — you are now a real coder! I'm so proud of you! Every banana has been collected, every puzzle conquered. Keep coding, keep creating, and remember: the adventure never really ends!",
        keyTakeaways: [
          '<strong>Optimization</strong> means writing the shortest, most efficient code possible.',
          '<strong>Use loops</strong> to replace repetitive commands. <strong>Use functions</strong> to package reusable patterns.',
          '<strong><code>for b in bananas / turnTo b / step distanceTo b</code></strong> is the universal banana-collecting pattern.',
          '<strong>Combine all your tools</strong> — functions, loops, conditionals, and/or — to solve any problem!',
          '<strong>You\'ve completed the entire course!</strong> You\'ve mastered: commands, turns, variables, for loops, until loops, functions, parameters, conditionals (if/else), logic operators (and/or/not), arrays, and code optimization.',
        ],
        nextPreview: 'Congratulations on completing the entire CodeMonkey CoffeeScript course! You\'ve gone from zero coding experience to writing functions, loops, conditionals, and optimized algorithms. These skills transfer to ANY programming language. The coding world is yours to explore!',
      },
    },
  ],
};
