/**
 * Lesson 18: Mix and Match — array literals & polymorphism
 * Part 2, Original Lesson 28, Puzzle IDs 34-36
 */

export default {
  id: 'L18',
  title: 'Mix and Match',
  sections: [
    {
      id: 'L18S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Up until now, you've used built-in arrays like <code>bananas</code>. But what if you could build your <strong>own</strong> lists? With array literals, you create custom collections — and you can even mix different types of objects together! Let's mix and match!",
        objectives: [
          'Create custom arrays using <code>[ ]</code> bracket notation',
          'Understand polymorphism — mixing different object types in one array',
          'Plan optimal routes by ordering array elements strategically',
        ],
        essentialQuestions: [
          'Why would you create your own array instead of using a built-in one?',
          'How can different object types work in the same loop?',
        ],
      },
    },
    {
      id: 'L18S2',
      type: 'content',
      title: 'Array Literals & Polymorphism',
      data: {
        subtitle: 'Build your own lists!',
        blocks: [
          {
            type: 'text',
            content: 'You\'ve used <code>for b in bananas</code> to loop through the built-in bananas array. But what if you want to visit targets in a <strong>specific order</strong>, or include objects that aren\'t bananas? You can create your own arrays!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Creating Arrays with [ ]',
          },
          {
            type: 'text',
            content: 'Use square brackets to create a custom array. List the items you want, separated by commas:',
          },
          {
            type: 'code-block',
            label: 'Array Literal',
            code: 'targets = [bananas[0], turtle, bananas[1]]\nfor t in targets\n  turnTo t\n  step distanceTo t',
            annotation: 'This creates a custom array with a banana, a turtle, and another banana. The loop visits them in that exact order!',
          },
          {
            type: 'key-term',
            term: 'Array Literal',
            definition: 'A custom array you create with square brackets <code>[ ]</code>. You list the items you want inside the brackets, separated by commas.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Polymorphism: Mixing Types',
          },
          {
            type: 'text',
            content: 'Notice something cool — the array above contains both bananas AND a turtle! Different object types can be in the same array. This is called <strong>polymorphism</strong>.',
          },
          {
            type: 'key-term',
            term: 'Polymorphism',
            definition: 'The ability to treat different types of objects the same way. As long as they share common actions (like having x and y positions), you can put them in the same array and loop through them!',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Polymorphism comes from Greek: "poly" (many) + "morph" (forms). It means "many forms." In programming, it means one piece of code can work with many different types of objects!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Route Planning',
          },
          {
            type: 'text',
            content: 'One big advantage of array literals is <strong>controlling the order</strong>. The built-in <code>bananas</code> array might not have them in the best order for your route. With a custom array, YOU decide the path:',
          },
          {
            type: 'code-block',
            label: 'Route Planning',
            code: '# Built-in order might not be ideal:\n# bananas = [far one, close one, medium one]\n\n# Your custom route:\nroute = [bananas[1], bananas[2], bananas[0]]\nfor t in route\n  turnTo t\n  step distanceTo t',
            annotation: 'By reordering the bananas in your custom array, you can plan the shortest path! Visit the closest first, then work outward.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'When there are obstacles like bushes, plan your route to go AROUND them. Array literals let you control exactly which targets to visit and in what order.',
          },
        ],
      },
    },
    {
      id: 'L18S3',
      type: 'guided-example',
      title: 'Watch Me: Building a Custom Route',
      data: {
        intro: "Let me show you how to create a custom array to plan the optimal route through a puzzle!",
        steps: [
          {
            label: 'Survey the targets',
            result: 'I see bananas and a turtle scattered around the grid. The built-in bananas array doesn\'t include the turtle, and the order might not be ideal.',
            annotation: 'I need to visit ALL targets, including the turtle. The built-in arrays won\'t work — I need a custom one!',
          },
          {
            label: 'Plan the route',
            result: 'Looking at positions: banana at (3,2), turtle at (3,4), banana at (6,4). Going right, then down, then right again is the shortest path.',
            annotation: 'I\'ll arrange my array so I visit targets along a logical path, minimizing backtracking.',
          },
          {
            label: 'Build the custom array',
            code: 'targets = [bananas[0], turtle, bananas[1]]\nfor t in targets\n  turnTo t\n  step distanceTo t',
            result: 'The monkey visits banana, turtle, then banana — following the shortest route!',
            annotation: 'Array literals give you full control over what to visit and in what order. The loop works because bananas and turtles both have positions!',
          },
        ],
      },
    },
    {
      id: 'L18S4',
      type: 'puzzle',
      title: 'Practice: Mix and Match',
      data: {
        intro: 'Create custom arrays with <code>[ ]</code> to plan your route. Mix different object types and choose the best visit order!',
        puzzles: [
          { part: 2, id: 34 },
          { part: 2, id: 35 },
          { part: 2, id: 36 },
        ],
      },
    },
    {
      id: 'L18S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What does <code>[banana, turtle]</code> create?',
            options: [
              'A function',
              'An array with two elements',
              'A loop',
              'An error',
            ],
            correct: 1,
            feedback: 'Square brackets create an array literal. This one contains two elements: a banana and a turtle.',
          },
          {
            type: 'true-false',
            question: 'An array can contain different types of objects.',
            correct: true,
            feedback: 'Correct! This is called polymorphism — different types in one array. As long as they share common actions, you can loop through them.',
          },
          {
            type: 'multiple-choice',
            question: 'Why would you create a custom array instead of using <code>bananas</code>?',
            options: [
              'Custom arrays run faster',
              'To control the visit order or include non-banana objects',
              'The bananas array doesn\'t work in loops',
              'Custom arrays are required by CoffeeScript',
            ],
            correct: 1,
            feedback: 'Custom arrays let you control the order AND include different types of objects like turtles, making your routes more flexible.',
          },
        ],
      },
    },
    {
      id: 'L18S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You're a route-planning master! Custom arrays let you decide exactly what to visit and in what order. And polymorphism means you can mix bananas, turtles, and anything else in one list. How cool is that?",
        keyTakeaways: [
          '<strong>Array literals</strong> use <code>[ ]</code> to create custom arrays with any items you choose.',
          '<strong>Polymorphism</strong> means different object types can go in the same array and be treated the same way.',
          '<strong>Route planning</strong> — use custom arrays to control the visit order and find the shortest path.',
          '<strong>Objects just need shared actions</strong> — as long as they have positions (x, y), you can use turnTo and step distanceTo on any of them.',
        ],
        nextPreview: 'In Lesson 19, you\'ll meet the <strong>penguins</strong>! They wear accessories like glasses and bow ties, and you\'ll use <code>and</code> and <code>or</code> to filter them. Fashion meets code!',
      },
    },
  ],
};
