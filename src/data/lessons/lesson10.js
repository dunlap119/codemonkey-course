/**
 * Lesson 10: It Ain't Over Until It's Over — until loops, near()
 * Part 2, Original Lesson 20, Puzzles 10-12
 */

export default {
  id: 'L10',
  title: "It Ain't Over Until It's Over",
  sections: [
    {
      id: 'L10S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Up until now, you've always known exactly how many steps to take. But what if you DON'T know the distance? Enter the <strong>until loop</strong> — it repeats code <strong>until</strong> a condition becomes true. Combined with <code>near()</code>, the monkey can walk toward a banana and stop when it gets close. No more counting squares!",
        objectives: [
          'Understand how an <strong>until loop</strong> repeats code until a condition is true',
          'Use <code>near(target)</code> to check if the monkey is next to something',
          'Combine <code>until</code> and <code>near</code> to navigate without knowing the exact distance',
          'Recognize and avoid <strong>infinite loops</strong>',
        ],
        essentialQuestions: [
          'How is an until loop different from a for loop?',
          'What happens if the condition in an until loop is never true?',
        ],
      },
    },
    {
      id: 'L10S2',
      type: 'content',
      title: 'Until Loops and the near() Function',
      data: {
        subtitle: 'Keep going until you get there!',
        blocks: [
          {
            type: 'heading',
            level: 3,
            content: 'Until Loops',
          },
          {
            type: 'text',
            content: 'An <strong>until loop</strong> repeats code until a condition becomes true. Unlike a for loop (which runs a specific number of times), an until loop keeps going as long as the condition is false.',
          },
          {
            type: 'code-block',
            label: 'Until Loop',
            code: 'until near banana\n  step 1',
            annotation: 'This checks <code>near banana</code> each time. While it\'s false, the monkey takes 1 step. When it becomes true (the monkey is next to the banana), the loop stops.',
          },
          {
            type: 'key-term',
            term: 'Until Loop',
            definition: 'A loop that repeats its code block until a given condition becomes true. It checks the condition before each repetition.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The near() Function',
          },
          {
            type: 'text',
            content: '<code>near(target)</code> returns <strong>true</strong> when the monkey is next to the target (1 step away), and <strong>false</strong> otherwise. It\'s perfect for knowing when you\'ve arrived!',
          },
          {
            type: 'key-term',
            term: 'near(target)',
            definition: 'A function that returns true when the monkey is next to (1 step away from) the target, and false otherwise.',
          },
          {
            type: 'text',
            content: 'The power of <code>until near</code> is that you don\'t need to know the exact distance. The monkey just keeps stepping until it gets close!',
          },
          {
            type: 'code-block',
            label: 'Unknown Distance',
            code: 'turnTo banana\nuntil near banana\n  step 1',
            annotation: 'First, face the banana. Then step toward it one at a time until you\'re next to it. This works no matter how far away the banana is!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Watch Out: Infinite Loops!',
          },
          {
            type: 'text',
            content: 'If the condition in an until loop <strong>never becomes true</strong>, the loop runs forever. This is called an <strong>infinite loop</strong> and it will crash your program!',
          },
          {
            type: 'callout',
            style: 'warning',
            content: 'Always make sure your until loop\'s condition will eventually become true! For example, <code>until near banana / step 1</code> works because the monkey gets closer each step. But <code>until near banana / turn right</code> would spin forever!',
          },
          {
            type: 'key-term',
            term: 'Infinite Loop',
            definition: 'A loop that never stops because its condition never becomes true. It crashes the program! Always make sure your loop will eventually end.',
          },
        ],
      },
    },
    {
      id: 'L10S3',
      type: 'guided-example',
      title: 'Watch Me: Walking Until Near',
      data: {
        intro: "Let me show you how until loops work and how to collect bananas when you don't know the exact distance!",
        steps: [
          {
            label: 'The problem',
            result: 'There are two bananas on the grid, and I don\'t want to count squares. I need a way to navigate to each one without hardcoding distances.',
            annotation: 'This is exactly what until loops are for — navigating when you don\'t know (or don\'t want to count) the distance.',
          },
          {
            label: 'Navigate to the first banana',
            code: 'turnTo bananas[0]\nuntil near bananas[0]\n  step 1',
            result: 'The monkey faces the first banana and walks toward it step by step. When it\'s 1 step away, the loop stops and the banana is collected.',
            annotation: 'The turnTo ensures the monkey faces the right direction. The until near loop handles the distance automatically.',
          },
          {
            label: 'Add the second banana',
            code: 'turnTo bananas[0]\nuntil near bananas[0]\n  step 1\nturnTo bananas[1]\nuntil near bananas[1]\n  step 1',
            result: 'The monkey navigates to both bananas! Each one uses its own turnTo + until near pattern.',
            annotation: 'Same pattern, used twice. In the next lesson, we\'ll put this pattern into a function so we don\'t have to repeat ourselves!',
          },
        ],
      },
    },
    {
      id: 'L10S4',
      type: 'puzzle',
      title: 'Practice: Until Loop Puzzles',
      data: {
        intro: 'Use until loops and near() to navigate to bananas without counting squares. Watch out for infinite loops!',
        puzzles: [
          { part: 2, id: 10 },
          { part: 2, id: 11 },
          { part: 2, id: 12 },
        ],
      },
    },
    {
      id: 'L10S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does <code>near(banana)</code> return?',
            options: [
              'The distance to the banana',
              'true if next to the banana, false otherwise',
              'The banana object',
              'Nothing',
            ],
            correct: 1,
            feedback: 'near(banana) returns true when the monkey is 1 step away from the banana, and false otherwise.',
          },
          {
            type: 'multiple-choice',
            question: 'What happens if an until loop\'s condition is never true?',
            options: [
              'The program ends normally',
              'It runs forever (infinite loop)',
              'It skips the loop',
              'It throws a syntax error',
            ],
            correct: 1,
            feedback: 'If the condition is never true, the until loop never stops — creating an infinite loop that crashes the program!',
          },
          {
            type: 'multiple-choice',
            question: 'How is an until loop different from a for loop?',
            options: [
              'An until loop always runs exactly 10 times',
              'An until loop repeats until a condition is true instead of counting iterations',
              'An until loop is faster than a for loop',
              'There is no difference',
            ],
            correct: 1,
            feedback: 'A for loop runs a specific number of times. An until loop keeps repeating until its condition becomes true — it could run any number of times!',
          },
        ],
      },
    },
    {
      id: 'L10S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Now you've got TWO kinds of loops in your toolbox! For loops are great when you know exactly how many times to repeat. Until loops are perfect when you want to keep going until something happens. That's some flexible coding!",
        keyTakeaways: [
          '<strong>Until loops</strong> repeat code until a condition becomes true: <code>until near banana / step 1</code>',
          '<strong>near(target)</strong> returns true when the monkey is 1 step away from the target.',
          'Until loops are great when you <strong>don\'t know the exact distance</strong> — the loop figures it out!',
          'Watch out for <strong>infinite loops</strong> — always make sure the condition will eventually become true.',
        ],
        nextPreview: 'Next lesson: <strong>Cut to the Chase</strong>! You\'ll combine until loops with functions to create a powerful <strong>chase</strong> function that can track down any banana on the grid!',
      },
    },
  ],
};
