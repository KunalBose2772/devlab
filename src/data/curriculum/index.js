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
  {
    id: 'stage-3',
    title: 'Object-Oriented Programming',
    slug: 'oop',
    stage: 3,
    description: 'Structure code using objects, classes, and architectural blueprints.',
    icon: 'oop',
    color: '#3b82f6',
    modules: [
      {
        id: 'mod-oop-basics',
        title: 'OOP Foundations',
        slug: 'oop-foundations',
        concepts: ['classes', 'objects-instances', 'constructors'],
      },
      {
        id: 'mod-oop-principles',
        title: 'The Four Pillars',
        slug: 'oop-principles',
        concepts: ['encapsulation', 'inheritance', 'polymorphism', 'abstraction'],
      },
    ],
  },
  {
    id: 'stage-4',
    title: 'Web Fundamentals',
    slug: 'web-fundamentals',
    stage: 4,
    description: 'Master the mechanics of HTML, the DOM, and network requests.',
    icon: 'web',
    color: '#ec4899',
    modules: [
      {
        id: 'mod-http',
        title: 'How the Web Works',
        slug: 'http-mechanics',
        concepts: ['http-protocol', 'request-response', 'headers-methods', 'status-codes'],
      },
      {
        id: 'mod-dom',
        title: 'HTML & the DOM',
        slug: 'html-dom',
        concepts: ['html-basics', 'dom-tree', 'dom-manipulation', 'event-listeners'],
      },
    ],
  },
  {
    id: 'stage-5',
    title: 'Databases & SQL',
    slug: 'databases-sql',
    stage: 5,
    description: 'Store, query, and structure relational and document-based data.',
    icon: 'database',
    color: '#f59e0b',
    modules: [
      {
        id: 'mod-db-basics',
        title: 'Database Foundations',
        slug: 'db-foundations',
        concepts: ['relational-vs-nosql', 'schemas', 'tables-columns'],
      },
      {
        id: 'mod-sql',
        title: 'Structured Query Language',
        slug: 'sql-queries',
        concepts: ['select', 'where', 'joins', 'inserts-updates'],
      },
    ],
  },
  {
    id: 'stage-6',
    title: 'Advanced JavaScript',
    slug: 'advanced-js',
    stage: 6,
    description: 'Master asynchronous flow, engine mechanics, and scope closures.',
    icon: 'javascript',
    color: '#eab308',
    modules: [
      {
        id: 'mod-async-js',
        title: 'Asynchronous Programming',
        slug: 'async-js',
        concepts: ['promises', 'async-await', 'event-loop', 'callbacks'],
      },
      {
        id: 'mod-js-engine',
        title: 'Under the Hood',
        slug: 'engine-mechanics',
        concepts: ['closures-adv', 'this-keyword', 'prototypes'],
      },
    ],
  },
  {
    id: 'stage-7',
    title: 'React.js',
    slug: 'react',
    stage: 7,
    description: 'Build components, manage state, and build interactive user interfaces.',
    icon: 'react',
    color: '#06b6d4',
    modules: [
      {
        id: 'mod-react-core',
        title: 'React Core',
        slug: 'react-core',
        concepts: ['components', 'jsx', 'props', 'state'],
      },
      {
        id: 'mod-react-hooks',
        title: 'Hooks & Effects',
        slug: 'react-hooks',
        concepts: ['use-state', 'use-effect', 'use-ref', 'custom-hooks'],
      },
    ],
  },
  {
    id: 'stage-8',
    title: 'Next.js',
    slug: 'nextjs',
    stage: 8,
    description: 'Deploy production-ready applications with routing, SSR, and API endpoints.',
    icon: 'nextjs',
    color: '#000000',
    modules: [
      {
        id: 'mod-next-routing',
        title: 'App Router Routing',
        slug: 'next-routing',
        concepts: ['pages-layouts', 'dynamic-routes', 'navigation'],
      },
      {
        id: 'mod-next-rendering',
        title: 'Server vs Client',
        slug: 'next-rendering',
        concepts: ['ssr-ssg', 'server-components', 'client-components'],
      },
    ],
  },
  {
    id: 'stage-9',
    title: 'PHP Basics',
    slug: 'php',
    stage: 9,
    description: 'Master server-side programming and dynamic page generation with PHP.',
    icon: 'php',
    color: '#777bb4',
    modules: [
      {
        id: 'mod-php-foundations',
        title: 'PHP Foundations',
        slug: 'php-foundations',
        concepts: ['php-syntax', 'php-variables', 'php-arrays', 'php-functions'],
      },
      {
        id: 'mod-php-web',
        title: 'PHP and Web',
        slug: 'php-web-integration',
        concepts: ['superglobals', 'sessions-cookies', 'php-forms'],
      },
    ],
  },
  {
    id: 'stage-10',
    title: 'Laravel',
    slug: 'laravel',
    stage: 10,
    description: 'Build enterprise-grade PHP backends using Laravel MVC patterns.',
    icon: 'laravel',
    color: '#ff2d20',
    modules: [
      {
        id: 'mod-laravel-core',
        title: 'Laravel Foundations',
        slug: 'laravel-core',
        concepts: ['mvc', 'routing', 'controllers', 'blade-views'],
      },
      {
        id: 'mod-laravel-database',
        title: 'Eloquent ORM',
        slug: 'laravel-database',
        concepts: ['migrations', 'models', 'relationships', 'queries'],
      },
    ],
  },
  {
    id: 'stage-11',
    title: 'Full-Stack Integration',
    slug: 'fullstack',
    stage: 11,
    description: 'Integrate backends with frontend clients, secure routes, and build CI/CD pipelines.',
    icon: 'fullstack',
    color: '#10b981',
    modules: [
      {
        id: 'mod-apis',
        title: 'REST APIs',
        slug: 'rest-apis',
        concepts: ['rest-standards', 'endpoint-design', 'cors', 'auth-jwt'],
      },
      {
        id: 'mod-deployment',
        title: 'CI/CD & Cloud',
        slug: 'deployment-cloud',
        concepts: ['git-workflows', 'vercel-deployment', 'docker-basics', 'monitors'],
      },
    ],
  },
  {
    id: 'stage-12',
    title: 'System Design',
    slug: 'system-design',
    stage: 12,
    description: 'Design distributed architectures, caching layers, and high-scale backends.',
    icon: 'system-design',
    color: '#6366f1',
    modules: [
      {
        id: 'mod-scaling',
        title: 'Scaling Systems',
        slug: 'scaling-systems',
        concepts: ['caching', 'load-balancers', 'rate-limiting', 'message-queues'],
      },
    ],
  },
];

/**
 * CONCEPT DEFINITIONS
 * Each concept follows the Concept Engine structure:
 * Problem → Try → Discover → Explain → Visualize →
 * Manipulate → Break → Debug → Apply → Connect → Master
 */
export const CONCEPTS = {
  // ── STAGE 0: COMPUTER & SOFTWARE FOUNDATIONS ──
  cpu: {
    id: 'cpu',
    slug: 'cpu',
    title: 'CPU',
    subtitle: 'The brain of the computer',
    stage: 0,
    module: 'how-computers-work',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: [],
    tags: ['hardware', 'processing', 'fundamentals'],
    graph: {
      requires: [],
      relatedTo: ['memory', 'storage'],
      usedBy: ['operating-systems', 'processes'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Conductor\'s Absence',
        content: `How does a silicon chip made of billions of microscopic transistors execute complex operations at the speed of light? 

Without a central processing unit to orchestrate instructions, a computer is just a static container of electrical components. How do we direct electricity to execute logical calculations dynamically?`,
        code: `// The CPU Fetch-Decode-Execute loop:
// 1. Fetch: Load next instruction (e.g., "Add 5 and 10")
// 2. Decode: Translate instruction into binary control signals
// 3. Execute: Perform calculation in the ALU (Arithmetic Logic Unit)
// 4. Writeback: Save result to a register or memory`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The Silicon Engine',
        content: `The CPU (Central Processing Unit) is the electronic circuitry that executes instructions of a computer program.

Key components inside a CPU:
* **Control Unit (CU):** The manager. Directs the flow of inputs, outputs, and internal instruction states.
* **Arithmetic Logic Unit (ALU):** The mathematician. Performs mathematical calculations (+, -, *, /) and logical comparisons.
* **Registers:** Tiny, ultra-fast memory storage units directly on the chip (accessed in under 1 nanosecond).
* **System Clock:** Sends electrical pulses to synchronize all CPU activities (measured in GHz, or billions of pulses per second).`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Hardware Specs', example: 'Intel Core i9 8-Core (16 Threads) @ 5.2 GHz' },
          { context: 'Assembly Language', example: 'MOV RAX, 60  ; Move number 60 to register RAX' },
          { context: 'Node.js', example: 'const os = require("os"); console.log(os.cpus().length);' },
        ],
      },
    ],
  },

  memory: {
    id: 'memory',
    slug: 'memory',
    title: 'Memory (RAM)',
    subtitle: 'The short-term workspace',
    stage: 0,
    module: 'how-computers-work',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['cpu'],
    tags: ['hardware', 'memory', 'fundamentals'],
    graph: {
      requires: ['cpu'],
      relatedTo: ['storage', 'cpu'],
      usedBy: ['processes', 'variables'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Speed vs. Permanence',
        content: `Your hard drive or SSD can hold terabytes of files, but it is physically too slow for the CPU.

If a CPU (running at 4 GHz) had to fetch instructions directly from an SSD for every step, it would waste 99% of its cycles waiting for data to arrive. How do we create an intermediate, super-fast workspace?`,
        code: `// Speed comparison of accessing 1 byte of data:
// Registers:   < 0.5 nanoseconds (Immediate CPU access)
// RAM (Memory):  ~100 nanoseconds (Fast workspace)
// SSD (Storage): ~50,000 nanoseconds (Slow vault)`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Random Access Memory',
        content: `RAM (Random Access Memory) is a computer's high-speed short-term memory. 

When you run an application, the operating system copies it from slow long-term storage into RAM so the CPU can interact with it instantly.

Key characteristics:
* **Volatile:** RAM requires electric power to hold data. The moment the computer turns off, all data in RAM is gone.
* **Random Access:** The CPU can jump directly to any memory address (randomly) in the exact same amount of time.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'System Specs', example: '16 GB DDR5 RAM' },
          { context: 'Node.js Errors', example: 'FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory' },
          { context: 'Memory Leak', example: 'An application forgetting to release memory, leading to RAM filling up until the OS crashes it.' },
        ],
      },
    ],
  },

  storage: {
    id: 'storage',
    slug: 'storage',
    title: 'Storage',
    subtitle: 'The long-term archive',
    stage: 0,
    module: 'how-computers-work',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 12,
    prerequisites: ['memory'],
    tags: ['hardware', 'persistence'],
    graph: {
      requires: ['memory'],
      relatedTo: ['memory'],
      usedBy: ['operating-systems'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Permanent Vault',
        content: `Since RAM is extremely fast, why don't we use it for everything? 

RAM requires continuous electricity to hold its state. When power shuts off, your files are lost. We need a device that holds data without power—so your operating system, photos, and code are saved safely.`,
        code: `// Data Persistence:
// RAM: Power lost -> Data erased (Volatile)
// SSD / Hard Drive: Power lost -> Data preserved (Non-volatile)`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Non-Volatile Storage',
        content: `Storage refers to secondary memory devices that persist data permanently without electric power.

Primary types of storage:
* **Solid State Drives (SSDs):** Uses NAND flash memory chips. No moving parts, highly shock-resistant, and very fast read/write speeds.
* **Hard Disk Drives (HDDs):** Uses mechanical spinning magnetic platters and read/write heads. Slower but cheaper for large sizes.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Next.js / Node', example: 'import fs from "fs"; fs.writeFileSync("data.txt", "Saved!"); // Write to storage' },
          { context: 'Browser Storage', example: 'localStorage.setItem("user", JSON.stringify(profile)); // Saved to device storage' },
          { context: 'Databases', example: 'PostgreSQL committing transactions directly to disk for absolute persistence.' },
        ],
      },
    ],
  },

  'operating-systems': {
    id: 'operating-systems',
    slug: 'operating-systems',
    title: 'Operating Systems',
    subtitle: 'The hardware conductor',
    stage: 0,
    module: 'how-computers-work',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['cpu', 'memory', 'storage'],
    tags: ['software', 'architecture', 'kernel'],
    graph: {
      requires: ['cpu', 'memory', 'storage'],
      relatedTo: ['processes'],
      usedBy: ['processes', 'terminal'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Hardware Chaos',
        content: `Imagine if every software developer had to write custom drivers and raw electrical signal commands just to write a text file to disk or paint a pixel to the screen. 

Building apps would be impossible. We need a master program to mediate, abstract, and secure hardware access.`,
        code: `// Without an OS: Program directly manipulates motherboard physical pins.
// With an OS: Program calls high-level API "fs.writeFile()"
// The OS Kernel translates the call, checks security, and writes to hardware safely.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The Kernel and User Space',
        content: `An Operating System (OS) is the system software that manages hardware resources and provides services for programs.

Core functions:
* **The Kernel:** The core component. Manages scheduling CPU time, reading/writing memory, and file systems.
* **Device Drivers:** Software components letting the Kernel speak to hardware (graphic cards, webcams).
* **Isolation:** Prevents regular programs from accessing other programs' memory directly, ensuring stability.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Platforms', example: 'Linux, macOS, Windows, Android, iOS' },
          { context: 'Paths', example: 'Windows using backslash (\\) vs macOS/Linux using forward slash (/) for files.' },
          { context: 'Docker', example: 'Containers sharing the host Operating System kernel to run applications efficiently.' },
        ],
      },
    ],
  },

  processes: {
    id: 'processes',
    slug: 'processes',
    title: 'Processes & Threads',
    subtitle: 'Programs in motion',
    stage: 0,
    module: 'how-computers-work',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['operating-systems'],
    tags: ['software', 'concurrency', 'multitasking'],
    graph: {
      requires: ['operating-systems'],
      relatedTo: ['cpu', 'memory'],
      usedBy: ['runtime', 'terminal'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Multitasking Illusion',
        content: `A single CPU core can physically execute only one simple command at a time. 

Yet, you can browse websites, listen to Spotify, and compile code simultaneously. How does a computer run dozens of programs at once without causing conflicts?`,
        code: `// Operating System CPU time slicing:
// Millisecond 1-10:   Run chrome.exe
// Millisecond 11-20:  Run spotify.exe
// Millisecond 21-30:  Run node.exe
// This rapid switching (context switching) makes it look simultaneous.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Processes vs. Threads',
        content: `The Operating System packages code in motion into two concepts:

* **Process:** An isolated sandbox running a program. It has its own private memory space allocated by the OS. Processes cannot touch each other's memory.
* **Thread:** A smaller execution path *within* a process. A single process can have multiple threads sharing the same memory block.

If a browser tab crashes a process, it won't crash your entire computer. But if a thread crashes inside a process, the whole process might collapse.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'OS Task Manager', example: 'Viewing Process IDs (PIDs), CPU, and memory allocation per running process.' },
          { context: 'Node.js', example: 'console.log(process.pid); // Access current process ID' },
          { context: 'Concurrency Models', example: 'JavaScript running in a single-threaded process vs Go running multiple threads (goroutines).' },
        ],
      },
    ],
  },

  'source-code': {
    id: 'source-code',
    slug: 'source-code',
    title: 'Source Code',
    subtitle: 'Writing human-readable instructions',
    stage: 0,
    module: 'source-to-execution',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    prerequisites: ['operating-systems'],
    tags: ['software', 'fundamentals', 'syntax'],
    graph: {
      requires: ['operating-systems'],
      relatedTo: ['compiler', 'interpreter'],
      usedBy: ['compiler', 'interpreter', 'variables'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Speaking to Sand',
        content: `Computers can only understand raw electronic states: 1s and 0s (binary machine code).

If humans had to write applications in binary, a simple calculator program would take weeks to write, and fixing errors would be near impossible. We need a readable way to express logic.`,
        code: `// Machine Code (Binary):
// 01001000 01000101 01001100 01001100 01001111

// Source Code (JavaScript):
// console.log("HELLO");`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Syntax and Files',
        content: `Source code is the collection of human-readable text instructions written in a programming language.

* Source code is written as plain text files (like \`.js\`, \`.py\`, \`.cpp\`).
* A programming language defines strict grammar rules called **syntax**.
* Tools called compilers or interpreters are used to translate this plain text into machine instructions.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Git / GitHub', example: 'Version control systems designed to track line-by-line changes in plain text source code.' },
          { context: 'Text Editors', example: 'VS Code, Sublime Text, or Vim, parsing syntax and highlighting keywords.' },
          { context: 'File Extensions', example: '.js (JavaScript), .py (Python), .rs (Rust)' },
        ],
      },
    ],
  },

  compiler: {
    id: 'compiler',
    slug: 'compiler',
    title: 'Compilers',
    subtitle: 'The ahead-of-time translator',
    stage: 0,
    module: 'source-to-execution',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['source-code'],
    tags: ['translation', 'compilation', 'performance'],
    graph: {
      requires: ['source-code'],
      relatedTo: ['interpreter', 'runtime'],
      usedBy: ['runtime'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Translation Delay',
        content: `Your high-level source code cannot run directly on the CPU. 

How do we take a complex directory of plain text code files and compile it into a single, highly optimized binary file that runs at maximum hardware speed?`,
        code: `// Compilation Pipeline:
// [source.cpp] -> [Compiler (g++)] -> [executable binary (source.exe)]
// The compilation happens entirely BEFORE the program runs.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Ahead-of-Time Translation',
        content: `A **compiler** is a specialized program that translates source code written in a high-level language into machine code (binary) all at once.

This is called **Ahead-of-Time (AOT)** compilation:
* **Performance:** Compiled programs run incredibly fast because they are already translated.
* **Architecture Specific:** A compiled binary built for an Intel Windows computer will not run on an ARM Mac.
* **Compilation Errors:** If you make a syntax error, compilation fails immediately, and no executable is created.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Languages', example: 'C++, Rust, Go, Swift, Haskell' },
          { context: 'Next.js Build', example: 'npm run build — translates and compiles TypeScript/React code into production bundle.' },
          { context: 'Commands', example: 'g++ main.cpp -o main  // Compile C++' },
        ],
      },
    ],
  },

  interpreter: {
    id: 'interpreter',
    slug: 'interpreter',
    title: 'Interpreters',
    subtitle: 'The on-the-fly translator',
    stage: 0,
    module: 'source-to-execution',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['source-code'],
    tags: ['translation', 'interpretation', 'scripting'],
    graph: {
      requires: ['source-code'],
      relatedTo: ['compiler', 'runtime'],
      usedBy: ['runtime'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Waiting for Builds',
        content: `Compiling a large project can take minutes or even hours. 

What if you just want to write a quick script, test a simple line of code, or run commands dynamically without waiting to compile a whole binary? We need a translator that works in real-time.`,
        code: `// Interpreter execution loop:
// Read Line 1: let name = "Kunal";   -> Run instantly
// Read Line 2: console.log(name);    -> Run instantly
// Translation happens step-by-step during runtime.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Line-by-Line Translation',
        content: `An **interpreter** runs source code directly, translating and executing it line-by-line, on the fly.

Key features:
* **Immediate execution:** No compile step. You save the file and run it immediately.
* **Platform Independence:** The same script runs on any device that has the interpreter installed.
* **Runtime Errors:** The script will run fine until it hits the specific line containing the error.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Languages', example: 'Python, JavaScript, Ruby, PHP' },
          { context: 'JIT Compilers', example: 'Modern JS engines (like Chrome V8) use Just-in-Time compilers, combining compile and interpret speeds.' },
          { context: 'REPL', example: 'Read-Eval-Print Loop in your terminal or browser console for instant scripting.' },
        ],
      },
    ],
  },

  runtime: {
    id: 'runtime',
    slug: 'runtime',
    title: 'Runtime Environment',
    subtitle: 'The sandbox system',
    stage: 0,
    module: 'source-to-execution',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 18,
    prerequisites: ['compiler', 'interpreter'],
    tags: ['execution', 'sandbox', 'apis'],
    graph: {
      requires: ['compiler', 'interpreter'],
      relatedTo: ['processes'],
      usedBy: ['environment-variables'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Beyond the Syntax',
        content: `A programming language on its own only defines grammar rules like variables and loops. 

But how does your code write a file to your SSD, fetch an API from the internet, or listen for keyboard input? A language needs an execution environment that supplies these capabilities.`,
        code: `// Standard JavaScript syntax:
let a = 5;

// Runtime APIs (Browser):
window.alert("Hello!");

// Runtime APIs (Node.js):
const fs = require("fs");
fs.writeFileSync("output.txt", "Hello!");`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The Execution Container',
        content: `A **runtime environment** is the system where your code executes. It hosts the compiler/interpreter and bundles additional libraries and system APIs.

For JavaScript, the syntax is identical, but runtimes vary:
* **Browser (Chrome/Firefox):** Gives JS access to DOM nodes, Fetch API, and window properties. It cannot read local files directly due to safety.
* **Node.js / Bun:** Gives JS access to direct file systems, server ports, and processes. It has no access to DOM objects or CSS styles.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'JavaScript Runtimes', example: 'V8 (Chrome/Node.js), JavaScriptCore (Safari/Bun), SpiderMonkey (Firefox)' },
          { context: 'Errors', example: '"window is not defined" when trying to run browser-centric script in Node.js.' },
          { context: 'APIs', example: '`fetch()` which is native to browser runtime and recently added natively to Node.js.' },
        ],
      },
    ],
  },

  terminal: {
    id: 'terminal',
    slug: 'terminal',
    title: 'The Terminal',
    subtitle: 'Command-line execution',
    stage: 0,
    module: 'source-to-execution',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['operating-systems'],
    tags: ['cli', 'shell', 'operating-system'],
    graph: {
      requires: ['operating-systems'],
      relatedTo: ['processes'],
      usedBy: ['client-server'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Beyond the GUI',
        content: `Graphical User Interfaces (GUIs) are convenient, but they limit you to buttons and interfaces that developers designed.

If you need to rename 1,000 files, build code automatically, or deploy a remote server, clicking buttons is slow and unscalable. We need a direct, text-based shell to instruct the operating system.`,
        code: `// Renaming all .txt files to .backup in GUI:
// Click, rename, repeat 1,000 times.

// In Terminal:
// mv *.txt *.backup`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The Shell Interface',
        content: `The **Terminal** (Command Line Interface, or CLI) is a text-only interface to interact with the computer.

* **The Shell:** The command processor that reads text commands and tells the OS Kernel what to do (e.g., Bash, Zsh, PowerShell).
* **Environment:** Allows scripting, starting background server processes, and compiling code.
* **Core Commands:**
  * \`cd\` (Change Directory)
  * \`ls\` / \`dir\` (List files)
  * \`mkdir\` (Make Directory)
  * \`npm run dev\` (Boot dev runtime)`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'CLI Shells', example: 'PowerShell (Windows), Zsh (macOS), Bash (Linux)' },
          { context: 'Build Commands', example: 'npm install, git commit, npx next dev' },
          { context: 'SSH', example: 'Remote terminal logins to configure cloud machines (like AWS EC2).' },
        ],
      },
    ],
  },

  'client-server': {
    id: 'client-server',
    slug: 'client-server',
    title: 'Client-Server Model',
    subtitle: 'The web structure',
    stage: 0,
    module: 'networking',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['operating-systems'],
    tags: ['networking', 'client', 'server', 'frontend', 'backend'],
    graph: {
      requires: ['operating-systems'],
      relatedTo: ['internet', 'browser'],
      usedBy: ['browser'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Decentralized Data',
        content: `If you want to view a post on Instagram, you don't download Instagram's whole multi-petabyte database to your phone. 

Instead, you load content on demand. How do we divide software tasks between local display devices and centralized server warehouses?`,
        code: `// Client-Server Architecture:
// 1. Client (User Phone): "Requesting user profile info"
// 2. Server (Vercel Host): Validates user and reads database
// 3. Response: Server sends profile data back to Client.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Request and Response',
        content: `The **Client-Server model** is a network architecture that partitions tasks:

* **The Client (Frontend):** The user's device or web browser. It initiates requests and displays visual layouts.
* **The Server (Backend):** A remote computer running constantly, listening for client requests, performing business logic, querying databases, and returning data responses.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Web Protocols', example: 'HTTP/HTTPS verbs (GET, POST, PUT, DELETE)' },
          { context: 'Fetch API', example: 'fetch("https://api.github.com/users/kunal");' },
          { context: 'Datacenters', example: 'AWS, Vercel, and Google Cloud hosting server runtimes.' },
        ],
      },
    ],
  },

  internet: {
    id: 'internet',
    slug: 'internet',
    title: 'The Internet',
    subtitle: 'Network of networks',
    stage: 0,
    module: 'networking',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['client-server'],
    tags: ['networking', 'dns', 'ip-address'],
    graph: {
      requires: ['client-server'],
      relatedTo: ['client-server', 'browser'],
      usedBy: ['browser'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Global Cable Route',
        content: `How does a chat message sent from your phone in Mumbai travel to a database in Virginia, USA in less than 200 milliseconds? 

How do computers translate a word URL (like devlab.com) into a physical electronic destination address?`,
        code: `// Request Router Path:
// [Your PC] -> [Home Router] -> [DNS Server (IP Lookup)] ->
// [Undersea Fiber Optic Cable] -> [Server IP Address]`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'IP, Routers, and DNS',
        content: `The Internet is a global system of interconnected computer networks:

* **IP Address:** A unique numerical label assigned to each device on the network (e.g., \`142.250.190.46\`).
* **DNS (Domain Name System):** The phonebook of the internet. Translates domain names (like \`google.com\`) into numerical IP addresses.
* **Packets:** Data broken down into tiny chunks that travel across routes and reassemble at the target.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Localhost', example: '127.0.0.1 (IP referencing your local computer)' },
          { context: 'Domain Settings', example: 'Configuring A records and CNAMEs when mapping custom domains on Vercel.' },
          { context: 'Ping Command', example: 'ping devlab.com // Check route delay' },
        ],
      },
    ],
  },

  browser: {
    id: 'browser',
    slug: 'browser',
    title: 'The Web Browser',
    subtitle: 'Paints the pixels',
    stage: 0,
    module: 'networking',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 18,
    prerequisites: ['internet'],
    tags: ['rendering', 'frontend', 'dom'],
    graph: {
      requires: ['internet'],
      relatedTo: ['client-server'],
      usedBy: ['runtime', 'environment-variables'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Text to Interactive Interface',
        content: `A web server responds to requests by sending raw strings of text (HTML, CSS, and JavaScript). 

Reading this text manually is unusable for humans. We need a client-side program to parse this text, build elements, calculate layouts, and paint clickable pixels.`,
        code: `// Raw Server Response text:
// <html><body><button id="ok">Click</button></body></html>

// Browser Engine:
// 1. Parses HTML into DOM tree
// 2. Maps styling coordinates
// 3. Paints button onto screen`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The Rendering Pipeline',
        content: `A **Web Browser** is a client application that parses code and renders visual web pages:

Rendering phases:
* **DOM Creation:** Translating HTML tags into a Document Object Model tree structure.
* **Layout Calculation:** Computing the absolute size and position of every element in coordinates.
* **Painting:** Coloring the pixels on the display screen.
* **JavaScript Engine:** Executing code scripts to make pages interactive (Chrome V8, Safari JSC).`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Browsers', example: 'Chrome, Safari, Edge, Firefox, Brave' },
          { context: 'DevTools', example: 'Right-click -> Inspect element to view the DOM structure.' },
          { context: 'DOM Scripting', example: 'document.querySelector("#ok").addEventListener("click", ...)' },
        ],
      },
    ],
  },

  'environment-variables': {
    id: 'environment-variables',
    slug: 'environment-variables',
    title: 'Environment Variables',
    subtitle: 'Managing system secrets',
    stage: 0,
    module: 'networking',
    track: 'foundations',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['runtime'],
    tags: ['security', 'configuration', 'secrets'],
    graph: {
      requires: ['runtime'],
      relatedTo: ['runtime', 'operating-systems'],
      usedBy: ['variables'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Leaking Secrets',
        content: `Imagine your project integrates with a database. It requires a database password. 

If you write this password directly in your source code, the moment you upload it to GitHub, anyone can see your password and steal your data. How do we keep settings and secrets separate from the code?`,
        code: `// Unsafe:
let databasePassword = "secret_db_pass_123";

// Safe:
let databasePassword = process.env.DATABASE_PASSWORD;`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'OS Environment Space',
        content: `**Environment Variables** are dynamic key-value pairs stored on the operating system, outside of your source code.

* **Security:** Sensitive keys are never committed to version control.
* **Environment Isolation:** Allows you to change connection parameters depending on whether your code is running locally on your laptop or live in production, without changing code lines.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: '.env files', example: '.env.local containing local development configuration values.' },
          { context: 'Node Accessor', example: 'const port = process.env.PORT || 3000;' },
          { context: 'Deployment Platforms', example: 'Adding Environment Variables in the Vercel Project Settings panel.' },
        ],
      },
    ],
  },

  // ── STAGE 1: PROGRAMMING THINKING ──
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
    graph: {
      requires: [],
      relatedTo: ['constants', 'data-types', 'operators'],
      usedBy: ['functions', 'conditions', 'loops', 'arrays', 'objects'],
    },
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
    module: 'values-variables',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['variables'],
    tags: ['fundamentals', 'immutability', 'security'],
    graph: {
      requires: ['variables'],
      relatedTo: ['data-types'],
      usedBy: ['functions', 'modules'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Accidental Overwrite',
        content: `Imagine you're calculating invoice taxes. You define the tax rate as 18% (0.18). 

Deep inside a 1,000-line script, a developer makes a typo and accidentally re-assigns the tax rate variable to 0 or a negative number. The script runs successfully, but your company loses thousands of rupees in tax calculations! How do we lock a value forever?`,
        code: `// Vulnerable: variables can be changed anywhere
let taxRate = 0.18;
// ... lines later
taxRate = 0.08; // Typo! Breaks financial logic silently.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Constant Values',
        content: `A constant is a read-only variable that cannot be reassigned once set.

In JavaScript, we declare constants using the \`const\` keyword instead of \`let\`:
\`\`\`js
const TAX_RATE = 0.18;
TAX_RATE = 0.08; // TypeError: Assignment to constant variable.
\`\`\`

Using \`const\` by default creates safer, more predictable code because the computer guarantees the value remains unchanged.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Mathematics', example: 'const PI = 3.14159; const GRAVITY = 9.8;' },
          { context: 'Configurations', example: 'const PORT = 3000; const API_URL = "https://api.devlab.com";' },
          { context: 'React', example: 'const [status, setStatus] = useState("idle"); // State values are constants read-only.' },
        ],
      },
    ],
  },

  'data-types': {
    id: 'data-types',
    slug: 'data-types',
    title: 'Data Types',
    subtitle: 'The kinds of values that exist',
    stage: 1,
    module: 'values-variables',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['variables'],
    tags: ['fundamentals', 'data-types', 'coercion'],
    graph: {
      requires: ['variables'],
      relatedTo: ['operators', 'functions'],
      usedBy: ['arrays', 'objects'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Adding Words to Numbers',
        content: `In math, adding 5 and 5 gives 10. But what happens if you add a word to a number (e.g. 5 + "text")? Or multiply a word by a number? 

Without clear categories of data, the computer doesn't know whether to perform mathematical addition or textual combining.`,
        code: `// Confusing behavior without data types:
console.log(5 + 5);      // 10 (Mathematical sum)
console.log("5" + "5");  // "55" (Text combination / Concatenation)
console.log(5 + "5");    // "55" (Auto conversion)
console.log("five" * 5); // NaN (Not a Number error)`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Primitive Types',
        content: `A **Data Type** tells the computer how to interpret a value in memory.

Common Primitive Data Types:
* **Number:** Real numbers (e.g. \`42\`, \`3.14159\`).
* **String:** Text characters wrapped in quotes (e.g. \`"Kunal"\`, \`'DevLab'\`).
* **Boolean:** True/False values representing yes/no states.
* **Null & Undefined:** Specialized values denoting empty states or unassigned storage.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Databases', example: 'Specifying column types like INTEGER, VARCHAR(255), or BOOLEAN.' },
          { context: 'TypeScript', example: 'let name: string = "Kunal"; // Enforcing variable data type before running' },
          { context: 'JSON APIs', example: '{"id": 101, "active": true, "name": "Mechanical Keyboard"}' },
        ],
      },
    ],
  },

  operators: {
    id: 'operators',
    slug: 'operators',
    title: 'Operators',
    subtitle: 'Processing and comparing values',
    stage: 1,
    module: 'values-variables',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['variables', 'data-types'],
    tags: ['fundamentals', 'math', 'logic'],
    graph: {
      requires: ['variables', 'data-types'],
      relatedTo: ['conditions'],
      usedBy: ['conditions', 'if-else'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Calculator\'s Tools',
        content: `Variables let you store information, but software needs to act on it—applying discounts, checking login details, or verifying passwords. 

How do we perform calculations and comparison checks on values in code?`,
        code: `let basePrice = 999;
let tax = 180;
let total = basePrice + tax; // Arithmetic operator (+)

let isLoggedIn = true;
let hasSubscription = false;
let accessGranted = isLoggedIn && hasSubscription; // Logical operator (&&)`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Types of Operators',
        content: `Operators are symbols that tell the computer to perform mathematical or logical manipulations.

Core operators:
* **Arithmetic:** \`+\` (add), \`-\` (subtract), \`*\` (multiply), \`/\` (divide), and \`%\` (remainder).
* **Comparison:** \`===\` (strict equal), \`!==\` (not equal), \`>\` (greater than), \`<\` (less than).
* **Logical:** \`&&\` (AND - both true), \`||\` (OR - at least one true), \`!\` (NOT - reverse).`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Form Validation', example: 'const isValid = email.includes("@") && password.length >= 8;' },
          { context: 'Calculators', example: 'let discountAmount = price * (percent / 100);' },
          { context: 'Feature Flags', example: 'const showBetaFeature = isBetaUser || isAdmin;' },
        ],
      },
    ],
  },

  conditions: {
    id: 'conditions',
    slug: 'conditions',
    title: 'Conditions',
    subtitle: 'Decisions in code',
    stage: 1,
    module: 'control-flow',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['operators'],
    tags: ['control-flow', 'booleans', 'logic'],
    graph: {
      requires: ['operators'],
      relatedTo: ['if-else', 'switch'],
      usedBy: ['if-else', 'switch', 'while-loops'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Single-Track Programs',
        content: `Without decision points, code is a single track executing line-by-line from top to bottom. It behaves exactly the same way for every user.

How do we write code that dynamically changes its execution route depending on user actions or status?`,
        code: `// Single track code (runs for everyone):
let age = 15;
console.log("Welcome to the adult movie theater."); // Inappropriate!`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Boolean Decisions',
        content: `A **Condition** is an expression that evaluates to a Boolean value: \`true\` or \`false\`.

The program checks this boolean value. If it is \`true\`, the program executes a specific branch of code. If it is \`false\`, it skips it.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Authentication', example: 'let isAuthorized = token !== null;' },
          { context: 'E-commerce', example: 'let isFreeShipping = cartTotal > 500;' },
          { context: 'Game Dev', example: 'let isGameOver = playerHealth <= 0;' },
        ],
      },
    ],
  },

  'if-else': {
    id: 'if-else',
    slug: 'if-else',
    title: 'If-Else Statements',
    subtitle: 'Binary branching logic',
    stage: 1,
    module: 'control-flow',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['conditions'],
    tags: ['control-flow', 'branching', 'fundamentals'],
    graph: {
      requires: ['conditions'],
      relatedTo: ['switch'],
      usedBy: ['switch', 'while-loops', 'for-loops'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Fork in the Road',
        content: `How do we structure code to run Block A when a condition is met, and Block B when it is NOT, without executing both blocks?`,
        code: `let age = 16;
// How do we print "Access Granted" only for 18+ and "Access Denied" for others?`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The If-Else Structure',
        content: `An **If-Else statement** directs traffic based on a condition:

\`\`\`js
if (age >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
\`\`\`

If the condition inside \`( )\` is true, the code inside the first \`{ }\` runs. Otherwise, the code inside the \`else { }\` block runs.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Websites', example: 'if (isDarkMode) { applyDarkTheme() } else { applyLightTheme() }' },
          { context: 'React render', example: 'if (isLoading) return <Spinner />; else return <DataList />;' },
          { context: 'Payment APIs', example: 'if (paymentSuccess) { emailReceipt() } else { showPaymentFailedError() }' },
        ],
      },
    ],
  },

  switch: {
    id: 'switch',
    slug: 'switch',
    title: 'Switch Statements',
    subtitle: 'Multi-branch selections',
    stage: 1,
    module: 'control-flow',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['if-else'],
    tags: ['control-flow', 'matching'],
    graph: {
      requires: ['if-else'],
      relatedTo: ['if-else'],
      usedBy: [],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Infinite Else-If Chain',
        content: `If you have to match a single variable against 8 different possibilities (like user roles: 'admin', 'editor', 'author', 'viewer', etc.), writing \`else if\` 8 times becomes repetitive and messy. 

How can we write this multi-value matching cleanly?`,
        code: `// Hard to read:
if (role === 'admin') { ... }
else if (role === 'editor') { ... }
else if (role === 'viewer') { ... }
else { ... }`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Switch Matching',
        content: `A **Switch** statement matches the value of an expression to a specific \`case\` block:

\`\`\`js
switch (role) {
  case 'admin':
    showAdminSettings();
    break;
  case 'editor':
    showEditorControls();
    break;
  default:
    showStandardView();
}
\`\`\`

* **break:** Stops execution from falling through into the next case.
* **default:** Fallback clause executed if no case matches.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Redux Reducers', example: 'switch (action.type) { case "INCREMENT": return state + 1; ... }' },
          { context: 'Game Controls', example: 'switch (keyEvent.code) { case "KeyW": moveUp(); break; ... }' },
          { context: 'Menu Routers', example: 'switch (pagePath) { case "/dashboard": renderDashboard(); break; ... }' },
        ],
      },
    ],
  },

  'while-loops': {
    id: 'while-loops',
    slug: 'while-loops',
    title: 'While Loops',
    subtitle: 'Conditional repetition',
    stage: 1,
    module: 'control-flow',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 18,
    prerequisites: ['conditions'],
    tags: ['loops', 'repetition', 'iteration'],
    graph: {
      requires: ['conditions'],
      relatedTo: ['for-loops'],
      usedBy: ['for-loops'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Unknown Iteration Count',
        content: `Imagine you're building a system that pulls job updates from a server. You must keep requesting updates until a job completes. 

Since you don't know if the job will finish in 1 second or 5 minutes, how do we write a loop that repeats dynamically until the job status changes?`,
        code: `// Without loops, you would have to duplicate checks:
checkJob();
checkJob();
// Hardcoded checks will eventually stop. We need automatic repetition.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The While Loop',
        content: `A **While loop** continuously executes its code block as long as its condition remains \`true\`:

\`\`\`js
let isRunning = true;
while (isRunning) {
  if (checkJobStatus() === 'done') {
    isRunning = false; // Exits the loop
  }
}
\`\`\`

**Crucial Warning:** If the loop condition never becomes false, the loop runs forever, creating an **Infinite Loop** that freezes the processor.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Game loops', example: 'while (gameIsActive) { updatePhysics(); renderFrame(); }' },
          { context: 'Data streams', example: 'while (stream.hasMoreData()) { processChunk(stream.read()); }' },
          { context: 'Worker Processes', example: 'Background processes running indefinitely to process tasks from queues.' },
        ],
      },
    ],
  },

  'for-loops': {
    id: 'for-loops',
    slug: 'for-loops',
    title: 'For Loops',
    subtitle: 'Counter-based loops',
    stage: 1,
    module: 'control-flow',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['while-loops'],
    tags: ['loops', 'iteration', 'arrays'],
    graph: {
      requires: ['while-loops'],
      relatedTo: ['while-loops'],
      usedBy: ['functions'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Printing Lists',
        content: `If you want to print numbers from 1 to 100, manually writing \`console.log\` 100 times is absurd. 

We need a loop structure that counts for us, keeping track of an index and terminating automatically when it reaches the end.`,
        code: `// Bad:
console.log(1);
console.log(2);
// ... up to 100`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The For Loop structure',
        content: `A **For loop** organizes counter initialization, loop condition, and increment step inside a single line:

\`\`\`js
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
\`\`\`

Execution flow:
1. **Initialization (\`let i = 1\`):** Runs once. Sets up the counter.
2. **Condition (\`i <= 100\`):** Checked before each loop. If true, runs loop body; if false, exits.
3. **Increment (\`i++\`):** Runs at the end of each iteration to update the counter.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Array Indexing', example: 'for (let i = 0; i < products.length; i++) { render(products[i]); }' },
          { context: 'Batch updates', example: 'Iterating over selected items to execute batch actions.' },
          { context: 'Algorithms', example: 'Sorting or searching items in lists.' },
        ],
      },
    ],
  },

  functions: {
    id: 'functions',
    slug: 'functions',
    title: 'Functions',
    subtitle: 'Reusable logic blocks',
    stage: 1,
    module: 'functions',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 25,
    prerequisites: ['for-loops'],
    tags: ['dry-code', 'modularity', 'fundamentals'],
    graph: {
      requires: ['for-loops'],
      relatedTo: ['parameters', 'return-values'],
      usedBy: ['parameters', 'return-values', 'scope'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Duplicate Logic',
        content: `Imagine writing checkout logic that calculates sales tax. If you duplicate the 10-line calculation code on the cart page, confirmation page, and email receipts, changing the tax rate later means editing code in 3 files.

What happens if you miss one? Your system calculates different prices, causing accounting errors. How do we write a block of code once and share it everywhere?`,
        code: `// Duplicate code on cart page:
let total1 = price1 + (price1 * 0.18);

// Duplicate code on receipts:
let total2 = price2 + (price2 * 0.18);`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Declaring and Invoking',
        content: `A **Function** is a packaged block of code designed to perform a particular task.

To use a function, you must:
1. **Declare it:** Define the name and code.
2. **Invoke (Call) it:** Execute the code by adding parentheses \`()\` to its name.

\`\`\`js
// Declaration:
function sayHello() {
  console.log("Hello, Welcome to DevLab!");
}

// Invocation:
sayHello(); // Output: Hello, Welcome to DevLab!
\`\`\``,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'React Components', example: 'function Button() { return <button>Click</button> }' },
          { context: 'Browser Event Handlers', example: 'window.addEventListener("scroll", handleScroll)' },
          { context: 'Standard Libraries', example: 'Math.random(), console.log()' },
        ],
      },
    ],
  },

  parameters: {
    id: 'parameters',
    slug: 'parameters',
    title: 'Parameters & Arguments',
    subtitle: 'Function inputs',
    stage: 1,
    module: 'functions',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['functions'],
    tags: ['functions', 'inputs'],
    graph: {
      requires: ['functions'],
      relatedTo: ['return-values', 'scope'],
      usedBy: ['return-values'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Rigid Subroutines',
        content: `A function is great for code reuse, but if it behaves the exact same way every time it runs, it lacks flexibility. 

How can we feed variables into our functions so they can run calculations on different data dynamic inputs?`,
        code: `function printInvoice() {
  // Hardcoded to only print one fixed name:
  console.log("Customer: Kunal Bose");
}`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Inputs: Parameters vs Arguments',
        content: `Functions accept inputs that alter their behavior:

* **Parameters:** The placeholder variables defined in the function signature.
* **Arguments:** The actual values you pass into the function when invoking it.

\`\`\`js
// 'name' is a parameter (placeholder)
function greetUser(name) {
  console.log("Hello, " + name);
}

// "Kunal" is the argument (actual value)
greetUser("Kunal"); 
\`\`\``,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Next.js Routing', example: 'export default async function Page({ params }) { ... }' },
          { context: 'Array sorting', example: 'products.sort((a, b) => a.price - b.price);' },
          { context: 'React Props', example: '<UserProfile name="Kunal" email="kunal@..." />' },
        ],
      },
    ],
  },

  'return-values': {
    id: 'return-values',
    slug: 'return-values',
    title: 'Return Values',
    subtitle: 'Function outputs',
    stage: 1,
    module: 'functions',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['parameters'],
    tags: ['functions', 'outputs'],
    graph: {
      requires: ['parameters'],
      relatedTo: ['functions', 'scope'],
      usedBy: ['scope'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Isolated Result',
        content: `A function can run calculations and print them to the terminal. But what if the rest of your application needs the result of that calculation to execute another step? 

How does a function send its output back to the line of code that called it?`,
        code: `function double(number) {
  console.log(number * 2); // Prints to screen, but sends nothing back.
}

let result = double(5);
console.log(result); // Output: undefined!`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The Return Statement',
        content: `To pass a value back to the caller, use the \`return\` keyword:

\`\`\`js
function double(number) {
  return number * 2; // Hands value back and exits function
}

let result = double(5);
console.log(result); // Output: 10
\`\`\`

* A \`return\` statement immediately terminates the function. Any code written below it will be ignored.
* If a function does not have a \`return\`, it automatically returns \`undefined\`.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'APIs / Database', example: 'function getUser(id) { return db.query(id); }' },
          { context: 'Custom Hooks', example: 'const { data } = useFetch("/api/status");' },
          { context: 'Math Libraries', example: 'let max = Math.max(10, 20); // returns 20' },
        ],
      },
    ],
  },

  scope: {
    id: 'scope',
    slug: 'scope',
    title: 'Scope',
    subtitle: 'Variable boundaries',
    stage: 1,
    module: 'functions',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 22,
    prerequisites: ['return-values'],
    tags: ['scope', 'closures', 'security'],
    graph: {
      requires: ['return-values'],
      relatedTo: ['functions'],
      usedBy: ['error-types'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Namespace Collisions',
        content: `If every variable in your application was globally editable, different functions would accidentally overwrite each other's variables, leading to erratic, untraceable bugs. 

How does a programming language isolate variable names inside specific blocks?`,
        code: `let currentTab = "home";

function openProfile() {
  currentTab = "profile"; // Overwrites the global currentTab!
}`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Global, Local, and Block Scope',
        content: `**Scope** controls the visibility and lifetime of variables:

* **Global Scope:** Variables declared outside any function. Accessible from anywhere in your file.
* **Local (Function) Scope:** Variables declared inside a function. Only accessible *within* that function.
* **Block Scope:** Variables declared using \`let\` or \`const\` inside curly braces \`{ }\` (e.g. if blocks or loops). Only accessible inside those braces.

\`\`\`js
let globalVar = "visible everywhere";

function testScope() {
  let localVar = "only visible in testScope";
  if (true) {
    let blockVar = "only visible in this if block";
  }
}
\`\`\``,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'React State Hooks', example: 'State variables are scoped locally to components, preventing leakage.' },
          { context: 'Security Secrets', example: 'Scoping API keys to environment blocks to prevent leaks.' },
          { context: 'JavaScript Closures', example: 'A function remembering its outer lexical scope even when executed outside it.' },
        ],
      },
    ],
  },

  'error-types': {
    id: 'error-types',
    slug: 'error-types',
    title: 'Error Types',
    subtitle: 'Anatomy of bugs',
    stage: 1,
    module: 'errors-debugging',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['scope'],
    tags: ['debugging', 'errors', 'exceptions'],
    graph: {
      requires: ['scope'],
      relatedTo: ['debugging-mindset', 'reading-errors'],
      usedBy: ['debugging-mindset', 'reading-errors'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Broken Application',
        content: `All developers write bugs. However, bugs are not uniform. Some bugs prevent code from compiling at all, others crash the program in real-time, and some simply output wrong calculations. 

We must categorize bugs to know how to resolve them.`,
        code: `// Bug 1: Typo in keyword
letx a = 5;

// Bug 2: Accessing undefined properties
let user = null;
console.log(user.name);`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Syntax, Runtime, and Logic Errors',
        content: `Programming errors are classified into three types:

* **Syntax Errors:** Grammatical syntax violations (e.g., missing bracket \`}\`, spelling keyword typos). The compiler/interpreter rejects the file, and code won't execute at all.
* **Runtime Errors (Exceptions):** The syntax is perfect, but the code hits an impossible operation while running (e.g., calling functions on \`null\`, dividing by zero in some languages). The program crashes.
* **Logic Errors:** The code compiles and runs without crashing, but produces incorrect results due to flawed algorithms (e.g., adding instead of subtracting discount).`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Error Handling', example: 'try { runCode() } catch (err) { handleRuntimeError(err) }' },
          { context: 'Rust Compiler', example: 'Extremely strict compiler checks catching syntax/type errors before runtime.' },
          { context: 'Unit Testing', example: 'Asserting outputs to catch hidden Logic Errors.' },
        ],
      },
    ],
  },

  'debugging-mindset': {
    id: 'debugging-mindset',
    slug: 'debugging-mindset',
    title: 'Debugging Mindset',
    subtitle: 'Approaching bugs scientifically',
    stage: 1,
    module: 'errors-debugging',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['error-types'],
    tags: ['debugging', 'philosophy'],
    graph: {
      requires: ['error-types'],
      relatedTo: ['error-types', 'reading-errors'],
      usedBy: ['reading-errors'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Panic Debugging',
        content: `When code breaks, many developers panic and start randomly modifying lines hoping it will solve the issue. This usually introduces secondary bugs. 

How can we approach debugging logically and scientifically?`,
        code: `// Guessing and editing random code lines...
// vs.
// Reproducing the bug, writing down a hypothesis, and testing it.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The Scientific Method',
        content: `Scientific debugging follows a structured process:

1. **Reproduce:** Confirm consistent steps to trigger the bug.
2. **Isolate:** Find the exact file, class, or function where the failure occurs.
3. **Hypothesize:** Formulate a theory of *why* the bug is occurring.
4. **Instrument & Test:** Add console logs, check variables, or run breakpoints to test the hypothesis.
5. **Fix & Refactor:** Resolve the issue and test other systems to verify nothing else broke.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Rubber Duck Debugging', example: 'Explaining code line-by-line to a silent object, forcing your brain to see the bug.' },
          { context: 'Git Bisect', example: 'Using version control binary search to locate the exact commit that introduced a bug.' },
          { context: 'Log Levels', example: 'Using debug, info, warn, and error levels to monitor live server conditions.' },
        ],
      },
    ],
  },

  'reading-errors': {
    id: 'reading-errors',
    slug: 'reading-errors',
    title: 'Reading Errors',
    subtitle: 'Parsing stack traces',
    stage: 1,
    module: 'errors-debugging',
    track: 'programming-thinking',
    difficulty: 'beginner',
    estimatedMinutes: 18,
    prerequisites: ['debugging-mindset'],
    tags: ['debugging', 'logs', 'stack-trace'],
    graph: {
      requires: ['debugging-mindset'],
      relatedTo: ['error-types', 'debugging-mindset'],
      usedBy: [],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'The Terrifying Stack Trace',
        content: `When a program crashes, the terminal outputs a large, red, intimidating block of text. Most beginner developers close their eyes, scroll past it, and look for help. 

How do we decipher this traceback to locate the error in 3 seconds?`,
        code: `TypeError: Cannot read properties of null (reading 'split')
    at processData (C:\\src\\data.js:24:18)
    at Object.run (C:\\src\\main.js:12:3)
    at Module._compile (node:internal/modules/cjs/loader:1369:14)`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Anatomy of a Stack Trace',
        content: `A **Stack Trace** is a list of active function calls showing the path your program took up to the moment of the crash. 

It is ordered from newest to oldest:
* **Error Name & Message:** The top line (e.g., \`TypeError: Cannot read properties of null...\`). Tells you *what* went wrong.
* **The Call Stack:** The lines below, starting with \`at\`. Shows where.
* **Exact Coordinates:** The first stack line points directly to the file, line number, and character column of the crash (e.g., \`data.js:24:18\` -> line 24, character column 18).`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'React Error Boundary', example: 'Displays stack traces in development overlays for UI developers.' },
          { context: 'Node.js crash log', example: 'Error output shown in terminal logs or production log monitors (Datadog).' },
          { context: 'Browser Console', example: 'Red trace logs in Developer Tools (F12) showing failed JavaScript executions.' },
        ],
      },
    ],
  },

  strings: {
    id: 'strings',
    slug: 'strings',
    title: 'Strings',
    subtitle: 'Handling text data',
    stage: 2,
    module: 'primitives',
    track: 'data',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['data-types'],
    tags: ['data', 'text', 'types'],
    graph: {
      requires: ['data-types'],
      relatedTo: ['numbers', 'booleans'],
      usedBy: ['arrays', 'objects'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Textual Representation',
        content: `Human communication happens in words, sentences, and paragraphs, but computers represent everything as numbers. 

How do we store, format, and manipulate alphanumeric text in code safely without breaking execution?`,
        code: `// String formatting challenges:
let first = "Kunal";
let last = 'Bose';
// How do we combine them with a space and exclamation mark dynamically?`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Characters and Templates',
        content: `A **String** is a sequence of characters wrapped in quotes. In JavaScript, strings are immutable.

Core patterns:
* **Concatenation:** \`first + " " + last\`
* **Template Literals:** \`\`Hello, \${first} \${last}!\`\` (using backticks)
* **Properties & Methods:**
  * \`.length\` - Get character count.
  * \`.toUpperCase()\` / \`.toLowerCase()\` - Change capitalization.
  * \`.includes(substring)\` - Check if text exists inside.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Database Queries', example: 'SELECT * FROM users WHERE email = "kunal@...";' },
          { context: 'Localization', example: 't("welcome_message", { name: user.name })' },
          { context: 'Input Forms', example: 'const emailVal = emailInput.value.trim().toLowerCase();' },
        ],
      },
    ],
  },

  numbers: {
    id: 'numbers',
    slug: 'numbers',
    title: 'Numbers',
    subtitle: 'Calculations & Float Precision',
    stage: 2,
    module: 'primitives',
    track: 'data',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['data-types'],
    tags: ['data', 'math', 'types'],
    graph: {
      requires: ['data-types'],
      relatedTo: ['strings'],
      usedBy: ['arrays'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Precision Limits',
        content: `Computers count using binary (base-2), but humans write numbers in decimal (base-10). 

Because of this mismatch, some fractions (like 0.1 or 0.2) cannot be represented exactly in binary, leading to subtle mathematical bugs in calculations. How do we handle this?`,
        code: `// The floating point bug:
console.log(0.1 + 0.2); 
// Outputs: 0.30000000000000004 instead of 0.3!`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Numbers and Math Library',
        content: `In JavaScript, all numbers are double-precision 64-bit binary format (IEEE 754 floats).

* **Math Object:** Provides utilities like \`Math.round()\`, \`Math.floor()\` (round down), \`Math.ceil()\` (round up), and \`Math.random()\` (0 to 1 float).
* **NaN (Not a Number):** A special numeric value indicating a failed math operation (like \`"text" / 2\`).`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'E-commerce Payments', example: 'Storing prices in cents (e.g., ₹2999 instead of ₹29.99) to avoid floats.' },
          { context: 'Coordinates', example: 'const angle = Math.atan2(y, x) * (180 / Math.PI);' },
          { context: 'Formatting Currency', example: 'price.toLocaleString("en-IN", { style: "currency", currency: "INR" })' },
        ],
      },
    ],
  },

  booleans: {
    id: 'booleans',
    slug: 'booleans',
    title: 'Booleans',
    subtitle: 'Binary states',
    stage: 2,
    module: 'primitives',
    track: 'data',
    difficulty: 'beginner',
    estimatedMinutes: 10,
    prerequisites: ['data-types'],
    tags: ['data', 'logic', 'types'],
    graph: {
      requires: ['data-types'],
      relatedTo: ['conditions'],
      usedBy: ['conditions', 'if-else'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Representing Switches',
        content: `Software is full of binary choices—active or inactive, dark or light mode, checked or unchecked. 

Storing these states as strings (like \`"yes"\` or \`"no"\`) uses extra memory and is highly prone to typos. We need an efficient, dedicated boolean type.`,
        code: `let darkTheme = "activated"; // Typo prone: is it "active", "on", or "yes"?
let isDarkMode = true;       // Standard, safe binary choice`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'True and False States',
        content: `A **Boolean** represents exactly one of two values: \`true\` or \`false\`.

Booleans are named after George Boole and form the foundation of computer science logic gates. All comparison operators (\`===\`, \`>\`, \`<\`) produce booleans.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'UI Elements', example: 'const [isOpen, setIsOpen] = useState(false);' },
          { context: 'Feature Flags', example: 'if (features.enablePaymentGateways) { loadStripe() }' },
          { context: 'Database Tables', example: 'is_verified BOOLEAN DEFAULT FALSE' },
        ],
      },
    ],
  },

  'null-undefined': {
    id: 'null-undefined',
    slug: 'null-undefined',
    title: 'Null & Undefined',
    subtitle: 'Representing emptiness',
    stage: 2,
    module: 'primitives',
    track: 'data',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    prerequisites: ['data-types'],
    tags: ['data', 'emptiness', 'types'],
    graph: {
      requires: ['data-types'],
      relatedTo: ['booleans'],
      usedBy: ['objects'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Absent vs Empty Data',
        content: `How do we represent "nothing" in code? 

There is a difference between a variable that exists but hasn't been set yet, and a variable that we intentionally set to be empty. How does a language represent this difference?`,
        code: `let userProfile; // Declared but not assigned. What is its value?
let selectedItem = null; // Assigned to represent "no item selected".`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Absent vs Intentional',
        content: `JavaScript has two separate values for emptiness:

* **undefined:** The variable was declared, but has no assigned value. It's the default value of empty variables.
* **null:** An assigned value representing the intentional absence of any object value. It must be manually set.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'API Responses', example: '{"id": 102, "middleName": null} // Explicitly empty' },
          { context: 'Optional Fields', example: 'function greet(middleName = undefined) { ... }' },
          { context: 'Database Queries', example: 'SELECT * FROM users WHERE deleted_at IS NULL;' },
        ],
      },
    ],
  },

  arrays: {
    id: 'arrays',
    slug: 'arrays',
    title: 'Arrays',
    subtitle: 'Ordered lists',
    stage: 2,
    module: 'collections',
    track: 'data',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['strings', 'numbers'],
    tags: ['collections', 'lists', 'iteration'],
    graph: {
      requires: ['strings', 'numbers'],
      relatedTo: ['objects'],
      usedBy: ['nested-structures', 'searching', 'filtering'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Variable Clutter',
        content: `If you have a shopping cart holding 10 products, declaring variables like \`item1\`, \`item2\`, \`item3\`, etc., is chaotic. 

We need a single, ordered list that dynamically scales as users add or remove items.`,
        code: `let item1 = "Mechanical Keyboard";
let item2 = "Wireless Mouse";
// Hard to loop through or count!`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Indexed Lists',
        content: `An **Array** is a data structure containing an ordered list of values. Items are indexed starting at \`0\`.

Key operations:
* **Access:** \`items[0]\` gets the first item.
* **Length:** \`items.length\` gets total count.
* **Add/Remove (End):** \`.push(value)\` adds to end; \`.pop()\` removes from end.
* **Add/Remove (Start):** \`.unshift(value)\` adds to start; \`.shift()\` removes from start.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Product Feeds', example: 'const products = ["Keyboard", "Mouse", "Monitor"];' },
          { context: 'React Rendering', example: 'const listItems = items.map(item => <li>{item}</li>);' },
          { context: 'Todo Apps', example: 'const tasks = ["Buy Milk", "Clean Room", "Learn JS"];' },
        ],
      },
    ],
  },

  objects: {
    id: 'objects',
    slug: 'objects',
    title: 'Objects',
    subtitle: 'Key-Value collections',
    stage: 2,
    module: 'collections',
    track: 'data',
    difficulty: 'beginner',
    estimatedMinutes: 20,
    prerequisites: ['arrays'],
    tags: ['collections', 'key-value', 'maps'],
    graph: {
      requires: ['arrays'],
      relatedTo: ['arrays'],
      usedBy: ['nested-structures', 'searching', 'filtering'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Describing Entities',
        content: `An array is perfect for lists of identical types (like names), but poor for describing a single complex object. 

If we store user details (name, email, age) in an array, index 0 is "Kunal", index 1 is "kunal@...", etc. If the order changes, our program breaks. How do we name property fields?`,
        code: `let user = ["Kunal Bose", "kunal@...", 25];
// Cryptic! What does index 2 represent? Years of experience or age?`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Properties & Dictionaries',
        content: `An **Object** stores data as key-value pairs (properties):

\`\`\`js
let user = {
  name: "Kunal Bose",
  email: "kunal@...",
  age: 25
};
\`\`\`

* **Access (Dot Notation):** \`user.name\` -> "Kunal Bose"
* **Access (Bracket Notation):** \`user["email"]\` -> "kunal@..." (useful when keys are variables).
* **Adding properties:** \`user.isAdmin = true;\``,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'JSON Payloads', example: '{"id": 12, "name": "Desk Mat", "instock": true}' },
          { context: 'Component State', example: 'const [profile, setProfile] = useState({ name: "", bio: "" });' },
          { context: 'Configs', example: 'module.exports = { theme: "dark", plugins: [] };' },
        ],
      },
    ],
  },

  'nested-structures': {
    id: 'nested-structures',
    slug: 'nested-structures',
    title: 'Nested Structures',
    subtitle: 'Hierarchical data schemas',
    stage: 2,
    module: 'collections',
    track: 'data',
    difficulty: 'intermediate',
    estimatedMinutes: 22,
    prerequisites: ['arrays', 'objects'],
    tags: ['collections', 'nesting', 'schemas'],
    graph: {
      requires: ['arrays', 'objects'],
      relatedTo: ['searching', 'filtering'],
      usedBy: ['searching', 'filtering'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Modeling Complex Realities',
        content: `Real-world data is rarely flat. A user has a billing address (which has street, city, pin), and a history of purchases (where each purchase has items, timestamps, prices). 

How do we compose arrays and objects to match hierarchical tree patterns?`,
        code: `// Flat structures are messy:
let userStreet = "12 Main St";
let userCity = "Mumbai";
// We need nesting!`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Navigating Nesting',
        content: `By nesting arrays inside objects, and objects inside arrays, you form complex JSON-like trees:

\`\`\`js
let user = {
  name: "Kunal",
  orders: [
    { id: 451, items: ["Keyboard", "Cable"] }
  ]
};
\`\`\`

To access deep fields, chain dot and bracket lookups:
\`\`\`js
let firstItem = user.orders[0].items[0]; // "Keyboard"
\`\`\``,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Social Graphs', example: 'user.friends[0].posts[3].comments[1]' },
          { context: 'MongoDB Documents', example: 'Documents stored as nested BSON objects.' },
          { context: 'Auth Tokens', example: 'jwtToken.payload.user.roles[0]' },
        ],
      },
    ],
  },

  searching: {
    id: 'searching',
    slug: 'searching',
    title: 'Searching Data',
    subtitle: 'Locating items in collections',
    stage: 2,
    module: 'data-ops',
    track: 'data',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    prerequisites: ['nested-structures'],
    tags: ['data-ops', 'search', 'algorithms'],
    graph: {
      requires: ['nested-structures'],
      relatedTo: ['filtering', 'sorting'],
      usedBy: ['filtering'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Finding the Record',
        content: `Given an array of 5,000 customers, how do we write a program to search for a customer named "Kunal Bose" and return their account details? 

How do we query arrays efficiently in JavaScript?`,
        code: `let customers = [
  { name: "Alice", id: 1 },
  { name: "Kunal Bose", id: 2 }
];
// How do we locate the object matching the name "Kunal Bose"?`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Search Methods',
        content: `JavaScript arrays provide built-in query methods that take a callback function:

* **.find():** Returns the value of the *first* element that satisfies the testing function.
* **.findIndex():** Returns the *index* of the first matching element, or \`-1\` if not found.
* **.includes(value):** Returns \`true\` or \`false\` if a simple primitive value exists.

\`\`\`js
let match = customers.find(c => c.name === "Kunal Bose");
\`\`\``,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Search Autocomplete', example: 'searchList.find(item => item.slug === inputSlug)' },
          { context: 'State Updates', example: 'const index = cart.findIndex(item => item.id === itemId);' },
          { context: 'Auth Checkers', example: 'const allowed = userRoles.includes("admin");' },
        ],
      },
    ],
  },

  filtering: {
    id: 'filtering',
    slug: 'filtering',
    title: 'Filtering Data',
    subtitle: 'Extracting subsets',
    stage: 2,
    module: 'data-ops',
    track: 'data',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    prerequisites: ['searching'],
    tags: ['data-ops', 'filter', 'arrays'],
    graph: {
      requires: ['searching'],
      relatedTo: ['searching', 'transformation'],
      usedBy: ['transformation'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Reducing Noise',
        content: `When viewing products in an online store, users expect to narrow the feed to see only items under ₹1000 or only clothing. 

How do we screen a large array and return a new array containing only elements that match a dynamic criteria?`,
        code: `let products = [
  { name: "Keyboard", price: 4500 },
  { name: "Cable", price: 500 }
];
// Keep only items under ₹1000.`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'The Filter Operation',
        content: `The **.filter()** method creates a new array filled with elements that pass a test function:

\`\`\`js
let cheapProducts = products.filter(p => p.price < 1000);
// Result: [{ name: "Cable", price: 500 }]
\`\`\`

* **Immutability:** \`.filter()\` does not alter the original array. It returns a brand-new array.
* If no items match, it returns an empty array \`[]\`.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'E-commerce filters', example: 'items.filter(item => item.category === "electronics")' },
          { context: 'Removing Todo items', example: 'todos.filter(todo => todo.id !== deletedId)' },
          { context: 'Search results', example: 'users.filter(u => u.name.includes(searchQuery))' },
        ],
      },
    ],
  },

  sorting: {
    id: 'sorting',
    slug: 'sorting',
    title: 'Sorting Data',
    subtitle: 'Ordering collections',
    stage: 2,
    module: 'data-ops',
    track: 'data',
    difficulty: 'intermediate',
    estimatedMinutes: 20,
    prerequisites: ['searching'],
    tags: ['data-ops', 'sort', 'algorithms'],
    graph: {
      requires: ['searching'],
      relatedTo: ['filtering'],
      usedBy: ['transformation'],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Sorting Errors',
        content: `By default, JavaScript sorts items alphabetically. If you sort numbers without a guide, \`10\` is placed before \`2\` because "1" is smaller than "2" in alphabetical sorting! 

How do we sort lists of numbers or object properties correctly?`,
        code: `let prices = [20, 100, 2];
prices.sort();
console.log(prices); // Output: [100, 2, 20] - Wrong!`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Compare Functions',
        content: `To sort numbers or complex objects, you must pass a **compare function** to \`.sort()\`:

\`\`\`js
// Ascending order:
prices.sort((a, b) => a - b); // Result: [2, 20, 100]

// Descending order:
prices.sort((a, b) => b - a); // Result: [100, 20, 2]
\`\`\`

How it works:
* If \`a - b\` returns negative, \`a\` is sorted before \`b\`.
* If positive, \`b\` is sorted before \`a\`.
* If zero, order remains unchanged.`,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'Sort by Price', example: 'items.sort((a, b) => a.price - b.price);' },
          { context: 'Sort alphabetically', example: 'names.sort((a, b) => a.localeCompare(b));' },
          { context: 'High scores', example: 'players.sort((a, b) => b.score - a.score);' },
        ],
      },
    ],
  },

  transformation: {
    id: 'transformation',
    slug: 'transformation',
    title: 'Data Transformation',
    subtitle: 'Mapping and Reducing collections',
    stage: 2,
    module: 'data-ops',
    track: 'data',
    difficulty: 'intermediate',
    estimatedMinutes: 25,
    prerequisites: ['filtering', 'sorting'],
    tags: ['data-ops', 'map', 'reduce'],
    graph: {
      requires: ['filtering', 'sorting'],
      relatedTo: ['filtering'],
      usedBy: [],
    },
    steps: [
      {
        id: 'problem',
        type: 'problem',
        title: 'Reshaping Data',
        content: `Often, the shape of the data retrieved from an API or database does not match what the user interface requires. 

For example, we might receive an array of user objects containing names and emails, but we only need a flat array of email strings to send a newsletter. How do we transform collections?`,
        code: `let users = [
  { name: "Kunal", email: "kunal@..." },
  { name: "Alice", email: "alice@..." }
];
// Transform to: ["kunal@...", "alice@..."]`,
      },
      {
        id: 'explain',
        type: 'explanation',
        title: 'Map & Reduce',
        content: `Two core transformation operations:

* **.map():** Creates a new array populated with the results of calling a provided function on every element.
  \`\`\`js
  let emails = users.map(u => u.email);
  \`\`\`
* **.reduce():** Executes a reducer function on each element, resulting in a single output value (e.g. summing numbers).
  \`\`\`js
  let totalSpent = orders.reduce((sum, order) => sum + order.price, 0);
  \`\`\``,
      },
      {
        id: 'connect',
        type: 'connections',
        title: 'Where You\'ll See This',
        connections: [
          { context: 'React Rendering', example: 'items.map(item => <ItemCard key={item.id} data={item} />)' },
          { context: 'Shopping Cart Sum', example: 'cart.reduce((total, item) => total + item.price, 0)' },
          { context: 'Normalizing API Keys', example: 'apiList.map(api => api.key.trim())' },
        ],
      },
    ],
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
