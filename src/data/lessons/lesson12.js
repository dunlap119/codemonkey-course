/**
 * Lesson 12: Wait for It... — cat, sleeping, wait
 * Part 2, Original Lesson 22, Puzzles 16-18
 */

export default {
  id: 'L12',
  title: 'Wait for It...',
  sections: [
    {
      id: 'L12S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Uh oh — there's a <strong>cat</strong> blocking the path, and it's fast asleep! You can't just push past it. You'll need to learn about <strong>wait()</strong> and <strong>character states</strong> to solve this one. Sometimes the best move is to... wait for it... just <em>wait</em>!",
        objectives: [
          'Understand <strong>character states</strong> — properties that change over time like <code>cat.sleeping()</code>',
          'Use <code>wait()</code> to let time pass in the simulation',
          'Combine <code>until</code> with <code>wait()</code> to wait for a state change',
          'Use functions to handle repeated wait-and-pass patterns',
        ],
        essentialQuestions: [
          'What is a character state and how does it change over time?',
          'How do you write code that waits for something to happen before continuing?',
        ],
      },
    },
    {
      id: 'L12S2',
      type: 'content',
      title: 'Waiting for Character States',
      data: {
        subtitle: 'Patience is a coding virtue!',
        blocks: [
          {
            type: 'heading',
            level: 3,
            content: 'Character States',
          },
          {
            type: 'text',
            content: 'Some characters on the grid have <strong>states</strong> that change over time. The cat is a perfect example — it starts asleep and eventually wakes up!',
          },
          {
            type: 'text',
            content: '<code>cat.sleeping()</code> returns <strong>true</strong> while the cat is asleep and <strong>false</strong> after it wakes up. Once the cat wakes up, it moves aside and you can pass!',
          },
          {
            type: 'key-term',
            term: 'Character State',
            definition: 'A property of a character that can change over time, like sleeping/awake. You can check the state with functions like cat.sleeping().',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The wait() Function',
          },
          {
            type: 'text',
            content: '<code>wait()</code> lets time pass by one tick in the simulation. The monkey doesn\'t move — it just waits. This gives other characters time to change their state.',
          },
          {
            type: 'code-block',
            label: 'Waiting for the Cat',
            code: 'until not cat.sleeping()\n  wait()\nstep 7',
            annotation: 'The until loop checks if the cat is still sleeping. While it is, the monkey waits. Once the cat wakes up (<code>not cat.sleeping()</code> becomes true), the loop ends and the monkey walks past!',
          },
          {
            type: 'key-term',
            term: 'wait()',
            definition: 'A function that lets one tick of time pass. The monkey stays in place while other characters (like the cat) continue their behavior.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'This is a lot like real programming! When your phone app loads data from the internet, it has to "wait" for the response before showing it. The concept is called "asynchronous programming."',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Functions + Wait',
          },
          {
            type: 'text',
            content: 'When there are multiple cats blocking the path, you can put the wait-and-pass logic into a function to reuse it!',
          },
          {
            type: 'code-block',
            label: 'Reusable Wait Pattern',
            code: 'waitAndPass = () ->\n  wait()\n  wait()\n  step 3\n\nwaitAndPass()\nwaitAndPass()',
            annotation: 'This function waits for the cat to wake up, then walks past. If there are multiple cats, call it multiple times!',
          },
        ],
      },
    },
    {
      id: 'L12S3',
      type: 'guided-example',
      title: 'Watch Me: Getting Past the Cat',
      data: {
        intro: "A sleeping cat is in the way! Let me show you how to use wait() and until to get past it.",
        steps: [
          {
            label: 'Understand the obstacle',
            result: 'The cat is sleeping on the path at column 3. The banana is at column 7. Bushes block all other routes — the only way is through the cat.',
            annotation: 'I can\'t go around it, so I need to wait for the cat to wake up and move aside.',
          },
          {
            label: 'Wait for the cat',
            code: 'until not cat.sleeping()\n  wait()',
            result: 'The monkey waits patiently. After a few ticks, the cat wakes up and moves out of the way!',
            annotation: 'The until loop keeps checking <code>cat.sleeping()</code>. Each <code>wait()</code> advances time by one tick. Eventually the cat wakes up and the condition becomes true.',
          },
          {
            label: 'Walk to the banana',
            code: 'until not cat.sleeping()\n  wait()\nstep 7',
            result: 'After the cat moves, the monkey walks straight to the banana and collects it!',
            annotation: 'Wait first, then move. This pattern works whenever you need to wait for something to happen before continuing.',
          },
        ],
      },
    },
    {
      id: 'L12S4',
      type: 'puzzle',
      title: 'Practice: Wait Puzzles',
      data: {
        intro: 'Get past sleeping cats using wait() and until loops. Think about when to walk and when to wait!',
        puzzles: [
          { part: 2, id: 16 },
          { part: 2, id: 17 },
          { part: 2, id: 18 },
        ],
      },
    },
    {
      id: 'L12S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does <code>wait()</code> do?',
            options: [
              'Stops the program',
              'Lets time pass by one tick',
              'Makes the monkey sleep',
              'Resets the puzzle',
            ],
            correct: 1,
            feedback: 'wait() advances the simulation by one tick. The monkey stays in place while other characters continue their behavior.',
          },
          {
            type: 'true-false',
            question: '<code>cat.sleeping()</code> returns true forever.',
            correct: false,
            feedback: 'The cat eventually wakes up! sleeping() becomes false after enough time passes (enough wait() calls).',
          },
          {
            type: 'multiple-choice',
            question: 'Which code correctly waits for the cat to wake up?',
            options: [
              '<code>until cat.sleeping() / step 1</code>',
              '<code>until not cat.sleeping() / wait()</code>',
              '<code>while cat.sleeping() / step 1</code>',
              '<code>if cat.sleeping() / wait()</code>',
            ],
            correct: 1,
            feedback: 'until not cat.sleeping() / wait() keeps waiting (letting time pass) until the cat is no longer sleeping. The "not" is important — we wait UNTIL it\'s NOT sleeping!',
          },
        ],
      },
    },
    {
      id: 'L12S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Patience paid off! You learned that sometimes the best code doesn't move at all — it waits. Character states, wait(), and until loops let you write code that reacts to changing conditions. That's some smart programming!",
        keyTakeaways: [
          '<strong>Character states</strong> are properties that change over time, like <code>cat.sleeping()</code>.',
          '<strong>wait()</strong> advances time by one tick without moving the monkey.',
          'Use <strong>until not cat.sleeping() / wait()</strong> to wait for the cat to wake up.',
          'You can wrap wait patterns in <strong>functions</strong> to reuse them when multiple obstacles appear.',
        ],
        nextPreview: 'Next lesson: <strong>Act the Goat</strong>! You\'ll meet a helpful goat that can break frozen bananas, and learn about <strong>if conditionals</strong> to make decisions in your code!',
      },
    },
  ],
};
