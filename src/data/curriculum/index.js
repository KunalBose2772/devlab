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
