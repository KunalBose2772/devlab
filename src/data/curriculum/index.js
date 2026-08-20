/**
 * MASTER CURRICULUM DATA
 * All learning content is data-driven, not hard-coded into components.
 * Structure: Domain → Track → Module → Concept → Lesson
 */

export const CURRICULUM = [
  {
    id: 'stage-0',
    title: 'Computer & Software Foundations',
    slug: 'foundations',
    stage: 0,
    description: 'Understand what actually happens when code runs.',
    icon: 'foundations',
    color: '#06b6d4',
    modules: [
      {
        id: 'mod-cs-basics',
        title: 'How Computers Work',
        slug: 'how-computers-work',
        concepts: ['cpu', 'memory', 'storage', 'operating-systems', 'processes'],
      },
      {
        id: 'mod-software',
        title: 'Source Code to Execution',
        slug: 'source-to-execution',
        concepts: ['source-code', 'compiler', 'interpreter', 'runtime', 'terminal'],
      },
      {
        id: 'mod-networking',
        title: 'Networks & the Internet',
        slug: 'networking',
        concepts: ['client-server', 'internet', 'browser', 'environment-variables'],
      },
    ],
  },
  {
    id: 'stage-1',
    title: 'Programming Thinking',
    slug: 'programming-thinking',
    stage: 1,
    description: 'Build the mental model of how programs think and execute.',
    icon: 'programming-thinking',
    color: '#8b5cf6',
    modules: [
      {
        id: 'mod-values',
        title: 'Values & Variables',
        slug: 'values-variables',
        concepts: ['variables', 'constants', 'data-types', 'operators'],
      },
      {
        id: 'mod-flow',
        title: 'Control Flow',
        slug: 'control-flow',
        concepts: ['conditions', 'if-else', 'switch', 'while-loops', 'for-loops'],
      },
      {
        id: 'mod-functions',
        title: 'Functions',
        slug: 'functions',
        concepts: ['functions', 'parameters', 'return-values', 'scope'],
      },
      {
        id: 'mod-errors',
        title: 'Errors & Debugging',
        slug: 'errors-debugging',
        concepts: ['error-types', 'debugging-mindset', 'reading-errors'],
      },
    ],
  },
  {
    id: 'stage-2',
    title: 'Data',
    slug: 'data',
    stage: 2,
    description: 'Represent and manipulate real-world information.',
    icon: 'data',
    color: '#10b981',
    modules: [
      {
        id: 'mod-primitives',
        title: 'Primitive Types',
        slug: 'primitives',
        concepts: ['strings', 'numbers', 'booleans', 'null-undefined'],
      },
      {
        id: 'mod-collections',
        title: 'Collections',
        slug: 'collections',
        concepts: ['arrays', 'objects', 'nested-structures'],
      },
      {
        id: 'mod-data-ops',
        title: 'Working with Data',
        slug: 'data-operations',
        concepts: ['searching', 'filtering', 'sorting', 'transformation'],
      },
    ],
  },
  // Stages 3-12 are defined similarly...
  // (remaining stages added as content is built)
];

/**
 * CONCEPT DEFINITIONS
 * Each concept follows the Concept Engine structure:
 * Problem → Try → Discover → Explain → Visualize →
 * Manipulate → Break → Debug → Apply → Connect → Master
 */
export const CONCEPTS = {
  variables: {
    id: 'variables',
    slug: 'variables',
    title: 'Variables',
    subtitle: 'Naming and storing values',
    stage: 1,
    module: 'values-variables',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 25,
    prerequisites: [],
    tags: ['fundamentals', 'data', 'storage'],
    labId: 'lab-variables',
    challengeId: 'challenge-variables-1',

    // Knowledge graph connections
    graph: {
      requires: [],
      relatedTo: ['constants', 'data-types', 'operators'],
      usedBy: ['functions', 'conditions', 'loops', 'arrays', 'objects'],
    },

    // Concept Engine Steps
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Problem',
        content: `Imagine you're building an online shop. A customer adds a product to their cart.
The product costs ₹1,499. They apply a 10% discount. Then tax is added. Then shipping.

Without variables, you'd have to write the number ₹1,499 in every single calculation.

Change the price? You'd have to find and update it in 20 different places.
Make a typo? The entire calculation breaks—silently.

This is the exact problem variables were invented to solve.`,
        code: `// Without variables — fragile and repetitive
let total = 1499 - (1499 * 0.10) + (1499 * 0.18 * 0.10) + 99;
// ₹1,499 appears three times. One mistake breaks everything.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'What is a Variable?',
        content: `A variable is a named container that holds a value.

Think of it like a labeled box. The label is the name. What's inside is the value.

\`\`\`js
let price = 1499;
\`\`\`

Now anywhere you need the price, you write \`price\` instead of \`1499\`.
Change the price once. It updates everywhere.`,
      },
      {
        id: 'visualize',
        type: 'interactive',
        title: 'Interactive Variable Lab',
        labId: 'lab-variables',
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'JavaScript', example: 'const user = { name: "Kunal" }' },
          { context: 'React', example: 'const [count, setCount] = useState(0)' },
          { context: 'PHP', example: '$price = 1499;' },
          { context: 'Laravel', example: '$product->price' },
          { context: 'SQL', example: 'SELECT price FROM products' },
          { context: 'Next.js', example: 'const params = useParams()' },
        ],
      },
    ],
  },

  constants: {
    id: 'constants',
    slug: 'constants',
    title: 'Constants',
    subtitle: 'Values that should never change',
    stage: 1,
    difficulty: 'beginner',
    prerequisites: ['variables'],
    labId: 'lab-constants',
    graph: {
      requires: ['variables'],
      relatedTo: ['data-types'],
      usedBy: ['functions', 'modules'],
    },
  },

  'data-types': {
    id: 'data-types',
    slug: 'data-types',
    title: 'Data Types',
    subtitle: 'The kinds of values that exist',
    stage: 1,
    difficulty: 'beginner',
    prerequisites: ['variables'],
    labId: 'lab-data-types',
    graph: {
      requires: ['variables'],
      relatedTo: ['operators', 'functions'],
      usedBy: ['arrays', 'objects'],
    },
  },
};

/**
 * LAB DEFINITIONS
 * Labs are interactive environments tied to specific concepts.
 */
export const LABS = {
  'lab-variables': {
    id: 'lab-variables',
    title: 'Variable Lab',
    concept: 'variables',
    description: 'Experiment with creating, modifying, and using variables.',
    language: 'javascript',

    starterCode: `// === VARIABLE LAB ===
// A customer is buying a product. Let's calculate their total.

// 1. Create a variable for the product name
let productName = "Wireless Headphones";

// 2. Create a variable for the price (in ₹)
let price = 2999;

// 3. Create a variable for the discount percentage
let discountPercent = 10;

// 4. Calculate the discount amount
let discountAmount = price * (discountPercent / 100);

// 5. Calculate the final price
let finalPrice = price - discountAmount;

// 6. Print the result
console.log("Product:", productName);
console.log("Original price: ₹" + price);
console.log("Discount:", discountPercent + "%");
console.log("You save: ₹" + discountAmount);
console.log("Final price: ₹" + finalPrice);
`,

    tasks: [
      'Run the code and read the output.',
      'Change productName to a different product.',
      'Change the price. Notice how finalPrice updates automatically.',
      'Change the discount to 25%. What is the new total?',
      'Add a variable for shipping cost (₹99) and include it in the final total.',
    ],

    tests: [
      {
        id: 'test-1',
        description: 'productName is declared as a variable',
        hidden: false,
        check: (code) => code.includes('let productName') || code.includes('const productName'),
      },
      {
        id: 'test-2',
        description: 'price is a number',
        hidden: false,
        check: (code) => /let\s+price\s*=\s*\d+/.test(code),
      },
      {
        id: 'test-3',
        description: 'finalPrice is calculated from price and discount',
        hidden: true,
        check: (code) => code.includes('finalPrice') && code.includes('discountAmount'),
      },
    ],

    hints: [
      'Variables store a value so you can reference it by name later.',
      "Use `let` when the value might change, `const` when it won't.",
      'To add shipping: `let total = finalPrice + shipping;`',
      'Try: `let shipping = 99;` then `let total = finalPrice + shipping;`',
    ],

    solution: `let productName = "Wireless Headphones";
let price = 2999;
let discountPercent = 10;
let discountAmount = price * (discountPercent / 100);
let finalPrice = price - discountAmount;
let shipping = 99;
let total = finalPrice + shipping;

console.log("Product:", productName);
console.log("Original price: ₹" + price);
console.log("Discount:", discountPercent + "%");
console.log("You save: ₹" + discountAmount);
console.log("Final price: ₹" + finalPrice);
console.log("Shipping: ₹" + shipping);
console.log("Total: ₹" + total);
`,
  },
};

/**
 * CHALLENGE DEFINITIONS
 */
export const CHALLENGES = {
  'challenge-variables-1': {
    id: 'challenge-variables-1',
    title: 'The Invoice Calculator',
    concept: 'variables',
    type: 'build',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    description: `An ecommerce platform needs an invoice calculator.

Given:
- Product name: "Mechanical Keyboard"
- Base price: ₹4,500
- GST: 18%
- Shipping: ₹149 (free if price > ₹5,000 after GST)

Write code that:
1. Stores each value in a correctly named variable
2. Calculates the GST amount
3. Calculates the subtotal (price + GST)
4. Determines if shipping is free
5. Calculates and prints the final total
`,

    starterCode: `// The Invoice Calculator
// Fill in the code below

// Step 1: Store the product details
let productName = "";
let basePrice = 0;
let gstPercent = 0;

// Step 2: Calculate GST
let gstAmount = // your calculation here

// Step 3: Calculate subtotal
let subtotal = // your calculation here

// Step 4: Determine shipping
let shipping = // use an if condition

// Step 5: Calculate total
let total = // your calculation here

// Step 6: Print the invoice
console.log("=== INVOICE ===");
// print each value
`,

    visibleTests: [
      { input: 'default values', expected: 'Total: ₹5,460 (shipping free)' },
    ],
    hiddenTests: [
      { description: 'gstAmount is calculated correctly', expected: 810 },
      { description: 'subtotal = basePrice + gstAmount', expected: 5310 },
      { description: 'shipping is 0 (subtotal > 5000)', expected: 0 },
      { description: 'total = subtotal + shipping', expected: 5310 },
    ],

    hints: [
      'Start by storing the known values in variables.',
      'GST amount = basePrice × (gstPercent / 100)',
      'subtotal = basePrice + gstAmount',
      'If subtotal > 5000, shipping = 0. Otherwise shipping = 149.',
    ],
  },
};

/**
 * Helper: Get concept by slug
 */
export function getConcept(slug) {
  return CONCEPTS[slug] || null;
}

/**
 * Helper: Get lab by id
 */
export function getLab(labId) {
  return LABS[labId] || null;
}

/**
 * Helper: Get challenge by id
 */
export function getChallenge(challengeId) {
  return CHALLENGES[challengeId] || null;
}

/**
 * Helper: Get track by slug
 */
export function getTrack(slug) {
  return CURRICULUM.find((t) => t.slug === slug) || null;
}

/**
 * Helper: Get all tracks
 */
export function getAllTracks() {
  return CURRICULUM;
}
