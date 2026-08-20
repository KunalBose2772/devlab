'use client';

import { useState, useRef, use } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Icon from '@/components/ui/Icon';
import styles from './page.module.css';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => <div className={styles.editorLoading}>Loading editor...</div>,
});

const CHALLENGE_DATA = {
  'challenge-variables-1': {
    id: 'challenge-variables-1',
    title: 'The Invoice Calculator',
    concept: 'variables',
    type: 'Build',
    difficulty: 'Beginner',
    estimatedMinutes: 10,
    points: 100,
    description: `An ecommerce platform needs an invoice calculator.

**Given:**
- Product name: "Mechanical Keyboard"  
- Base price: ₹4,500
- GST: 18%
- Shipping: ₹149 (free if subtotal > ₹5,000)

**Write code that:**
1. Stores each value in correctly named variables
2. Calculates the GST amount
3. Calculates the subtotal (price + GST)
4. Determines if shipping is free
5. Prints the final invoice`,

    starterCode: `// The Invoice Calculator
// Complete the code below

// Step 1: Store the product details
let productName = "";
let basePrice = 0;
let gstPercent = 0;

// Step 2: Calculate GST
let gstAmount = // your calculation

// Step 3: Calculate subtotal
let subtotal = // your calculation

// Step 4: Determine shipping (free if subtotal > 5000)
let shipping = // use a condition

// Step 5: Calculate total
let total = // your calculation

// Step 6: Print the invoice
console.log("=== INVOICE ===");
// print each line here
`,

    visibleTests: [
      { id: 'v1', description: 'productName is "Mechanical Keyboard"', check: (c) => c.includes('"Mechanical Keyboard"') || c.includes("'Mechanical Keyboard'") },
      { id: 'v2', description: 'basePrice is 4500', check: (c) => /basePrice\s*=\s*4500/.test(c) },
      { id: 'v3', description: 'gstPercent is 18', check: (c) => /gstPercent\s*=\s*18/.test(c) },
    ],

    hiddenTests: [
      { id: 'h1', description: 'gstAmount = basePrice × (gstPercent / 100) = 810', check: (c) => /gstAmount/.test(c) && /gstPercent/.test(c) && /basePrice/.test(c) },
      { id: 'h2', description: 'subtotal = basePrice + gstAmount = 5310', check: (c) => /subtotal/.test(c) },
      { id: 'h3', description: 'shipping = 0 (since 5310 > 5000)', check: (c) => /shipping/.test(c) && /5000/.test(c) },
      { id: 'h4', description: 'total is calculated correctly', check: (c) => /total/.test(c) },
    ],

    hints: [
      '💡 Start by filling in the known values: productName, basePrice, gstPercent.',
      '💡 GST amount formula: gstAmount = basePrice * (gstPercent / 100)',
      '💡 Subtotal = basePrice + gstAmount. Then check: if (subtotal > 5000) shipping = 0; else shipping = 149;',
      '💡 For the condition: if (subtotal > 5000) { shipping = 0; } else { shipping = 149; }',
    ],

    solution: `let productName = "Mechanical Keyboard";
let basePrice = 4500;
let gstPercent = 18;

let gstAmount = basePrice * (gstPercent / 100);
let subtotal = basePrice + gstAmount;

let shipping;
if (subtotal > 5000) {
  shipping = 0;
} else {
  shipping = 149;
}

let total = subtotal + shipping;

console.log("=== INVOICE ===");
console.log("Product:", productName);
console.log("Base Price: ₹" + basePrice);
console.log("GST (" + gstPercent + "%): ₹" + gstAmount);
console.log("Subtotal: ₹" + subtotal);
console.log("Shipping:", shipping === 0 ? "FREE" : "₹" + shipping);
console.log("TOTAL: ₹" + total);
`,
  },
};

function runJavaScript(code) {
  const logs = [];
  const errors = [];
  try {
    const fn = new Function('console', `"use strict"; ${code}`);
    fn({ log: (...a) => logs.push(a.map(String).join(' ')), error: (...a) => errors.push(a.map(String).join(' ')), warn: (...a) => logs.push('⚠️ ' + a.map(String).join(' ')) });
    return { success: true, logs, errors };
  } catch (err) {
    return { success: false, logs, errors: [err.message], errorType: err.constructor.name };
  }
}

export default function ChallengePage({ params }) {
  const { challengeId } = use(params);
  const challenge = CHALLENGE_DATA[challengeId];

  const [code, setCode] = useState(challenge?.starterCode || '// Challenge not found');
  const [output, setOutput] = useState([]);
  const [result, setResult] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [hintIdx, setHintIdx] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('output');

  if (!challenge) {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: 'var(--nav-height)', padding: 'var(--space-20)', textAlign: 'center' }}>
          <h1>Challenge not found</h1>
          <p>The challenge you&apos;re looking for doesn&apos;t exist yet.</p>
        </div>
      </>
    );
  }

  const allTests = [...challenge.visibleTests, ...challenge.hiddenTests];

  async function handleRun() {
    setIsRunning(true);
    await new Promise((r) => setTimeout(r, 150));
    const r = runJavaScript(code);
    setResult(r);
    setOutput(r.logs);
    const tr = allTests.map((t) => ({ ...t, passed: t.check(code) }));
    setTestResults(tr);
    setActiveTab('output');
    setIsRunning(false);
  }

  function handleSubmit() {
    handleRun();
    setSubmitted(true);
    setActiveTab('tests');
  }

  const passing = testResults?.filter((t) => t.passed).length || 0;
  const total = allTests.length;
  const allPassing = passing === total;

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        {/* Left Panel */}
        <div className={styles.leftPanel}>
          <div className={styles.challengeHeader}>
            <div className={styles.challengeMeta}>
              <span className="badge badge-amber">{challenge.type}</span>
              <span className="badge badge-indigo">{challenge.difficulty}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>~{challenge.estimatedMinutes} min</span>
            </div>
            <h2 className={styles.challengeTitle}>{renderDualColorTitle(challenge.title)}</h2>
          </div>

          <div className={styles.description}>
            {challenge.description.split('\n').map((line, i) => {
              if (line.startsWith('**')) return <p key={i} style={{ fontWeight: 700, color: 'var(--text-primary)', margin: '8px 0 4px' }}>{line.replace(/\*\*/g, '')}</p>;
              if (line.startsWith('-')) return <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 4 }}><span style={{ color: 'var(--accent-indigo)', flexShrink: 0 }}>•</span><p style={{ margin: 0, fontSize: '0.875rem' }}>{line.slice(1).trim()}</p></div>;
              if (line.match(/^\d\./)) return <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 4 }}><span style={{ color: 'var(--accent-purple)', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{line[0]}.</span><p style={{ margin: 0, fontSize: '0.875rem' }}>{line.slice(2).trim()}</p></div>;
              return line.trim() ? <p key={i} style={{ fontSize: '0.875rem' }}>{line}</p> : <br key={i} />;
            })}
          </div>

          {/* Visible Tests Preview */}
          <div className={styles.testsPreview}>
            <div className="section-label" style={{ marginBottom: 'var(--space-3)' }}>Visible Tests</div>
            {challenge.visibleTests.map((t) => {
              const tr = testResults?.find((r) => r.id === t.id);
              return (
                <div key={t.id} className={`${styles.testPreviewItem} ${tr ? (tr.passed ? styles.testPass : styles.testFail) : ''}`}>
                  <span>{tr ? (tr.passed ? '✓' : '✗') : '○'}</span>
                  <span style={{ fontSize: '0.8rem' }}>{t.description}</span>
                </div>
              );
            })}
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 'var(--space-2)', fontStyle: 'italic' }}>
              + {challenge.hiddenTests.length} hidden tests
            </p>
          </div>

          {/* Hints */}
          <div className={styles.hintsPanel}>
            <div className={styles.hintsHeader}>
              <span className="section-label" style={{ margin: 0 }}>Hints</span>
            </div>
            {hintIdx !== null && challenge.hints.slice(0, hintIdx + 1).map((h, i) => (
              <div key={i} className={styles.hint} style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                <Icon name="lightbulb" size={16} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{h.replace(/^💡\s*/, '')}</span>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {(hintIdx === null || hintIdx < challenge.hints.length - 1) && (
                <button id="hint-btn" className="btn btn-ghost btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }} onClick={() => setHintIdx((p) => p === null ? 0 : p + 1)}>
                  <Icon name="lightbulb" size={14} /> Get hint
                </button>
              )}
              {!showSolution && (
                <button id="solution-btn" className="btn btn-ghost btn-sm" style={{ color: 'var(--text-muted)' }} onClick={() => { setShowSolution(true); setCode(challenge.solution); }}>
                  Show solution
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel — Editor */}
        <div className={styles.rightPanel}>
          {/* Toolbar */}
          <div className={styles.toolbar}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>invoice.js</span>
              {submitted && (
                <span className={`badge ${allPassing ? 'badge-emerald' : 'badge-amber'}`}>
                  {passing}/{total} tests passing
                </span>
              )}
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <button id="reset-challenge" className="btn btn-ghost btn-sm" onClick={() => { setCode(challenge.starterCode); setResult(null); setOutput([]); setTestResults(null); setSubmitted(false); }}>
                ↺ Reset
              </button>
              <button id="run-challenge" className="btn btn-secondary btn-sm" onClick={handleRun} disabled={isRunning}>
                {isRunning ? 'Running...' : '▶ Run'}
              </button>
              <button id="submit-challenge" className="btn btn-primary btn-sm" onClick={handleSubmit} disabled={isRunning}>
                Submit →
              </button>
            </div>
          </div>

          {/* Editor */}
          <MonacoEditor
            height="360px"
            language="javascript"
            value={code}
            onChange={(v) => setCode(v || '')}
            onMount={(editor, monaco) => {
              monaco.editor.defineTheme('devlab-dark', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                  { token: 'keyword', foreground: 'FFDD00', fontStyle: 'bold' },
                  { token: 'string', foreground: '3ECF8E' },
                  { token: 'number', foreground: 'FFDD00' },
                  { token: 'comment', foreground: '555555', fontStyle: 'italic' },
                  { token: 'identifier', foreground: 'FFFFFF' }
                ],
                colors: {
                  'editor.background': '#000000',
                  'editor.foreground': '#EDEDED',
                  'editorCursor.foreground': '#FFDD00',
                  'editorLineNumber.foreground': '#444444',
                  'editorLineNumber.activeForeground': '#FFDD00'
                }
              });
              monaco.editor.setTheme('devlab-dark');
            }}
            options={{ fontSize: 14, fontFamily: "'JetBrains Mono', monospace", minimap: { enabled: false }, lineNumbers: 'on', scrollBeyondLastLine: false, automaticLayout: true, tabSize: 2, wordWrap: 'on', padding: { top: 16, bottom: 16 } }}
          />

          {/* Output */}
          <div className={styles.outputTabs}>
            <button id="tab-out" className={`${styles.tab} ${activeTab === 'output' ? styles.tabActive : ''}`} onClick={() => setActiveTab('output')}>Output</button>
            <button id="tab-tst" className={`${styles.tab} ${activeTab === 'tests' ? styles.tabActive : ''}`} onClick={() => setActiveTab('tests')}>Tests {testResults && `(${passing}/${total})`}</button>
          </div>

          <div className={styles.outputBody}>
            {activeTab === 'output' && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', padding: 'var(--space-4)' }}>
                {!result ? (
                  <span style={{ color: 'var(--text-muted)' }}>Run or submit your code to see output.</span>
                ) : !result.success ? (
                  <div>
                    <div style={{ color: 'var(--error)', fontWeight: 700, marginBottom: 8 }}>{result.errorType}</div>
                    {result.errors.map((e, i) => <div key={i} style={{ color: 'var(--error)', marginBottom: 4 }}>{e}</div>)}
                  </div>
                ) : output.length === 0 ? (
                  <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No output. Add console.log() to print values.</span>
                ) : (
                  output.map((line, i) => <div key={i} style={{ color: 'var(--text-secondary)', marginBottom: 2 }}>{line}</div>)
                )}
              </div>
            )}

            {activeTab === 'tests' && (
              <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {!testResults ? (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Submit to run all tests.</span>
                ) : (
                  <>
                    {testResults.map((t) => (
                      <div key={t.id} className={`${styles.testItem} ${t.passed ? styles.testPass : styles.testFail}`}>
                        <span style={{ fontWeight: 700, color: t.passed ? 'var(--success)' : 'var(--error)' }}>{t.passed ? '✓' : '✗'}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.description}</span>
                      </div>
                    ))}
                    {allPassing && (
                      <div style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4)', background: 'rgba(62,207,142,0.1)', border: '1px solid rgba(62,207,142,0.3)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                        <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                          <Icon name="trophy" size={28} />
                        </div>
                        <strong style={{ color: 'var(--success)' }}>Challenge Complete!</strong>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>All tests passing. Well done.</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function renderDualColorTitle(title) {
  if (!title) return '';
  const words = title.split(' ');
  if (words.length <= 1) return <span className="text-accent">{title}</span>;
  const splitIdx = words.length > 2 ? words.length - 2 : words.length - 1;
  const mainPart = words.slice(0, splitIdx).join(' ');
  const accentPart = words.slice(splitIdx).join(' ');
  return (
    <>
      {mainPart} <span className="text-accent">{accentPart}</span>
    </>
  );
}
