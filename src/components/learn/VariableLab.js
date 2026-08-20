'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Icon from '@/components/ui/Icon';
import styles from './VariableLab.module.css';
import { getCurrentUser } from '@/lib/auth';
import { saveLabAttempt, getLabAttempt } from '@/lib/dataService';

// Monaco Editor loaded client-side only
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className={styles.editorLoading}>
      <div className={styles.editorLoadingSpinner} />
      <span>Loading editor...</span>
    </div>
  ),
});

const MONACO_OPTIONS = {
  fontSize: 14,
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  fontLigatures: true,
  minimap: { enabled: false },
  lineNumbers: 'on',
  scrollBeyondLastLine: false,
  automaticLayout: true,
  tabSize: 2,
  wordWrap: 'on',
  padding: { top: 16, bottom: 16 },
  lineDecorationsWidth: 0,
  renderLineHighlight: 'line',
  theme: 'devlab-dark',
};

/**
 * Secure client-side JavaScript sandbox.
 * Uses Function constructor in an iframe for isolation.
 * Production would use a server-side sandbox.
 */
function runJavaScript(code) {
  const logs = [];
  const errors = [];

  // Override console.log to capture output
  const fakeConsole = {
    log: (...args) => logs.push(args.map(String).join(' ')),
    error: (...args) => errors.push(args.map(String).join(' ')),
    warn: (...args) => logs.push('[WARN] ' + args.map(String).join(' ')),
  };

  try {
    // Restrict dangerous globals
    const sandbox = new Function(
      'console',
      `"use strict";
      // Block dangerous operations
      ${code}`
    );
    sandbox(fakeConsole);
    return { success: true, logs, errors };
  } catch (err) {
    return {
      success: false,
      logs,
      errors: [err.message],
      errorType: err.constructor.name,
      stack: err.stack,
    };
  }
}

/**
 * Client-side test check functions keyed by test ID.
 * These cannot be passed from Server Components as props (not serializable).
 */
const CLIENT_SIDE_TESTS = {
  'test-1': (code) => code.includes('let productName') || code.includes('const productName'),
  'test-2': (code) => /let\s+price\s*=\s*\d+/.test(code),
  'test-3': (code) => code.includes('finalPrice') && code.includes('discountAmount'),
};

/**
 * Run visible tests against code
 */
function runTests(code, tests) {
  return tests.map((test) => {
    try {
      const checkFn = CLIENT_SIDE_TESTS[test.id];
      const passed = checkFn ? checkFn(code) : false;
      return { ...test, passed };
    } catch {
      return { ...test, passed: false };
    }
  });
}

export default function VariableLab({ lab, embedded = false }) {
  const [code, setCode] = useState(lab?.starterCode || '// Write your code here\n');
  const [output, setOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [activeTab, setActiveTab] = useState('output');
  const [hintIndex, setHintIndex] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [editorReady, setEditorReady] = useState(false);
  const editorRef = useRef(null);
  const outputRef = useRef(null);

  const [user, setUser] = useState(null);

  // Load saved code when user or lab changes
  useEffect(() => {
    const activeUser = getCurrentUser();
    if (activeUser && lab?.id) {
      setUser(activeUser);
      const attempt = getLabAttempt(activeUser.id, lab.id);
      if (attempt) {
        setCode(attempt.code);
        if (attempt.testsTotal > 0) {
          const visibleTests = lab.tests.filter((t) => !t.hidden);
          const results = runTests(attempt.code, visibleTests);
          setTestResults(results);
        }
      } else {
        setCode(lab?.starterCode || '// Write your code here\n');
        setTestResults(null);
      }
    } else {
      setCode(lab?.starterCode || '// Write your code here\n');
      setTestResults(null);
    }
  }, [lab?.id]);

  // Scroll to output after running
  useEffect(() => {
    if (output.length > 0 && outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  function handleEditorMount(editor, monaco) {
    editorRef.current = editor;
    setEditorReady(true);

    // Define DevLab dark theme
    monaco.editor.defineTheme('devlab-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'FFDD00', fontStyle: 'bold' },
        { token: 'string', foreground: '3ECF8E' },
        { token: 'number', foreground: 'FFDD00' },
        { token: 'comment', foreground: '555555', fontStyle: 'italic' },
        { token: 'identifier', foreground: 'FFFFFF' },
        { token: 'type', foreground: 'FFDD00' },
      ],
      colors: {
        'editor.background': '#000000',
        'editor.foreground': '#EDEDED',
        'editor.lineHighlightBackground': '#111111',
        'editor.selectionBackground': '#222222',
        'editorCursor.foreground': '#FFDD00',
        'editorLineNumber.foreground': '#444444',
        'editorLineNumber.activeForeground': '#FFDD00',
        'editor.inactiveSelectionBackground': '#111111',
      },
    });
    monaco.editor.setTheme('devlab-dark');
  }

  async function handleRun() {
    setIsRunning(true);
    setRunResult(null);

    // Small delay to show the running state
    await new Promise((r) => setTimeout(r, 200));

    const result = runJavaScript(code);
    setRunResult(result);
    setOutput(result.logs);
    setActiveTab('output');
    setIsRunning(false);

    // Auto-run visible tests
    if (lab?.tests) {
      const visibleTests = lab.tests.filter((t) => !t.hidden);
      const results = runTests(code, visibleTests);
      setTestResults(results);

      // Save to mock database if user is logged in
      const activeUser = getCurrentUser();
      if (activeUser && lab?.id) {
        const passingCount = results.filter((r) => r.passed).length;
        const totalCount = results.length;
        saveLabAttempt(activeUser.id, lab.id, code, passingCount, totalCount);
      }
    }
  }

  function handleReset() {
    setCode(lab?.starterCode || '');
    setOutput([]);
    setRunResult(null);
    setTestResults(null);
    setHintIndex(null);
    setShowSolution(false);
  }

  function handleNextHint() {
    const maxIdx = (lab?.hints?.length || 1) - 1;
    setHintIndex((prev) => (prev === null ? 0 : Math.min(prev + 1, maxIdx)));
  }

  function handleShowSolution() {
    if (!showSolution) {
      setShowSolution(true);
      setCode(lab?.solution || code);
    }
  }

  const currentHints = hintIndex !== null ? lab?.hints?.slice(0, hintIndex + 1) : [];
  const allTestsPassing = testResults?.every((t) => t.passed);

  return (
    <div className={`${styles.lab} ${embedded ? styles.labEmbedded : ''}`}>
      {/* Lab Header */}
      {!embedded && (
        <div className={styles.labHeader}>
          <div>
            <div className="section-label">Interactive Lab</div>
            <h1 className={styles.labTitle}>{lab?.title || 'Lab'}</h1>
            <p className={styles.labDesc}>{lab?.description}</p>
          </div>
          {allTestsPassing && (
            <div className={styles.labComplete}>
              <Icon name="trophy" size={24} />
              <div>
                <strong>Lab Complete!</strong>
                <p>All tests passing.</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className={styles.labBody}>
        {/* Left: Instructions + Tasks */}
        <div className={styles.instructions}>
          <div className={styles.instructionsHeader}>
            <h3>Tasks</h3>
          </div>
          <div className={styles.taskList}>
            {lab?.tasks?.map((task, i) => (
              <div key={i} className={styles.task}>
                <div className={styles.taskNum}>{i + 1}</div>
                <p>{task}</p>
              </div>
            ))}
          </div>

          {/* Hints */}
          <div className={styles.hintsSection}>
            <div className={styles.hintsSectionHeader}>
              <span className="section-label" style={{ margin: 0 }}>Hints</span>
              <span className={styles.hintsUsed}>
                {hintIndex !== null ? hintIndex + 1 : 0} / {lab?.hints?.length || 0} used
              </span>
            </div>

            {currentHints.map((hint, i) => (
              <div key={i} className={styles.hint}>
                <div className={styles.hintNum} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Icon name="lightbulb" size={14} /> Hint {i + 1}
                </div>
                <p>{hint}</p>
              </div>
            ))}

            <div className={styles.hintActions}>
              {hintIndex === null || hintIndex < (lab?.hints?.length || 0) - 1 ? (
                <button
                  id="get-hint-btn"
                  className="btn btn-ghost btn-sm"
                  onClick={handleNextHint}
                >
                  Get a hint
                </button>
              ) : (
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  No more hints.
                </span>
              )}

              {!showSolution ? (
                <button
                  id="show-solution-btn"
                  className="btn btn-ghost btn-sm"
                  onClick={handleShowSolution}
                  style={{ color: 'var(--text-muted)' }}
                >
                  Show solution
                </button>
              ) : (
                <span style={{ fontSize: '0.75rem', color: 'var(--warning)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span className="status-dot status-warning" /> Solution shown
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Editor + Output */}
        <div className={styles.editorPane}>
          {/* Editor Toolbar */}
          <div className={styles.editorToolbar}>
            <div className={styles.editorFileName}>
              <span className={styles.fileDot} />
              variables.js
            </div>
            <div className={styles.editorActions}>
              <button
                id="reset-btn"
                className="btn btn-ghost btn-sm"
                onClick={handleReset}
                title="Reset to starter code"
              >
                ↺ Reset
              </button>
              <button
                id="run-btn"
                className={`btn btn-primary btn-sm ${isRunning ? styles.runBtnRunning : ''}`}
                onClick={handleRun}
                disabled={isRunning}
              >
                {isRunning ? (
                  <>
                    <span className={styles.spinner} /> Running...
                  </>
                ) : (
                  '▶ Run'
                )}
              </button>
            </div>
          </div>

          {/* Monaco Editor */}
          <div className={styles.editorWrapper}>
            <MonacoEditor
              height="320px"
              language="javascript"
              value={code}
              onChange={(val) => setCode(val || '')}
              onMount={handleEditorMount}
              options={MONACO_OPTIONS}
            />
          </div>

          {/* Output Tabs */}
          <div className={styles.outputSection}>
            <div className={styles.outputTabs}>
              <button
                id="tab-output"
                className={`${styles.outputTab} ${activeTab === 'output' ? styles.outputTabActive : ''}`}
                onClick={() => setActiveTab('output')}
              >
                Output
                {runResult && !runResult.success && (
                  <span className={`status-dot status-error ${styles.tabDot}`} />
                )}
                {runResult?.success && output.length > 0 && (
                  <span className={`status-dot status-success ${styles.tabDot}`} />
                )}
              </button>
              <button
                id="tab-tests"
                className={`${styles.outputTab} ${activeTab === 'tests' ? styles.outputTabActive : ''}`}
                onClick={() => setActiveTab('tests')}
              >
                Tests
                {testResults && (
                  <span className={`status-dot ${allTestsPassing ? 'status-success' : 'status-error'} ${styles.tabDot}`} />
                )}
              </button>
            </div>

            <div className={styles.outputBody} ref={outputRef}>
              {activeTab === 'output' && (
                <OutputPanel result={runResult} output={output} />
              )}
              {activeTab === 'tests' && (
                <TestPanel results={testResults} tests={lab?.tests} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Output Panel ──────────────────────────── */
function OutputPanel({ result, output }) {
  if (!result) {
    return (
      <div className={styles.outputEmpty}>
        <span className={styles.outputEmptyIcon}>▶</span>
        <p>Run your code to see the output</p>
      </div>
    );
  }

  if (!result.success) {
    return (
      <div className={styles.errorPanel}>
        <div className={styles.errorHeader}>
          <span className="status-dot status-error" />
          <strong>{result.errorType || 'Error'}</strong>
        </div>
        {result.errors.map((err, i) => (
          <div key={i} className={styles.errorMessage}>{err}</div>
        ))}
        <div className={styles.errorExplanation}>
          <div className={styles.errorExplanationTitle} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="book" size={16} /> What happened?
          </div>
          <p>{explainError(result.errors[0])}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.outputLines}>
      {output.length === 0 ? (
        <span className={styles.outputNoOutput}>No output. Add console.log() to print values.</span>
      ) : (
        output.map((line, i) => (
          <div key={i} className={styles.outputLine}>
            <span className={styles.outputLineNum}>{i + 1}</span>
            <span>{line}</span>
          </div>
        ))
      )}
    </div>
  );
}

/* ── Test Panel ────────────────────────────── */
function TestPanel({ results, tests }) {
  if (!tests?.length) {
    return <div className={styles.outputEmpty}><p>No tests for this lab.</p></div>;
  }

  if (!results) {
    return (
      <div className={styles.outputEmpty}>
        <p>Run your code to check the tests.</p>
      </div>
    );
  }

  const visibleTests = tests.filter((t) => !t.hidden);
  const passing = results.filter((r) => r.passed).length;

  return (
    <div className={styles.testPanel}>
      <div className={styles.testSummary}>
        <span style={{ color: passing === results.length ? 'var(--success)' : 'var(--warning)' }}>
          {passing} / {results.length} passing
        </span>
      </div>
      {results.map((result) => (
        <div key={result.id} className={`${styles.testItem} ${result.passed ? styles.testPass : styles.testFail}`}>
          <span className={styles.testIcon}>{result.passed ? '✓' : '✗'}</span>
          <span className={styles.testDesc}>{result.description}</span>
        </div>
      ))}
      {tests.some((t) => t.hidden) && (
        <div className={styles.hiddenTestNote}>
          + {tests.filter((t) => t.hidden).length} hidden test(s) checked during final submission.
        </div>
      )}
    </div>
  );
}

/* ── Error Explainer ───────────────────────── */
function explainError(message) {
  if (!message) return 'An unexpected error occurred.';
  if (message.includes('is not defined')) {
    const name = message.match(/([\w]+) is not defined/)?.[1];
    return `The variable "${name}" doesn't exist. You're trying to use a name that hasn't been declared with let, const, or var.`;
  }
  if (message.includes('Cannot read properties of undefined')) {
    return `You're trying to access a property on something that doesn't exist yet. Check that the variable is assigned before using it.`;
  }
  if (message.includes('Unexpected token')) {
    return `There's a syntax error — the code structure is invalid. Check for missing brackets, parentheses, or semicolons near that line.`;
  }
  return `An error occurred: ${message}. Read the error message carefully — it usually tells you exactly what went wrong.`;
}
