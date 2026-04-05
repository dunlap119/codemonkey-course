/**
 * Lesson 4: Obstacles & Mazes — navigating around bushes
 */

export default {
  id: 'L4',
  title: 'Obstacles & Mazes',
  sections: [
    {
      id: 'L4S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Uh oh — there are <strong>bushes</strong> in the way! I can't walk through them (trust me, I've tried). Now you'll need to plan a path AROUND obstacles to get me to those bananas. Time to think like a problem solver!",
        objectives: [
          'Identify obstacles (bushes) that block the monkey\'s path',
          'Plan multi-step routes around obstacles',
          'Break down complex paths into smaller, manageable steps',
        ],
        essentialQuestions: [
          'What do you do when the direct path is blocked?',
          'How do you break a complex route into simple steps?',
        ],
      },
    },
    {
      id: 'L4S2',
      type: 'content',
      title: 'Navigating Around Obstacles',
      data: {
        subtitle: 'When the straight path won\'t work!',
        blocks: [
          {
            type: 'text',
            content: 'Up until now, the monkey had a clear path to every banana. But in the real world — and in harder puzzles — there are <strong>obstacles</strong> in the way. In CodeMonkey, bushes are the main obstacle. The monkey <strong>cannot</strong> walk through a bush!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'What Are Obstacles?',
          },
          {
            type: 'text',
            content: 'Bushes are green objects that block one or more grid squares. If the monkey tries to step into a bush, the puzzle fails. You need to find a path that goes <strong>around</strong> them.',
          },
          {
            type: 'callout',
            style: 'warning',
            content: 'If your code sends the monkey into a bush, you\'ll get an error! Always check your path visually before running your code to make sure the monkey won\'t hit any obstacles.',
          },
          {
            type: 'key-term',
            term: 'Obstacle',
            definition: 'An object on the grid that blocks the monkey\'s movement. Bushes are the most common obstacle — the monkey must go around them, never through them.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Planning Your Path',
          },
          {
            type: 'text',
            content: 'When obstacles block the direct route, you need to plan a longer path. The key strategy is to <strong>break the problem into parts</strong>:',
          },
          {
            type: 'list',
            items: [
              '<strong>Step 1: Scan the grid.</strong> Find the monkey, the banana, and all the bushes.',
              '<strong>Step 2: Trace a clear path.</strong> Find a route from the monkey to the banana that doesn\'t pass through any bushes.',
              '<strong>Step 3: Break it into segments.</strong> Divide the path into straight-line pieces. Each segment is a step command, and each corner needs a turn.',
              '<strong>Step 4: Write the code.</strong> Translate each segment into step and turn commands.',
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Use your finger (or your eyes) to trace the path on the screen before you write any code. If your finger can get from the monkey to the banana without touching a bush, your path works!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Example: Going Around a Bush',
          },
          {
            type: 'text',
            content: 'Imagine the monkey is facing right and there\'s a bush directly ahead, but the banana is just past the bush. The monkey can\'t go straight, so it needs to go around — maybe up and over, or down and around.',
          },
          {
            type: 'code-block',
            label: 'CoffeeScript',
            code: 'turn left\nstep 1\nturn right\nstep 2\nturn right\nstep 1\nturn left\nstep 1',
            annotation: 'This path goes up one square, forward two squares past the bush, back down, then forward to the banana. The monkey avoids the bush completely!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Decomposition: A Real Programming Skill',
          },
          {
            type: 'text',
            content: 'Breaking a hard problem into smaller pieces is called <strong>decomposition</strong>. It\'s one of the most important skills in computer science! Professional programmers do this every day — they take a big problem and split it into small, solvable steps.',
          },
          {
            type: 'key-term',
            term: 'Decomposition',
            definition: 'Breaking a complex problem into smaller, more manageable parts. Instead of solving one huge puzzle, you solve several small ones in order.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Decomposition is one of the "four pillars" of computational thinking, along with pattern recognition, abstraction, and algorithmic design. You\'re already thinking like a computer scientist!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Mixing Smart Commands with Manual Turns',
          },
          {
            type: 'text',
            content: 'You can combine <code>turnTo</code> and <code>distanceTo</code> with manual <code>turn</code> and <code>step</code> commands. Use smart commands for the easy parts, and manual commands when you need precise control around obstacles.',
          },
          {
            type: 'code-block',
            label: 'CoffeeScript',
            code: 'turn right\nstep 2\nturnTo banana\nstep distanceTo banana',
            annotation: 'First, manually navigate around the bush with turn and step. Once you\'re past it and have a clear shot at the banana, use turnTo and distanceTo to finish!',
          },
        ],
      },
    },
    {
      id: 'L4S3',
      type: 'guided-example',
      title: 'Watch Me: Navigating a Bush Wall',
      data: {
        intro: "Let me show you how to navigate around a wall of bushes. This one takes careful planning!",
        steps: [
          {
            label: 'Scan the grid',
            result: 'The monkey is on the left side, facing right. There\'s a vertical wall of bushes blocking the direct path. The banana is on the other side of the bush wall.',
            annotation: 'I can see that going straight is impossible — the bushes block the way. I need to find a way around them. Let me look for an opening...',
          },
          {
            label: 'Find the clear path',
            result: 'The bush wall doesn\'t go all the way to the top! There\'s a gap above the bushes. I can go up, across the top, and then back down to the banana.',
            annotation: 'I trace the path with my eyes: up to clear the wall, right to pass it, then down to the banana. Three direction changes means three turns.',
          },
          {
            label: 'Break it into segments',
            result: 'Segment 1: Turn left (face up), step 2 to get above the wall. Segment 2: Turn right (face right), step 3 to pass the wall. Segment 3: Turn right (face down), step 2 to reach the banana row. Segment 4: Get to the banana.',
            annotation: 'Each segment is a straight line. I count the squares for each one carefully, making sure I clear the bushes completely before turning.',
          },
          {
            label: 'Write the code',
            code: 'turn left\nstep 2\nturn right\nstep 3\nturn right\nstep 2',
            result: 'The monkey goes up 2, right 3 (past the wall), and down 2 to grab the banana! The bushes never got in the way.',
            annotation: '<strong>Maze tip:</strong> Always double-check that each step doesn\'t cross through a bush. Count squares carefully — one wrong number and the monkey hits an obstacle!',
          },
        ],
      },
    },
    {
      id: 'L4S4',
      type: 'puzzle',
      title: 'Practice: Obstacle Puzzles',
      data: {
        intro: 'Time to navigate around obstacles! Plan your path carefully, then use <code>step</code>, <code>turn</code>, and your smart commands to guide the monkey around the bushes to the bananas.',
        puzzles: [
          { part: 1, id: 8 },
          { part: 1, id: 12 },
        ],
      },
    },
    {
      id: 'L4S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'true-false',
            question: 'The monkey can walk through bushes if you use <code>step</code> with a large enough number.',
            correct: false,
            feedback: 'The monkey can NEVER walk through bushes, no matter how big the step number is. You must find a path around them.',
          },
          {
            type: 'multiple-choice',
            question: 'What is the FIRST thing you should do when you see obstacles on the grid?',
            options: [
              'Start writing step commands immediately',
              'Scan the grid and plan a clear path around the obstacles',
              'Use turn right until the obstacles disappear',
              'Use distanceTo to step through the obstacles',
            ],
            correct: 1,
            feedback: 'Always plan before you code! Scan the grid, find a clear path, break it into segments, and then write your commands.',
          },
          {
            type: 'multiple-choice',
            question: 'Breaking a complex problem into smaller steps is called:',
            options: [
              'Debugging',
              'Compilation',
              'Decomposition',
              'Abstraction',
            ],
            correct: 2,
            feedback: 'Decomposition means breaking a big problem into smaller, manageable parts. It\'s one of the most important skills in computer science!',
          },
        ],
      },
    },
    {
      id: 'L4S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Those bushes thought they could stop us? No way! You planned the perfect path and got me around every single obstacle. Your problem-solving skills are seriously impressive!",
        keyTakeaways: [
          '<strong>Bushes are obstacles</strong> — the monkey cannot walk through them. Your code must go around.',
          '<strong>Plan before you code!</strong> Scan the grid, trace a clear path, then break it into step-and-turn segments.',
          '<strong>Decomposition</strong> means breaking a complex problem into smaller, solvable pieces.',
          'You can <strong>mix smart commands and manual commands</strong> — use turnTo/distanceTo for clear stretches and manual turns for precise obstacle navigation.',
        ],
        nextPreview: 'In Lesson 5, you\'ll learn about <strong>loops</strong> — a way to repeat commands automatically. Instead of writing the same code over and over, you\'ll write it once and let the computer repeat it!',
      },
    },
  ],
};
