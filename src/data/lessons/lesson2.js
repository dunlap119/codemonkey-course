/**
 * Lesson 2: Turning — the turn left and turn right commands
 */

export default {
  id: 'L2',
  title: 'Turning',
  sections: [
    {
      id: 'L2S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Great job getting me to walk! But here's the thing — bananas aren't always straight ahead. Sometimes I need to <strong>turn</strong> to face a different direction before I can step. Let's learn how!",
        objectives: [
          'Use <code>turn left</code> and <code>turn right</code> to change direction',
          'Understand the four directions: right, down, left, up',
          'Combine <code>step</code> and <code>turn</code> commands to navigate corners',
        ],
        essentialQuestions: [
          'Why do we need turn commands in addition to step?',
          'How do you figure out which direction to turn?',
        ],
      },
    },
    {
      id: 'L2S2',
      type: 'content',
      title: 'Turning Left and Right',
      data: {
        subtitle: 'Changing direction on the grid',
        blocks: [
          {
            type: 'text',
            content: 'In Lesson 1, the monkey only needed to walk forward. But what if the banana is below the monkey, or off to the side? The monkey needs to <strong>turn</strong> to face the right direction before stepping!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The turn Command',
          },
          {
            type: 'text',
            content: 'There are two turn commands: <code>turn left</code> and <code>turn right</code>. Each one rotates the monkey 90 degrees (a quarter turn) without moving it from its square.',
          },
          {
            type: 'code-block',
            label: 'CoffeeScript',
            code: 'turn left\nturn right',
            annotation: 'turn left rotates the monkey counterclockwise. turn right rotates the monkey clockwise. Neither command moves the monkey — it just changes which way the monkey faces.',
          },
          {
            type: 'key-term',
            term: 'Turn',
            definition: 'A command that rotates the monkey 90 degrees (a quarter turn) in place. <code>turn left</code> rotates counterclockwise, and <code>turn right</code> rotates clockwise.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The Four Directions',
          },
          {
            type: 'text',
            content: 'The monkey can face four directions on the grid. Think of it like a clock: turning right goes in the clockwise direction, and turning left goes counterclockwise.',
          },
          {
            type: 'comparison-table',
            headers: ['Facing', 'Turn Right Goes To', 'Turn Left Goes To'],
            rows: [
              ['Right', 'Down', 'Up'],
              ['Down', 'Left', 'Right'],
              ['Left', 'Up', 'Down'],
              ['Up', 'Right', 'Left'],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'An easy way to remember: if you <strong>turn right</strong> starting from facing right, you cycle through <strong>Right → Down → Left → Up</strong>. Turning left goes in the opposite order.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Combining Step and Turn',
          },
          {
            type: 'text',
            content: 'The real power comes from combining <code>step</code> and <code>turn</code>. You can walk forward, turn a corner, and walk some more — all in a few lines of code!',
          },
          {
            type: 'code-block',
            label: 'CoffeeScript',
            code: 'step 2\nturn right\nstep 3',
            annotation: 'This tells the monkey: walk forward 2 squares, turn to face a new direction, then walk forward 3 more squares. Perfect for going around corners!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Turning is one of the most basic ideas in robotics! Real-world robots use turn and move commands just like our monkey. NASA\'s Mars rovers use similar logic to navigate the surface of Mars!',
          },
        ],
      },
    },
    {
      id: 'L2S3',
      type: 'guided-example',
      title: 'Watch Me: Turning a Corner',
      data: {
        intro: "Let me walk you through a puzzle where the banana isn't straight ahead. I need to turn to reach it!",
        steps: [
          {
            label: 'Look at the puzzle',
            result: 'The monkey is facing right. The banana is below and to the right — not in a straight line! The monkey needs to walk forward first, then turn, then walk some more.',
            annotation: 'When the banana isn\'t in a straight line, I know I\'ll need at least one turn. Let me plan my path...',
          },
          {
            label: 'Plan the path',
            result: 'The banana is 2 squares to the right and 1 square down. So I need to: walk right 2, turn to face down, then walk down 1.',
            annotation: 'I break the path into straight-line segments. Each time the direction changes, I\'ll need a turn command.',
          },
          {
            label: 'Write the code',
            code: 'step 2\nturn right\nstep 1',
            result: 'The monkey walks 2 squares right, turns right (now facing down), walks 1 square down, and collects the banana!',
            annotation: 'Since the monkey starts facing right and I need it to go down, <code>turn right</code> is perfect — it turns the monkey from facing right to facing down.',
          },
          {
            label: 'Check your solution',
            result: 'The monkey grabbed the banana in just 3 lines of code. Nice and clean!',
            annotation: '<strong>Planning tip:</strong> Before writing any code, trace the path with your eyes. Count how many squares in each direction, and figure out which turns you need.',
          },
        ],
      },
    },
    {
      id: 'L2S4',
      type: 'puzzle',
      title: 'Practice: Turn Puzzles',
      data: {
        intro: 'Your turn to navigate corners! Use <code>step</code> and <code>turn left</code> or <code>turn right</code> to guide the monkey to the bananas.',
        puzzles: [
          { part: 1, id: 3 },
          { part: 1, id: 4 },
        ],
      },
    },
    {
      id: 'L2S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'If the monkey is facing right and you use <code>turn right</code>, which direction is it now facing?',
            options: [
              'Left',
              'Up',
              'Down',
              'Right (no change)',
            ],
            correct: 2,
            feedback: 'Turning right from facing right rotates the monkey clockwise to face down. Remember the cycle: Right → Down → Left → Up.',
          },
          {
            type: 'true-false',
            question: 'The <code>turn left</code> command moves the monkey one square to the left.',
            correct: false,
            feedback: 'Turn does NOT move the monkey! It only changes the direction the monkey is facing. You still need step to actually move.',
          },
          {
            type: 'multiple-choice',
            question: 'The monkey is facing up and the banana is to the right. What should you do?',
            options: [
              '<code>turn left</code>, then <code>step</code>',
              '<code>turn right</code>, then <code>step</code>',
              '<code>step</code>, then <code>turn right</code>',
              '<code>turn right</code>, then <code>turn right</code>',
            ],
            correct: 1,
            feedback: 'When facing up, turn right rotates the monkey to face right — exactly where the banana is! Then step moves it there.',
          },
        ],
      },
    },
    {
      id: 'L2S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Now I can go around corners! You're getting really good at telling me where to go. Two commands and I can reach bananas anywhere on the grid!",
        keyTakeaways: [
          '<strong>turn left</strong> and <strong>turn right</strong> rotate the monkey 90 degrees without moving it.',
          'The four directions cycle: <strong>Right → Down → Left → Up</strong> (when turning right).',
          '<strong>Turn does not move!</strong> You always need <code>step</code> to actually walk.',
          '<strong>Plan your path</strong> before coding — figure out each straight segment and the turns between them.',
        ],
        nextPreview: 'In Lesson 3, you\'ll learn <strong>smart navigation</strong> commands like <code>turnTo</code> and <code>distanceTo</code> that let the monkey figure out directions and distances on its own!',
      },
    },
  ],
};
