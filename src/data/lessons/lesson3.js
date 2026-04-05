/**
 * Lesson 3: Smart Navigation — turnTo, distanceTo, and array indexing
 */

export default {
  id: 'L3',
  title: 'Smart Navigation',
  sections: [
    {
      id: 'L3S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Counting squares and figuring out directions works, but what if I told you there's a <strong>smarter</strong> way? Some commands let me figure out where things are all by myself. Less counting for you, more bananas for me!",
        objectives: [
          'Use <code>turnTo</code> to make the monkey automatically face a target',
          'Use <code>distanceTo</code> to calculate how many steps to a target',
          'Use array indexing (<code>bananas[0]</code>, <code>bananas[1]</code>) when there are multiple bananas',
        ],
        essentialQuestions: [
          'How can the monkey figure out directions and distances on its own?',
          'What happens when there is more than one banana on the grid?',
        ],
      },
    },
    {
      id: 'L3S2',
      type: 'content',
      title: 'Smart Commands & Arrays',
      data: {
        subtitle: 'Let the monkey do the math!',
        blocks: [
          {
            type: 'text',
            content: 'In the last two lessons, you counted squares and figured out which way to turn. That works great for simple puzzles — but what if the path is complicated? CoffeeScript gives you <strong>smart commands</strong> that let the monkey calculate directions and distances automatically.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The turnTo Command',
          },
          {
            type: 'text',
            content: '<code>turnTo</code> tells the monkey to face toward a specific object. Instead of you figuring out whether to turn left or right (and how many times), the monkey does it automatically!',
          },
          {
            type: 'code-block',
            label: 'CoffeeScript',
            code: 'turnTo banana',
            annotation: 'The monkey instantly rotates to face the banana, no matter which direction it was facing before. One command replaces one or more turn commands!',
          },
          {
            type: 'key-term',
            term: 'turnTo',
            definition: 'A command that automatically rotates the monkey to face a specified target. <code>turnTo banana</code> makes the monkey face toward the banana.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The distanceTo Command',
          },
          {
            type: 'text',
            content: '<code>distanceTo</code> is different — it\'s not a command that makes the monkey do something. Instead, it <strong>returns a number</strong>: the distance (in grid squares) between the monkey and the target. You can use that number as the argument for <code>step</code>!',
          },
          {
            type: 'code-block',
            label: 'CoffeeScript',
            code: 'turnTo banana\nstep distanceTo banana',
            annotation: 'First the monkey faces the banana, then it steps exactly the right number of squares to reach it. This two-line combo works no matter where the banana is!',
          },
          {
            type: 'key-term',
            term: 'distanceTo',
            definition: 'An expression that calculates the number of grid squares between the monkey and a target. Use it as the argument in <code>step distanceTo banana</code> instead of typing a specific number.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Think of <code>turnTo</code> + <code>step distanceTo</code> as a power combo. Together, they can move the monkey to any object in just two lines of code!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Multiple Bananas and Arrays',
          },
          {
            type: 'text',
            content: 'What if there\'s more than one banana? You can\'t just say <code>turnTo banana</code> — the monkey wouldn\'t know <em>which</em> banana you mean! That\'s where <strong>array indexing</strong> comes in.',
          },
          {
            type: 'text',
            content: 'When there are multiple bananas, they\'re stored in an <strong>array</strong> (a numbered list). You use square brackets with a number to pick a specific banana:',
          },
          {
            type: 'comparison-table',
            headers: ['Code', 'Meaning'],
            rows: [
              ['<code>bananas[0]</code>', 'The first banana (closest or leftmost)'],
              ['<code>bananas[1]</code>', 'The second banana'],
              ['<code>bananas[2]</code>', 'The third banana'],
            ],
          },
          {
            type: 'key-term',
            term: 'Array',
            definition: 'An ordered list of items. In CoffeeScript, arrays start counting at <strong>0</strong>, not 1. So the first item is <code>[0]</code>, the second is <code>[1]</code>, and so on.',
          },
          {
            type: 'callout',
            style: 'warning',
            content: 'Arrays start at <strong>0</strong>, not 1! This trips up even experienced programmers. The first banana is <code>bananas[0]</code>, the second is <code>bananas[1]</code>. There is no <code>bananas[1]</code> for the first banana!',
          },
          {
            type: 'code-block',
            label: 'CoffeeScript',
            code: 'turnTo bananas[0]\nstep distanceTo bananas[0]\nturnTo bananas[1]\nstep distanceTo bananas[1]',
            annotation: 'This collects two bananas: first go to bananas[0] (the first one), then go to bananas[1] (the second one). The turnTo + step distanceTo combo works the same way with array items!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Arrays are used EVERYWHERE in real programming — from storing a playlist of songs to tracking every enemy in a video game. You\'re learning a concept that professional developers use every single day!',
          },
        ],
      },
    },
    {
      id: 'L3S3',
      type: 'guided-example',
      title: 'Watch Me: Smart Navigation',
      data: {
        intro: "Let me show you how turnTo and distanceTo make puzzles way easier — and then we'll tackle one with multiple bananas!",
        steps: [
          {
            label: 'The old way vs. the new way',
            code: '# Old way:\nstep 2\nturn right\nstep 3',
            result: 'With manual turns and counting, I had to figure out every direction and distance myself.',
            annotation: 'This works, but I had to count 2 squares, decide to turn right, then count 3 more squares. What if I could let the monkey figure that out?',
          },
          {
            label: 'Using turnTo and distanceTo',
            code: 'turnTo banana\nstep distanceTo banana',
            result: 'The monkey automatically faces the banana and walks exactly the right number of steps. Done in 2 lines!',
            annotation: '<code>turnTo banana</code> handles all the direction logic, and <code>distanceTo banana</code> handles counting. This works even if the banana is far away or at a weird angle!',
          },
          {
            label: 'Now with two bananas',
            result: 'A new puzzle has two bananas on the grid. I can see them labeled as bananas[0] and bananas[1]. I need to collect both!',
            annotation: 'When there are multiple bananas, I need to use array indexing to tell the monkey which one to go to first.',
          },
          {
            label: 'Collect both bananas',
            code: 'turnTo bananas[0]\nstep distanceTo bananas[0]\nturnTo bananas[1]\nstep distanceTo bananas[1]',
            result: 'The monkey goes to the first banana, picks it up, then turns toward the second banana and grabs that one too. All bananas collected!',
            annotation: '<strong>Strategy tip:</strong> Go to the closest banana first! It often leads to shorter, cleaner code. Try both orders if you\'re not sure which earns more stars.',
          },
        ],
      },
    },
    {
      id: 'L3S4',
      type: 'puzzle',
      title: 'Practice: Smart Navigation Puzzles',
      data: {
        intro: 'Use <code>turnTo</code>, <code>distanceTo</code>, and array indexing to solve these puzzles. Let the monkey do the counting for you!',
        puzzles: [
          { part: 1, id: 5 },
          { part: 1, id: 6 },
          { part: 1, id: 7 },
        ],
      },
    },
    {
      id: 'L3S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does <code>turnTo banana</code> do?',
            options: [
              'Moves the monkey to the banana',
              'Makes the monkey face toward the banana',
              'Picks up the banana',
              'Creates a new banana on the grid',
            ],
            correct: 1,
            feedback: 'turnTo only changes the direction the monkey is facing — it rotates the monkey to face the banana. You still need step to actually move!',
          },
          {
            type: 'multiple-choice',
            question: 'If there are 3 bananas on the grid, how do you refer to the second one?',
            options: [
              '<code>bananas[2]</code>',
              '<code>bananas[1]</code>',
              '<code>banana 2</code>',
              '<code>bananas(2)</code>',
            ],
            correct: 1,
            feedback: 'Arrays start at 0! So the first banana is bananas[0], the second is bananas[1], and the third is bananas[2].',
          },
          {
            type: 'true-false',
            question: '<code>step distanceTo banana</code> makes the monkey walk exactly the right number of squares to reach the banana.',
            correct: true,
            feedback: 'Correct! distanceTo calculates the number of squares between the monkey and the banana, and step uses that number to move the monkey.',
          },
        ],
      },
    },
    {
      id: 'L3S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Now I can find bananas on my own! You just point me in the right direction with turnTo and I figure out the rest. We make a great team!",
        keyTakeaways: [
          '<strong>turnTo</strong> automatically rotates the monkey to face a target — no more figuring out left or right!',
          '<strong>distanceTo</strong> returns the number of squares to a target — use it with step for automatic movement.',
          '<strong>turnTo + step distanceTo</strong> is a powerful two-line combo that works for any target location.',
          '<strong>Arrays</strong> start at 0! Use <code>bananas[0]</code> for the first banana, <code>bananas[1]</code> for the second, etc.',
        ],
        nextPreview: 'In Lesson 4, you\'ll face a new challenge: <strong>obstacles</strong>! Bushes block the monkey\'s path, so you\'ll need to plan clever routes around them.',
      },
    },
  ],
};
