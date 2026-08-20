# Technical Architecture Specification
## Interactive Developer Learning Lab

**Version:** 1.0  
**Status:** Active  
**Last Updated:** 2026-08-20

---

## 1. Project Structure

```
learn/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.js                 # Root layout + metadata
│   │   ├── page.js                   # Landing page
│   │   ├── globals.css               # Design system
│   │   │
│   │   ├── learn/                    # Learning routes
│   │   │   ├── page.js               # Track listing
│   │   │   └── [track]/
│   │   │       ├── page.js           # Track detail
│   │   │       └── [concept]/
│   │   │           └── page.js       # Concept + ConceptEngine
│   │   │
│   │   ├── lab/
│   │   │   └── [labId]/
│   │   │       └── page.js           # Standalone lab
│   │   │
│   │   ├── challenge/
│   │   │   └── [challengeId]/
│   │   │       └── page.js           # Challenge + editor
│   │   │
│   │   ├── dashboard/
│   │   │   └── page.js               # Learner dashboard
│   │   │
│   │   ├── login/                    # Auth (Phase 2)
│   │   └── register/                 # Auth (Phase 2)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js             # Responsive navigation
│   │   │   └── Navbar.module.css
│   │   │
│   │   ├── learn/
│   │   │   ├── ConceptEngine.js      # Step-by-step concept viewer
│   │   │   ├── ConceptEngine.module.css
│   │   │   ├── VariableLab.js        # Monaco editor lab
│   │   │   └── VariableLab.module.css
│   │   │
│   │   ├── lab/                      # Generic lab components (Phase 3)
│   │   └── ui/                       # Reusable UI primitives (Phase 2)
│   │
│   ├── data/
│   │   └── curriculum/
│   │       └── index.js              # All content as structured data
│   │
│   └── lib/                          # Utilities (Phase 2)
│
├── docs/                             # Architecture documentation
│   ├── architecture.md               # This file
│   ├── curriculum.md                 # Content specification
│   ├── database.md                   # Schema
│   └── security.md                   # Security architecture
│
└── public/                           # Static assets
```

---

## 2. Technology Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Framework | Next.js 16 App Router | Server Components, routing, streaming |
| Language | JavaScript (ES2024) | Accessible, matches learning content |
| CSS | CSS Modules + Custom Properties | Scoped, no dependencies, full control |
| Editor | Monaco Editor (`@monaco-editor/react`) | Same engine as VS Code |
| Icons | Lucide React | Consistent, tree-shakeable |
| Fonts | Inter (body), Outfit (display), JetBrains Mono (code) | Google Fonts |

**Phase 2 additions:**
- Database: PostgreSQL via Supabase
- Auth: NextAuth.js or Supabase Auth
- Validation: Zod
- ORM: Prisma

---

## 3. JavaScript Conventions

```js
// ✅ Server Components by default
export default async function Page({ params }) { ... }

// ✅ Client Components only when needed (state, events, browser APIs)
'use client';
export default function Interactive() { ... }

// ✅ params is a Promise in Next.js 15+ — await in Server, use() in Client
// Server:
const { id } = await params;

// Client:
import { use } from 'react';
const { id } = use(params);

// ✅ Never pass functions as props from Server → Client Components
// ❌ WRONG: <ClientComp check={fn} />
// ✅ RIGHT: define check functions client-side, pass only serializable data
```

---

## 4. Content Architecture

The platform follows **content-as-data** architecture. No lesson content is
hard-coded into React components.

### 4.1 Content Hierarchy

```
CURRICULUM[]           → getAllTracks()
  Track
    Module
      Concept slug[]

CONCEPTS{}             → getConcept(slug)
  id, title, steps[]
  prerequisites[]
  graph { requires, relatedTo, usedBy }
  labId → getLab(id)
  challengeId

LABS{}                 → getLab(id)
  starterCode
  tasks[]
  tests[]              → check functions (CLIENT-SIDE ONLY)
  hints[]
  solution

CHALLENGES{}           → getChallenge(id)
  visibleTests[]
  hiddenTests[]
  hints[]
  solution
```

### 4.2 Serialization Boundary

**Critical Rule:** Content data contains JavaScript functions (test `check` functions).
These **cannot** cross the Server→Client component boundary.

**Solution:**
```js
// Server: explicitly pick serializable fields only
function serializeLab(lab) {
  return {
    id: lab.id,
    title: lab.title,
    starterCode: lab.starterCode,
    tasks: lab.tasks,
    hints: lab.hints,
    solution: lab.solution,
    // tests: DO NOT include check fn — define client-side by ID
    tests: lab.tests?.map(({ id, description, hidden }) => ({ id, description, hidden })),
  };
}

// Client: define check functions by test ID
const CLIENT_SIDE_TESTS = {
  'test-1': (code) => code.includes('let productName'),
  'test-2': (code) => /let\s+price/.test(code),
};
```

---

## 5. Concept Engine Architecture

The `ConceptEngine` implements the full learning cycle:

```
Problem → Explanation → Interactive (Lab) → Connections → Challenge
```

Each step is driven by data from `CONCEPTS[slug].steps[]`.

### Step Types
| Type | Component | Description |
|------|-----------|-------------|
| `problem` | `ProblemStep` | Scenario + code + "Reveal Insight" |
| `explanation` | `ExplanationStep` | Theory + variable visualization |
| `interactive` | `InteractiveStep` | Embedded VariableLab |
| `connections` | `ConnectionsStep` | Real-world code examples |

New step types are added by:
1. Adding a `type` to `CONCEPTS[slug].steps[]`
2. Adding a case to `StepRenderer` in `ConceptEngine.js`

---

## 6. Code Execution Architecture

### Phase 1 (Current) — Client-Side Sandbox

```
User Code
    ↓
new Function('console', `"use strict"; ${code}`)
    ↓
Custom console object (captures logs)
    ↓
Output array → displayed in UI
```

**Limitations:**
- No network isolation
- No CPU/memory limits
- JavaScript only
- Cannot run Node.js APIs

### Phase 3 (Target) — Server-Side Sandbox

```
Browser
    ↓
Next.js API Route
    ↓
Validation (rate limit, size check, language whitelist)
    ↓
Docker container (isolated)
    ↓
Execute with limits:
  - CPU: 100ms max
  - Memory: 64MB max
  - Timeout: 5s hard
  - No network
  - No filesystem
    ↓
Return { success, logs, errors, executionTime }
    ↓
Browser
```

---

## 7. Database Schema (Phase 2)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Learning Progress
CREATE TABLE concept_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  concept_slug TEXT NOT NULL,
  status TEXT CHECK (status IN ('not_started', 'in_progress', 'complete', 'mastered')),
  steps_completed INTEGER DEFAULT 0,
  hints_used INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, concept_slug)
);

-- Lab Attempts
CREATE TABLE lab_attempts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  lab_id TEXT NOT NULL,
  code TEXT NOT NULL,
  tests_passed INTEGER DEFAULT 0,
  tests_total INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Challenge Attempts
CREATE TABLE challenge_attempts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  challenge_id TEXT NOT NULL,
  code TEXT NOT NULL,
  score INTEGER DEFAULT 0,
  hints_used INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 8. Route Architecture

```
/ ................................ Landing page
/learn ........................... All tracks listing
/learn/[track] ................... Track detail (modules + concepts)
/learn/[track]/[concept] ......... Concept page (ConceptEngine)
/lab/[labId] ..................... Standalone interactive lab
/challenge/[challengeId] ......... Challenge page
/dashboard ...................... Learner progress
/login .......................... (Phase 2)
/register ....................... (Phase 2)
/admin .......................... (Protected, Phase 2)
```

---

## 9. Design System

The design system lives entirely in `src/app/globals.css` as CSS Custom Properties.

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#0a0b0f` | Page background |
| `--bg-surface` | `#111218` | Card/sidebar background |
| `--bg-elevated` | `#16181f` | Hover state, inputs |
| `--brand-from` | `#6366f1` | Gradient start (Indigo) |
| `--brand-mid` | `#8b5cf6` | Gradient mid (Purple) |
| `--brand-to` | `#06b6d4` | Gradient end (Cyan) |
| `--accent-emerald` | `#10b981` | Success, mastery |
| `--accent-amber` | `#f59e0b` | Warning, hints |
| `--accent-rose` | `#f43f5e` | Error, dangerous |

### Typography
| Font | Usage |
|------|-------|
| Inter | Body text, UI elements |
| Outfit | Display headings |
| JetBrains Mono | Code, terminals |

---

## 10. Component Conventions

```js
// ✅ All components use CSS Modules
import styles from './Component.module.css';

// ✅ Global utility classes from globals.css
<div className={`card card-hover ${styles.myCard}`}>

// ✅ Client Components marked explicitly
'use client';

// ✅ All interactive elements have unique IDs for testing
<button id="run-btn">Run</button>

// ✅ Loading states for async operations
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => <LoadingState />,
});
```

---

## 11. Phase Roadmap

| Phase | Focus | Status |
|-------|-------|--------|
| 0 | Specification | ✅ Complete |
| 1 | Next.js foundation, routing, design system | ✅ Complete |
| 2 | Authentication, database, user progress | 🔜 Next |
| 3 | Server-side code execution sandbox | 🔜 Next |
| 4 | Variables concept — complete vertical slice | ✅ Complete |
| 5 | Constants, Data Types, Operators, Conditions, Loops, Functions | 🔜 Next |
| 6 | OOP (Objects → Classes → Inheritance) | 📋 Planned |
| 7 | Web Fundamentals (HTTP visualizer) | 📋 Planned |
| 8 | Databases + SQL interactive visualizer | 📋 Planned |
| 9 | JavaScript deep dive | 📋 Planned |
| 10 | React | 📋 Planned |
| 11 | Next.js | 📋 Planned |
| 12 | PHP | 📋 Planned |
| 13 | Laravel | 📋 Planned |
| 14 | Full-stack projects | 📋 Planned |
| 15 | Hardening (security, testing, deployment) | 📋 Planned |

---

## 12. Security Rules

1. **Never execute raw user code server-side** — Phase 1 uses client-only sandbox
2. **Validate all inputs** — Zod schemas on all API routes (Phase 2)
3. **Rate limit code execution** — Max 10 runs/minute per user (Phase 3)
4. **Never expose solutions client-side prematurely** — Solutions served via API
5. **Admin routes must be server-side protected** — Middleware + session check
6. **No function props across Server→Client boundary** — Serialization layer

---

## 13. Testing Strategy

### Unit Tests (Phase 2)
- All curriculum data functions (`getConcept`, `getLab`, `getChallenge`)
- Code execution utility
- Error explainer utility

### Integration Tests (Phase 3)
- Lab test runner against known code samples
- API routes (auth, progress, execution)

### E2E Tests (Phase 3)
- `/learn/programming-thinking/variables` — complete the concept
- `/lab/lab-variables` — run code, see output, pass tests
- `/challenge/challenge-variables-1` — submit and pass

---

## 14. Adding a New Concept

1. Add concept slug to the appropriate module in `CURRICULUM` in `src/data/curriculum/index.js`
2. Add concept definition to `CONCEPTS` object
3. Add lab definition to `LABS` object (if applicable)
4. Add challenge definition to `CHALLENGES` object (if applicable)
5. Add client-side test functions to `CLIENT_SIDE_TESTS` in `VariableLab.js` (or create a new Lab component)
6. Add concept-specific visualizations to `ConceptEngine.js` if needed

No route changes needed for new concepts — the dynamic route `[track]/[concept]` handles them automatically.
