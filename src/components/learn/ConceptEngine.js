'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import styles from './ConceptEngine.module.css';
import VariableLab from './VariableLab';

const STEP_ICONS = {
  problem: 'question',
  explanation: 'book',
  interactive: 'beaker',
  connections: 'network',
};

export default function ConceptEngine({ concept, lab }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = concept.steps || [];
  const totalSteps = steps.length;
  const progress = totalSteps > 0 ? ((activeStep + 1) / totalSteps) * 100 : 0;

  function goNext() {
    if (activeStep < totalSteps - 1) setActiveStep((s) => s + 1);
  }
  function goPrev() {
    if (activeStep > 0) setActiveStep((s) => s - 1);
  }

  const step = steps[activeStep];

  return (
    <div className={styles.engine}>
      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLabel}>Concept Steps</div>
        <div className={styles.stepNav}>
          {steps.map((s, i) => (
            <button
              key={s.id}
              id={`step-nav-${s.id}`}
              className={`${styles.stepNavItem} ${i === activeStep ? styles.stepNavActive : ''} ${i < activeStep ? styles.stepNavDone : ''}`}
              onClick={() => setActiveStep(i)}
            >
              <span className={styles.stepNavIcon}>
                {STEP_ICONS[s.type] ? (
                  <Icon name={STEP_ICONS[s.type]} size={16} style={{ color: i === activeStep ? 'var(--yellow)' : 'var(--text-secondary)' }} />
                ) : '•'}
              </span>
              <span className={styles.stepNavLabel}>{s.title}</span>
              {i < activeStep && <span className={styles.stepNavCheck}>✓</span>}
            </button>
          ))}
        </div>

        {/* Knowledge Graph */}
        {concept.graph && (
          <div className={styles.knowledgeGraph}>
            <div className="section-label" style={{ marginBottom: 'var(--space-3)' }}>Knowledge Graph</div>
            {concept.graph.relatedTo?.length > 0 && (
              <div className={styles.graphSection}>
                <div className={styles.graphLabel}>Related to</div>
                <div className={styles.graphTags}>
                  {concept.graph.relatedTo.map((c) => (
                    <span key={c} className={`badge badge-indigo ${styles.graphTag}`}>{c}</span>
                  ))}
                </div>
              </div>
            )}
            {concept.graph.usedBy?.length > 0 && (
              <div className={styles.graphSection}>
                <div className={styles.graphLabel}>Used by</div>
                <div className={styles.graphTags}>
                  {concept.graph.usedBy.map((c) => (
                    <span key={c} className={`badge badge-purple ${styles.graphTag}`}>{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Progress Bar */}
        <div className={styles.progressWrap}>
          <div className="progress-bar" style={{ flex: 1 }}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.progressText}>
            {activeStep + 1} / {totalSteps}
          </span>
        </div>

        {/* Step Content */}
        <div className={styles.stepContent} key={step?.id}>
          {step && <StepRenderer step={step} lab={lab} concept={concept} />}
        </div>

        {/* Navigation */}
        <div className={styles.navButtons}>
          <button
            id="step-prev-btn"
            className="btn btn-secondary btn-md"
            onClick={goPrev}
            disabled={activeStep === 0}
          >
            ← Previous
          </button>

          {activeStep < totalSteps - 1 ? (
            <button
              id="step-next-btn"
              className="btn btn-primary btn-md"
              onClick={goNext}
            >
              Next →
            </button>
          ) : (
            <Link
              href={`/challenge/${concept.challengeId}`}
              className="btn btn-primary btn-md"
              id="go-to-challenge-btn"
            >
              Take the Challenge 🧩
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Step Renderer ─────────────────────────── */
function StepRenderer({ step, lab, concept }) {
  switch (step.type) {
    case 'problem':      return <ProblemStep step={step} />;
    case 'explanation':  return <ExplanationStep step={step} />;
    case 'interactive':  return <InteractiveStep lab={lab} />;
    case 'connections':  return <ConnectionsStep step={step} concept={concept} />;
    default:             return <DefaultStep step={step} />;
  }
}

/* ── Problem Step ──────────────────────────── */
function ProblemStep({ step }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={styles.stepBlock}>
      <div className={styles.stepHeader}>
        <span className={styles.stepTypeIcon}>❓</span>
        <div>
          <div className={styles.stepType}>The Problem</div>
          <h2 className={styles.stepTitle}>{step.title}</h2>
        </div>
      </div>

      <div className={styles.problemScenario}>
        {step.content.split('\n\n').map((paragraph, i) => (
          <p key={i} style={{ whiteSpace: 'pre-line' }}>{paragraph}</p>
        ))}
      </div>

      {step.code && (
        <div style={{ marginTop: 'var(--space-6)' }}>
          <div className={styles.codeLabel}>The Problem in Code</div>
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#f43f5e' }} />
              <div className="terminal-dot" style={{ background: '#f59e0b' }} />
              <div className="terminal-dot" style={{ background: '#10b981' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 8 }}>example.js</span>
            </div>
            <div className="terminal-body">
              <pre style={{ margin: 0, padding: 0, background: 'transparent', border: 'none', color: 'var(--text-secondary)' }}>
                {step.code}
              </pre>
            </div>
          </div>
        </div>
      )}

      <div className={styles.problemQuestion}>
        <div className={styles.questionBadge}>🤔 Think About It</div>
        <p>Before we show you the solution: <strong>how would you prevent this problem?</strong></p>
        <button
          id="reveal-insight-btn"
          className="btn btn-secondary btn-sm"
          onClick={() => setRevealed(true)}
          style={{ marginTop: 'var(--space-3)' }}
        >
          {revealed ? '✓ Revealed' : 'Reveal the Insight'}
        </button>
        {revealed && (
          <div className={styles.insight}>
            <span>💡</span>
            <p>
              <strong>Variables.</strong> Store the value once, reference it everywhere.
              Change it in one place and everything updates. That is the core purpose of a variable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Explanation Step ──────────────────────── */
function ExplanationStep({ step }) {
  // Simple markdown-like renderer for the content
  const parts = step.content.split(/```[\w]*\n([\s\S]*?)```/);

  return (
    <div className={styles.stepBlock}>
      <div className={styles.stepHeader}>
        <span className={styles.stepTypeIcon}>📖</span>
        <div>
          <div className={styles.stepType}>Explanation</div>
          <h2 className={styles.stepTitle}>{step.title}</h2>
        </div>
      </div>

      <div className={styles.explanation}>
        {parts.map((part, i) => {
          if (i % 2 === 0) {
            return part.split('\n\n').map((para, j) => (
              <p key={`p-${i}-${j}`} style={{ whiteSpace: 'pre-line' }}>{para.trim()}</p>
            ));
          } else {
            return (
              <div key={`code-${i}`} className="terminal" style={{ marginTop: 'var(--space-4)' }}>
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#f43f5e' }} />
                  <div className="terminal-dot" style={{ background: '#f59e0b' }} />
                  <div className="terminal-dot" style={{ background: '#10b981' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 8 }}>variables.js</span>
                </div>
                <div className="terminal-body">
                  <pre style={{ margin: 0, padding: 0, background: 'transparent', border: 'none', color: 'var(--accent-cyan)' }}>
                    {part}
                  </pre>
                </div>
              </div>
            );
          }
        })}

        {/* Variable visualization */}
        <div className={styles.varViz}>
          <div className="section-label" style={{ marginBottom: 'var(--space-4)' }}>Visualized</div>
          <VariableVisualization />
        </div>
      </div>
    </div>
  );
}

/* ── Variable Visualization ────────────────── */
function VariableVisualization() {
  const [vars, setVars] = useState([
    { name: 'price', value: '1499', type: 'number' },
    { name: 'discount', value: '0.10', type: 'number' },
    { name: 'productName', value: '"Headphones"', type: 'string' },
  ]);

  function updateValue(idx, newVal) {
    setVars((prev) => prev.map((v, i) => i === idx ? { ...v, value: newVal } : v));
  }

  return (
    <div className={styles.varVizContainer}>
      <div className={styles.varVizMemory}>
        <div className={styles.varVizLabel}>Memory</div>
        {vars.map((v, i) => (
          <div key={v.name} className={styles.varBox}>
            <div className={styles.varBoxLabel}>{v.name}</div>
            <input
              id={`var-input-${v.name}`}
              className={`input ${styles.varBoxInput}`}
              value={v.value}
              onChange={(e) => updateValue(i, e.target.value)}
            />
            <span className={`badge ${v.type === 'string' ? 'badge-cyan' : 'badge-emerald'}`}>
              {v.type}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.varVizArrow}>→</div>
      <div className={styles.varVizUsage}>
        <div className={styles.varVizLabel}>Used in code</div>
        <div className="terminal">
          <div className="terminal-body" style={{ fontSize: '0.8rem', lineHeight: 1.8 }}>
            <div><span style={{ color: '#8b5cf6' }}>let</span> finalPrice = <span style={{ color: '#06b6d4' }}>price</span> - (<span style={{ color: '#06b6d4' }}>price</span> * <span style={{ color: '#06b6d4' }}>discount</span>);</div>
            <div style={{ color: 'var(--accent-emerald)', marginTop: 4 }}>
              {'// = '}{vars[0]?.value} - ({vars[0]?.value} × {vars[1]?.value})
            </div>
            <div style={{ color: 'var(--accent-amber)' }}>
              {'// ≈ ₹'}{(parseFloat(vars[0]?.value) * (1 - parseFloat(vars[1]?.value))).toFixed(0) || '?'}
            </div>
          </div>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 'var(--space-3)' }}>
          ↑ Edit the values above. The calculation updates automatically.
        </p>
      </div>
    </div>
  );
}

/* ── Interactive Step (Lab Embed) ──────────── */
function InteractiveStep({ lab }) {
  return (
    <div className={styles.stepBlock}>
      <div className={styles.stepHeader}>
        <span className={styles.stepTypeIcon}>⚗️</span>
        <div>
          <div className={styles.stepType}>Interactive Lab</div>
          <h2 className={styles.stepTitle}>Variable Lab</h2>
        </div>
      </div>
      <p style={{ marginBottom: 'var(--space-6)', color: 'var(--text-secondary)' }}>
        Now it&apos;s your turn. Write real code, run it, and complete the tasks below.
      </p>
      <VariableLab lab={lab} embedded={true} />
    </div>
  );
}

/* ── Connections Step ──────────────────────── */
function ConnectionsStep({ step, concept }) {
  return (
    <div className={styles.stepBlock}>
      <div className={styles.stepHeader}>
        <span className={styles.stepTypeIcon}>🗺️</span>
        <div>
          <div className={styles.stepType}>Real-World Connections</div>
          <h2 className={styles.stepTitle}>{step.title}</h2>
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Variables don&apos;t live only in textbooks. Here&apos;s exactly where you&apos;ll encounter them
        in real applications you&apos;ll build.
      </p>

      <div className={styles.connectionsGrid}>
        {step.connections?.map((conn) => (
          <div key={conn.context} className={`card ${styles.connectionCard}`}>
            <div className={styles.connectionContext}>{conn.context}</div>
            <div className="terminal" style={{ marginTop: 'var(--space-3)' }}>
              <div className="terminal-body" style={{ padding: 'var(--space-3) var(--space-4)', fontSize: '0.8rem' }}>
                <code style={{ background: 'transparent', border: 'none', padding: 0, color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>
                  {conn.example}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.masteryNote}>
        <div className={styles.masteryNoteIcon}>🏆</div>
        <div>
          <strong>Ready for the Challenge?</strong>
          <p>
            You understand variables in theory and have seen them in real code.
            Now prove it by solving the Invoice Calculator challenge independently.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Default Step ──────────────────────────── */
function DefaultStep({ step }) {
  return (
    <div className={styles.stepBlock}>
      <h2>{step.title}</h2>
      <p>{step.content}</p>
    </div>
  );
}
