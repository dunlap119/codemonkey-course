/**
 * Lesson 1: First Steps — the step command
 */

export default {
  id: 'L1',
  title: 'First Steps',
  sections: [
    {
      id: 'L1S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Hey there, coder! I'm your monkey friend, and I need YOUR help collecting bananas! You'll write <strong>CoffeeScript code</strong> to tell me where to go. Ready? Let's start with the basics!",
        objectives: [
          'Understand what a command is in programming',
          'Use the <code>step</code> command to move the monkey',
          'Count grid squares to determine how far to move',
        ],
        essentialQuestions: [
          'How do you tell a computer exactly what to do?',
          'Why does the number after step matter?',
        ],
      },
    },
    {
      id: 'L1S2',
      type: 'content',
      title: 'The step Command',
      data: {
        subtitle: 'Your first programming command!',
        blocks: [
          {
            type: 'text',
            content: 'In this course, you\'ll write code to control a monkey on a grid. The monkey needs to walk to bananas and collect them. Your job is to tell the monkey <strong>exactly</strong> how to move!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'CoffeeScript is a real programming language! It\'s designed to be easy to read and write. The code you learn here uses the same concepts as Python, JavaScript, and other languages.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The step Command',
          },
          {
            type: 'text',
            content: 'The most basic command is <code>step</code>. It tells the monkey to walk forward. You put a <strong>number</strong> after it to say how many squares to move:',
          },
          {
            type: 'code-block',
            label: 'CoffeeScript',
            code: 'step 3',
            annotation: 'This tells the monkey to walk forward 3 squares.',
          },
          {
            type: 'key-term',
            term: 'Command',
            definition: 'An instruction that tells the computer (or monkey!) to do something. <code>step</code> is a command that means "walk forward."',
          },
          {
            type: 'key-term',
            term: 'Argument',
            definition: 'The number after a command that gives it more detail. In <code>step 3</code>, the number 3 is the argument — it tells the monkey HOW FAR to step.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'How the Grid Works',
          },
          {
            type: 'text',
            content: 'The monkey lives on a grid made of squares. Each square is one "step" wide. The monkey always faces a direction (right, down, left, or up) and <code>step</code> moves it in that direction.',
          },
          {
            type: 'comparison-table',
            headers: ['Code', 'What Happens'],
            rows: [
              ['<code>step 1</code>', 'Monkey moves forward 1 square'],
              ['<code>step 3</code>', 'Monkey moves forward 3 squares'],
              ['<code>step 5</code>', 'Monkey moves forward 5 squares'],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'To figure out the right number, <strong>count the squares</strong> between the monkey and the banana. Don\'t count the square the monkey is already on!',
          },
        ],
      },
    },
    {
      id: 'L1S3',
      type: 'guided-example',
      title: 'Watch Me: Moving the Monkey',
      data: {
        intro: "Let me show you how to solve a puzzle step by step. Watch how I count squares and write the code!",
        steps: [
          {
            label: 'Look at the puzzle',
            result: 'The monkey is on the left side of the grid. There\'s a banana 3 squares to the right. The monkey is already facing right.',
            annotation: 'First, I need to figure out how far the banana is. Let me count the squares between the monkey and the banana...',
          },
          {
            label: 'Count the squares',
            result: 'Square 1... Square 2... Square 3! The banana is 3 squares away.',
            annotation: 'I count from the monkey\'s position to the banana. The monkey is at position 0, and the banana is at position 3. That means I need <code>step 3</code>.',
          },
          {
            label: 'Write the code',
            code: 'step 3',
            result: 'The monkey walks forward 3 squares and collects the banana! Puzzle solved!',
            annotation: 'That\'s it! One command, one line of code. The monkey automatically collects any banana it steps on.',
          },
          {
            label: 'Earn 3 stars',
            code: 'step 3',
            result: 'Since we solved it in just 1 line of code, we earn 3 stars — the maximum!',
            annotation: '<strong>Star tip:</strong> You earn more stars for writing shorter code. 3 stars means your solution is as short as possible!',
          },
        ],
      },
    },
    {
      id: 'L1S4',
      type: 'puzzle',
      title: 'Practice: Step Puzzles',
      data: {
        intro: 'Time to try it yourself! Use the <code>step</code> command to move the monkey to the banana. Count the squares carefully!',
        puzzles: [
          { part: 1, id: 1 },
          { part: 1, id: 2 },
        ],
      },
    },
    {
      id: 'L1S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does <code>step 5</code> do?',
            options: [
              'Moves the monkey backward 5 squares',
              'Moves the monkey forward 5 squares',
              'Turns the monkey 5 times',
              'Creates 5 bananas',
            ],
            correct: 1,
            feedback: 'step followed by a number moves the monkey forward that many squares in the direction it\'s facing.',
          },
          {
            type: 'true-false',
            question: 'The monkey automatically collects bananas when it steps on them.',
            correct: true,
            feedback: 'Yes! In these puzzles, the monkey grabs any banana it walks over.',
          },
          {
            type: 'multiple-choice',
            question: 'If the monkey is at position 0 and the banana is at position 4, which code collects the banana?',
            options: [
              '<code>step 3</code>',
              '<code>step 4</code>',
              '<code>step 5</code>',
              '<code>step banana</code>',
            ],
            correct: 1,
            feedback: 'Count the squares from the monkey to the banana: 4 squares means step 4.',
          },
        ],
      },
    },
    {
      id: 'L1S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You did it! You wrote your first code and helped me collect bananas! You're already a coder!",
        keyTakeaways: [
          '<strong>step N</strong> moves the monkey forward N squares in the direction it\'s facing.',
          '<strong>Count carefully!</strong> The number after step tells the monkey exactly how far to go.',
          '<strong>Commands are instructions.</strong> Each line of code tells the monkey to do one thing.',
          '<strong>Shorter is better!</strong> Fewer lines of code earn more stars.',
        ],
        nextPreview: 'In Lesson 2, you\'ll learn how to <strong>turn</strong> — so the monkey can go around corners and reach bananas in any direction!',
      },
    },
  ],
};
