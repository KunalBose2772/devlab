'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import styles from './ConceptEngine.module.css';
import VariableLab from './VariableLab';
import { getCurrentUser } from '@/lib/auth';
import { saveConceptProgress, getConceptProgress } from '@/lib/dataService';

const STEP_ICONS = {
  problem: 'question',
  explanation: 'book',
  interactive: 'beaker',
  connections: 'network',
};

function getStepText(step, concept) {
  if (!step) return '';
  let text = '';
  
  if (step.type === 'problem') {
    text = `Problem. ${step.title}. ${step.content}`;
  } else if (step.type === 'explanation') {
    const cleanContent = step.content.replace(/```[\s\S]*?```/g, 'Code example omitted.');
    text = `Explanation. ${step.title}. ${cleanContent}`;
  } else if (step.type === 'connections') {
    text = `Real-World Connections. ${step.title}. `;
    if (step.connections) {
      step.connections.forEach(conn => {
        text += `For ${conn.context}, for example: ${conn.example}. `;
      });
    }
  } else {
    text = `${step.title || ''}. ${step.content || ''}`;
  }
  
  return text.replace(/\*\*|\*|`/g, '');
}

export default function ConceptEngine({ concept, lab }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = concept.steps || [];
  const totalSteps = steps.length;
  const progress = totalSteps > 0 ? ((activeStep + 1) / totalSteps) * 100 : 0;

  // TTS State
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVoiceGender, setSelectedVoiceGender] = useState('female');
  const [voices, setVoices] = useState([]);
  
  // User Journey State
  const [user, setUser] = useState(null);

  // Load user session and saved progress
  useEffect(() => {
    const activeUser = getCurrentUser();
    if (activeUser) {
      setUser(activeUser);
      const saved = getConceptProgress(activeUser.id, concept.slug);
      if (saved && saved.stepsCompleted > 0) {
        const stepIndex = Math.min(saved.stepsCompleted - 1, steps.length - 1);
        setActiveStep(stepIndex >= 0 ? stepIndex : 0);
      }
    }
  }, [concept.slug, steps.length]);

  // Save progress when step changes
  useEffect(() => {
    if (user && concept.slug && totalSteps > 0) {
      saveConceptProgress(user.id, concept.slug, activeStep + 1, totalSteps);
    }
  }, [activeStep, user, concept.slug, totalSteps]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    function loadVoices() {
      const allVoices = window.speechSynthesis.getVoices();
      const enVoices = allVoices.filter(v => v.lang.startsWith('en'));
      setVoices(enVoices);
    }

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Cancel speech on step change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  }, [activeStep]);

  function goNext() {
    if (activeStep < totalSteps - 1) setActiveStep((s) => s + 1);
  }
  function goPrev() {
    if (activeStep > 0) setActiveStep((s) => s - 1);
  }

  const step = steps[activeStep];

  function handlePlayPause() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isSpeaking) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
      return;
    }

    const textToRead = getStepText(step, concept);
    if (!textToRead) return;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    // Select the best en-IN (English India) voice matching gender
    const enInVoices = voices.filter(v => v.lang.toLowerCase().includes('in'));
    let chosenVoice = null;

    if (selectedVoiceGender === 'female') {
      chosenVoice = enInVoices.find(v => 
        v.name.toLowerCase().includes('heera') || 
        v.name.toLowerCase().includes('veena') || 
        v.name.toLowerCase().includes('priya') || 
        v.name.toLowerCase().includes('neerja') || 
        v.name.toLowerCase().includes('female') ||
        v.name.toLowerCase().includes('google')
      );
    } else {
      chosenVoice = enInVoices.find(v => 
        v.name.toLowerCase().includes('ravi') || 
        v.name.toLowerCase().includes('prabhat') || 
        v.name.toLowerCase().includes('male')
      );
    }

    if (!chosenVoice && enInVoices.length > 0) {
      chosenVoice = enInVoices[0];
    }

    if (!chosenVoice && voices.length > 0) {
      chosenVoice = voices.find(v => v.name.toLowerCase().includes(selectedVoiceGender)) || voices[0];
    }

    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    setIsSpeaking(true);
    setIsPaused(false);
    window.speechSynthesis.speak(utterance);
  }

  function handleStop() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  }

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

        {/* TTS Player Audio Control */}
        {step && step.type !== 'interactive' && (
          <div className={styles.stepContent} style={{ paddingBottom: 0 }}>
            <div className={`${styles.ttsBar} ${isSpeaking && !isPaused ? styles.ttsBarSpeaking : ''}`}>
              <div className={styles.ttsControls}>
                <button
                  className={styles.ttsPlayBtn}
                  onClick={handlePlayPause}
                  title={isSpeaking && !isPaused ? 'Pause Speech' : 'Play Speech'}
                >
                  {isSpeaking && !isPaused ? '⏸' : '▶'}
                </button>
                {isSpeaking && (
                  <button
                    className={styles.ttsPlayBtn}
                    style={{ background: 'var(--border-default)', color: 'var(--text-primary)' }}
                    onClick={handleStop}
                    title="Stop Speech"
                  >
                    ⏹
                  </button>
                )}
                <select
                  className={styles.ttsVoiceSelect}
                  value={selectedVoiceGender}
                  onChange={(e) => setSelectedVoiceGender(e.target.value)}
                >
                  <option value="female">🙋‍♀️ Indian Female Voice</option>
                  <option value="male">🙋‍♂️ Indian Male Voice</option>
                </select>
              </div>

              <div className={styles.ttsInfo}>
                <div className={`${styles.ttsStatus} ${isSpeaking && !isPaused ? styles.ttsStatusActive : ''}`}>
                  <span className={styles.ttsStatusDot} />
                  <span>{isSpeaking ? (isPaused ? 'Paused' : 'Reading lesson...') : 'Listen to this lesson'}</span>
                  {isSpeaking && !isPaused && (
                    <div className={styles.ttsWave}>
                      <div className={styles.ttsWaveBar} />
                      <div className={styles.ttsWaveBar} />
                      <div className={styles.ttsWaveBar} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className={styles.stepContent} key={step?.id} style={{ paddingTop: step && step.type !== 'interactive' ? 0 : '40px' }}>
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
