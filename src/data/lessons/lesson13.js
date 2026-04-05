/**
 * Lesson 13: Act the Goat — if conditionals, goat, frozen bananas
 * Part 2, Original Lesson 23, Puzzles 19-21
 */

export default {
  id: 'L13',
  title: 'Act the Goat',
  sections: [
    {
      id: 'L13S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Say hello to the <strong>goat</strong> — your new helper character! Some bananas are <strong>frozen</strong> in ice, and only the goat can break them free. But you don't always need the goat... that's where <strong>if conditionals</strong> come in. Your code will make <em>decisions</em> now. How cool is that?!",
        objectives: [
          'Use the <strong>goat</strong> character and its commands: <code>goat.step</code>, <code>goat.goto</code>, <code>goat.hit</code>',
          'Understand <code>banana.frozen()</code> to check if a banana is frozen',
          'Write <strong>if conditionals</strong> to run code only when a condition is true',
          'Combine <code>if</code> with functions and loops for smart banana collection',
        ],
        essentialQuestions: [
          'Why do we need conditionals in programming?',
          'How does the goat expand what the monkey can accomplish?',
        ],
      },
    },
    {
      id: 'L13S2',
      type: 'content',
      title: 'Conditionals and the Goat',
      data: {
        subtitle: 'Making decisions in code!',
        blocks: [
          {
            type: 'heading',
            level: 3,
            content: 'Meet the Goat',
          },
          {
            type: 'text',
            content: 'The <strong>goat</strong> is a new character you can control! It has its own commands: <code>goat.step</code> moves the goat forward, <code>goat.turnTo</code> faces the goat toward a target, <code>goat.goto</code> navigates the goat to a location, and <code>goat.hit(banana)</code> breaks the ice on a frozen banana.',
          },
          {
            type: 'key-term',
            term: 'goat.hit(banana)',
            definition: 'Commands the goat to headbutt a frozen banana, breaking the ice so the monkey can collect it.',
          },
          {
            type: 'code-block',
            label: 'Using the Goat',
            code: 'goat.step 4\ngoat.hit banana\n# Now the monkey can collect it!\nstep 5',
            annotation: 'First the goat walks to the banana and breaks the ice. Then the monkey can walk over and collect the now-unfrozen banana.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'If Conditionals',
          },
          {
            type: 'text',
            content: '<code>if</code> lets you run code <strong>only when a condition is true</strong>. This is called a <strong>conditional</strong> — the code makes a decision!',
          },
          {
            type: 'code-block',
            label: 'If Statement',
            code: 'if banana.frozen()\n  goat.goto banana\n  goat.hit banana',
            annotation: 'The code inside the if block only runs when <code>banana.frozen()</code> is true. If the banana isn\'t frozen, these lines are skipped entirely!',
          },
          {
            type: 'key-term',
            term: 'If Conditional',
            definition: 'A code structure that runs its block only when the condition is true. Written as: if condition / indented code.',
          },
          {
            type: 'key-term',
            term: 'banana.frozen()',
            definition: 'Returns true if the banana is frozen in ice and needs the goat to break it free. Returns false for normal bananas.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'If + Functions + Loops',
          },
          {
            type: 'text',
            content: 'The real power comes when you combine <code>if</code> with functions and loops. You can write a single function that handles both frozen and unfrozen bananas!',
          },
          {
            type: 'code-block',
            label: 'Smart Banana Handler',
            code: 'handleBanana = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b\n\nfor b in bananas\n  handleBanana b',
            annotation: 'For each banana: if it\'s frozen, send the goat first. Then the monkey always walks to collect it. One function handles both cases!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Conditionals are everywhere in real life! "IF it\'s raining, THEN take an umbrella." "IF the light is red, THEN stop." Your brain makes hundreds of if-then decisions every day!',
          },
        ],
      },
    },
    {
      id: 'L13S3',
      type: 'guided-example',
      title: 'Watch Me: Using the Goat and If',
      data: {
        intro: "Some bananas are frozen and some aren't. Let me show you how to use if conditionals and the goat to handle both!",
        steps: [
          {
            label: 'Check the situation',
            result: 'There are multiple bananas — some are frozen (blue ice) and some are normal. The goat is standing in the corner, ready to help.',
            annotation: 'I need to check each banana. If it\'s frozen, send the goat first. If not, just walk to it. That\'s a job for an if statement!',
          },
          {
            label: 'Define a handler function',
            code: 'handleBanana = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b',
            result: 'The function checks if the banana is frozen. If yes, it sends the goat to break the ice. Either way, the monkey then walks to collect it.',
            annotation: 'The if statement is the decision-maker. The goat code only runs for frozen bananas. The monkey code always runs.',
          },
          {
            label: 'Loop through all bananas',
            code: 'handleBanana = (b) ->\n  if b.frozen()\n    goat.goto b\n    goat.hit b\n  turnTo b\n  step distanceTo b\n\nfor b in bananas\n  handleBanana b',
            result: 'All bananas collected! Frozen ones got the goat treatment first, normal ones were collected directly.',
            annotation: 'One function + one loop = handles any mix of frozen and normal bananas. That\'s the power of conditionals!',
          },
        ],
      },
    },
    {
      id: 'L13S4',
      type: 'puzzle',
      title: 'Practice: Goat and If Puzzles',
      data: {
        intro: 'Use the goat to break frozen bananas and if conditionals to make smart decisions. Think before you code!',
        puzzles: [
          { part: 2, id: 19 },
          { part: 2, id: 20 },
          { part: 2, id: 21 },
        ],
      },
    },
    {
      id: 'L13S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does <code>goat.hit(banana)</code> do?',
            options: [
              'Eats the banana',
              'Breaks the ice on a frozen banana',
              'Moves the banana',
              'Nothing',
            ],
            correct: 1,
            feedback: 'goat.hit(banana) commands the goat to headbutt the banana, breaking the ice so the monkey can collect it!',
          },
          {
            type: 'multiple-choice',
            question: 'When does the code inside an <code>if</code> statement run?',
            options: [
              'Always',
              'Never',
              'Only when the condition is true',
              'Only when the condition is false',
            ],
            correct: 2,
            feedback: 'The code inside an if statement only runs when the condition is true. If the condition is false, the block is skipped entirely.',
          },
          {
            type: 'multiple-choice',
            question: 'What does <code>banana.frozen()</code> return for a normal (unfrozen) banana?',
            options: [
              'true',
              'false',
              'null',
              'An error',
            ],
            correct: 1,
            feedback: 'banana.frozen() returns false for normal bananas and true for frozen ones. That\'s how your if statement decides whether to call the goat!',
          },
        ],
      },
    },
    {
      id: 'L13S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Your code can make DECISIONS now! With if conditionals, the monkey checks conditions and takes different actions. And with the goat on your team, even frozen bananas don't stand a chance. You're really cooking now!",
        keyTakeaways: [
          'The <strong>goat</strong> is a helper character with commands like <code>goat.goto</code>, <code>goat.step</code>, and <code>goat.hit</code>.',
          '<strong>goat.hit(banana)</strong> breaks frozen bananas so the monkey can collect them.',
          '<strong>If conditionals</strong> run code only when a condition is true: <code>if b.frozen() / goat.hit b</code>.',
          'Combining <strong>if + functions + loops</strong> lets you handle many different situations with a single smart function.',
        ],
        nextPreview: 'Next lesson: <strong>Green Banana Sorbet</strong>! You\'ll learn about <strong>if-else</strong> to choose between two different actions, and meet green bananas that should be skipped!',
      },
    },
  ],
};
