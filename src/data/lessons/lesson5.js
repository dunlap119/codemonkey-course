/**
 * Lesson 5: Loops — repeating code with for loops
 */

export default {
  id: 'L5',
  title: 'Loops',
  sections: [
    {
      id: 'L5S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Whew! My arms are tired from writing the same code over and over. There's gotta be a better way, right? Spoiler: there IS! It's called a <strong>loop</strong>, and it's about to become your new best friend. Let me show you!",
        objectives: [
          'Understand what a loop is and why it saves time',
          'Use <code>for i in [1..N]</code> to repeat code N times',
          'Use <code>for b in bananas</code> to loop through a list of items',
          'Combine loops with commands like <code>step</code> and <code>turnTo</code>',
        ],
        essentialQuestions: [
          'Why would you use a loop instead of writing the same command many times?',
          'How does a loop know when to stop repeating?',
        ],
      },
    },
    {
      id: 'L5S2',
      type: 'content',
      title: 'Repeating with Loops',
      data: {
        subtitle: 'Stop copying and pasting — let the loop do the work!',
        blocks: [
          {
            type: 'text',
            content: 'Imagine you need the monkey to step forward 1 square, four times in a row. You <em>could</em> write this:',
          },
          {
            type: 'code-block',
            label: 'The Repetitive Way',
            code: 'step 1\nstep 1\nstep 1\nstep 1',
            annotation: 'This works, but it\'s a lot of typing! What if you needed to do it 100 times?',
          },
          {
            type: 'text',
            content: 'A <strong>loop</strong> lets you write the instruction once and tell the computer how many times to repeat it. Here\'s the same thing using a loop:',
          },
          {
            type: 'code-block',
            label: 'The Loop Way',
            code: 'for i in [1..4]\n  step 1',
            annotation: 'This does the exact same thing — step 1 four times — but in just 2 lines!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Professional programmers use loops constantly. Any time you see a pattern repeat — scrolling through a social media feed, loading emails, or animating a game character — there\'s probably a loop making it happen!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The for...in Range Loop',
          },
          {
            type: 'text',
            content: 'The most common loop in CodeMonkey uses a <strong>range</strong> — a series of numbers from a start to an end. Let\'s break down the parts:',
          },
          {
            type: 'code-block',
            label: 'Loop Anatomy',
            code: 'for i in [1..4]\n  step 1',
            annotation: '<code>for</code> starts the loop. <code>i</code> is a variable that counts (1, 2, 3, 4). <code>[1..4]</code> is the range — it means "from 1 to 4." The indented line underneath is the code that repeats.',
          },
          {
            type: 'key-term',
            term: 'Loop',
            definition: 'A block of code that repeats automatically. Instead of writing the same command 10 times, you write it once inside a loop and say how many times to repeat.',
          },
          {
            type: 'key-term',
            term: 'Range',
            definition: 'A series of numbers written as <code>[start..end]</code>. For example, <code>[1..4]</code> means the numbers 1, 2, 3, and 4. The loop runs once for each number in the range.',
          },
          {
            type: 'comparison-table',
            headers: ['Range', 'Numbers It Includes', 'Times It Loops'],
            rows: [
              ['<code>[1..3]</code>', '1, 2, 3', '3 times'],
              ['<code>[1..5]</code>', '1, 2, 3, 4, 5', '5 times'],
              ['<code>[1..10]</code>', '1, 2, 3, ... 10', '10 times'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            content: 'Indentation Matters!',
          },
          {
            type: 'text',
            content: 'In CoffeeScript, <strong>indentation</strong> (the spaces at the beginning of a line) tells the computer which code belongs inside the loop. Everything indented under the <code>for</code> line gets repeated.',
          },
          {
            type: 'code-block',
            label: 'Inside vs. Outside the Loop',
            code: 'for i in [1..3]\n  step 1\n  turnRight\nstep 2',
            annotation: '<code>step 1</code> and <code>turnRight</code> are indented, so they repeat 3 times. <code>step 2</code> is NOT indented, so it only runs once — after the loop finishes.',
          },
          {
            type: 'callout',
            style: 'warning',
            content: 'Be careful with your spaces! If you forget to indent the code under a <code>for</code> loop, it won\'t repeat. CoffeeScript uses <strong>2 spaces</strong> for indentation.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Looping Through Items',
          },
          {
            type: 'text',
            content: 'You can also loop through a list of items instead of a range of numbers. In CodeMonkey, the <code>bananas</code> variable is a list of all the bananas on the screen:',
          },
          {
            type: 'code-block',
            label: 'Looping Through Bananas',
            code: 'for b in bananas\n  turnTo b\n  step distanceTo b',
            annotation: 'Each time the loop runs, <code>b</code> becomes the next banana in the list. The monkey turns toward that banana and steps the right distance to collect it!',
          },
          {
            type: 'key-term',
            term: 'Iterating',
            definition: 'Going through a list of items one at a time. When you write <code>for b in bananas</code>, you\'re iterating over the bananas — handling each one, one by one.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'The variable name after <code>for</code> can be anything you want. <code>for b in bananas</code>, <code>for banana in bananas</code>, or even <code>for x in bananas</code> all work the same way. Pick a name that helps you remember what it represents!',
          },
        ],
      },
    },
    {
      id: 'L5S3',
      type: 'guided-example',
      title: 'Watch Me: Collecting Bananas with a Loop',
      data: {
        intro: "There are 4 bananas in a straight line, each 1 square apart. Let me show you two ways to solve this — the long way and the smart way!",
        steps: [
          {
            label: 'Look at the puzzle',
            result: 'The monkey is on the left. There are 4 bananas in a row, each 1 square apart, stretching to the right.',
            annotation: 'I need the monkey to step forward 1 square, four separate times, to collect each banana. Let me start with what I already know...',
          },
          {
            label: 'Solve it the repetitive way',
            code: 'step 1\nstep 1\nstep 1\nstep 1',
            result: 'The monkey walks forward and collects all 4 bananas. It works! But that\'s 4 lines of code.',
            annotation: 'This gets the job done, but imagine if there were 20 bananas! That would be 20 lines of the same thing. There has to be a better way...',
          },
          {
            label: 'Rewrite it with a loop',
            code: 'for i in [1..4]\n  step 1',
            result: 'The monkey does the exact same thing — steps forward 1 square, four times — and collects all 4 bananas!',
            annotation: 'The range <code>[1..4]</code> means "do this 4 times." The indented <code>step 1</code> is the code that repeats. Same result, only 2 lines!',
          },
          {
            label: 'Earn 3 stars',
            code: 'for i in [1..4]\n  step 1',
            result: 'We earn 3 stars because the loop keeps our code short and clean!',
            annotation: '<strong>Loop power:</strong> Loops don\'t just save typing — they earn you more stars because your code is shorter. Win-win!',
          },
        ],
      },
    },
    {
      id: 'L5S4',
      type: 'puzzle',
      title: 'Practice: Loop Puzzles',
      data: {
        intro: 'Time to put loops to work! Use <code>for i in [1..N]</code> to repeat actions and <code>for b in bananas</code> to iterate through banana lists. Keep your code short and earn those stars!',
        puzzles: [
          { part: 1, id: 9 },
          { part: 1, id: 10 },
          { part: 1, id: 11 },
        ],
      },
    },
    {
      id: 'L5S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'How many times does the indented code run in this loop? <pre><code>for i in [1..6]\n  step 1</code></pre>',
            options: [
              '1 time',
              '5 times',
              '6 times',
              '7 times',
            ],
            correct: 2,
            feedback: 'The range [1..6] includes the numbers 1, 2, 3, 4, 5, and 6 — that\'s 6 numbers, so the loop runs 6 times.',
          },
          {
            type: 'true-false',
            question: 'In CoffeeScript, the code inside a loop must be indented (have spaces at the beginning of the line).',
            correct: true,
            feedback: 'Correct! CoffeeScript uses indentation to know which code belongs inside the loop. Forget the indent and the code won\'t repeat.',
          },
          {
            type: 'multiple-choice',
            question: 'What does <code>for b in bananas</code> do?',
            options: [
              'Creates new bananas on the screen',
              'Deletes all the bananas',
              'Goes through each banana in the list, one at a time',
              'Moves the monkey to the first banana only',
            ],
            correct: 2,
            feedback: 'The for...in loop iterates through the bananas list. Each time the loop runs, the variable b represents the next banana, letting you handle them one by one.',
          },
        ],
      },
    },
    {
      id: 'L5S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Now THAT'S what I call working smarter, not harder! Loops are one of the most powerful tools in programming. You just leveled up BIG time!",
        keyTakeaways: [
          '<strong>Loops repeat code</strong> so you don\'t have to write the same thing over and over.',
          '<strong><code>for i in [1..N]</code></strong> repeats the indented code N times. The range [1..4] means "do this 4 times."',
          '<strong><code>for b in bananas</code></strong> goes through each banana in the list, letting you handle them one at a time with <code>turnTo</code> and <code>distanceTo</code>.',
          '<strong>Indentation matters!</strong> Only the indented lines under the <code>for</code> line get repeated. Un-indented lines run after the loop ends.',
        ],
        nextPreview: 'In Lesson 6, you\'ll learn about <strong>functions</strong> — how to give a name to a block of code so you can reuse it whenever you want. It\'s like creating your own custom commands!',
      },
    },
  ],
};
