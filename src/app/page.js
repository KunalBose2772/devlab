'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';
import { getAllTracks } from '@/data/curriculum';
import Icon from '@/components/ui/Icon';

export default function HomePage() {
  const tracks = getAllTracks();

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ───────────────────────────────── */}
        <section className={styles.hero}>
          {/* Background grid */}
          <div className={styles.grid} aria-hidden="true" />
          <div className={styles.gradientTop} aria-hidden="true" />

          <div className={`container ${styles.heroInner}`}>
            {/* Badge */}
            <div className={styles.badge}>
              <span className="status-dot status-success" />
              <span>Interactive Learning Platform</span>
              <span className={styles.badgeDivider} />
              <span className={styles.badgeNew}>Beta</span>
            </div>

            {/* Headline */}
            <h1 className={styles.headline}>
              Don&apos;t memorize.<br />
              <span className={styles.accentText}>Understand</span> it.
            </h1>

            <p className={styles.sub}>
              A software-development laboratory where you learn by solving real problems,
              breaking things, and debugging your way to mastery.
            </p>

            {/* CTAs */}
            <div className={styles.heroCtas}>
              <Link href="/learn/programming-thinking/variables" className="btn btn-primary btn-lg" id="hero-start">
                Start with Variables →
              </Link>
              <Link href="/learn" className="btn btn-secondary btn-lg" id="hero-browse">
                Browse Curriculum
              </Link>
            </div>

            {/* Stats row */}
            <div className={styles.statsRow}>
              {STATS.map((s, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code preview */}
          <div className={`container ${styles.heroCode}`}>
            <CodePreview />
          </div>
        </section>

        {/* ── PROBLEM STATEMENT ─────────────────── */}
        <section className={styles.problem}>
          <div className="container">
            <div className={styles.problemGrid}>
              <div className={styles.problemLeft}>
                <div className="section-label">The Problem</div>
                <h2>You can build it. <span className="text-accent">But can you explain it?</span></h2>
                <p>
                  Most developers who use AI tools can generate applications
                  without understanding the underlying concepts. The moment
                  something breaks — they&apos;re stuck.
                </p>
                <p style={{ marginTop: 12 }}>
                  DevLab fixes the gap between <em>using</em> code and
                  <em> understanding</em> code.
                </p>
              </div>
              <div className={styles.problemRight}>
                <div className={styles.beforeAfter}>
                  <div className={styles.beforeCard}>
                    <div className={styles.baLabel}>Before DevLab</div>
                    {BEFORE.map((t) => (
                      <div key={t} className={styles.baItem}>
                        <span className={styles.baX}>✗</span>{t}
                      </div>
                    ))}
                  </div>
                  <div className={styles.afterCard}>
                    <div className={styles.baLabel} style={{ color: 'var(--yellow)' }}>After DevLab</div>
                    {AFTER.map((t) => (
                      <div key={t} className={styles.baItem}>
                        <span className={styles.baCheck}>✓</span>{t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────── */}
        <section className={styles.how}>
          <div className="container">
            <div className={styles.howHeader}>
              <div className="section-label">Method</div>
              <h2>The <span className="text-accent">Learning Cycle</span></h2>
            </div>
            <div className={styles.cycleGrid}>
              {CYCLE.map((step, i) => {
                const isFeatured = i === 6; // Mastery is step 7 (index 6)
                return (
                  <div
                    key={step.label}
                    className={`${styles.cycleCard} ${isFeatured ? styles.cycleCardFeatured : ''}`}
                  >
                    <div className={isFeatured ? styles.featuredLeft : ''}>
                      <div className={styles.cycleCardHeader}>
                        <div className={styles.cycleCardIconWrap}>
                          <Icon name={step.icon} size={20} />
                        </div>
                        <span className={styles.cycleCardNum}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      <div style={{ marginTop: 12 }}>
                        <h3 className={styles.cycleCardTitle}>{step.label}</h3>
                        <div className={styles.cycleCardSubtitle}>{step.subtitle}</div>
                        <p className={styles.cycleCardDesc} style={{ marginTop: 8 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`${styles.cycleCardVisual} ${isFeatured ? styles.featuredRight : ''}`}>
                      {step.visual}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CURRICULUM ────────────────────────── */}
        <section className={styles.curriculum}>
          <div className="container">
            <div className={styles.curriculumHead}>
              <div>
                <div className="section-label">Curriculum</div>
                <h2>From zero <span className="text-accent">to full-stack</span></h2>
              </div>
              <Link href="/learn" className="btn btn-ghost btn-sm">
                View all →
              </Link>
            </div>

            <div className={styles.trackTable}>
              {tracks.map((track) => (
                <Link
                  href={`/learn/${track.slug}`}
                  key={track.id}
                  className={styles.trackRow}
                  id={`track-${track.slug}`}
                >
                  <div className={styles.trackLeft}>
                    <div className={styles.trackNum}>{String(track.stage).padStart(2, '0')}</div>
                    <div className={styles.trackIcon}>
                      <Icon name={track.icon} size={22} />
                    </div>
                    <div>
                      <div className={styles.trackName}>{track.title}</div>
                      <div className={styles.trackDesc}>{track.description}</div>
                    </div>
                  </div>
                  <div className={styles.trackRight}>
                    <span className={styles.trackMods}>{track.modules.length} modules</span>
                    <span className={styles.trackArrow}>→</span>
                  </div>
                </Link>
              ))}

              {COMING_SOON.map((item) => (
                <div key={item.title} className={`${styles.trackRow} ${styles.trackDisabled}`}>
                  <div className={styles.trackLeft}>
                    <div className={styles.trackNum}>{String(item.stage).padStart(2, '0')}</div>
                    <div className={styles.trackIcon}>
                      <Icon name={item.icon} size={22} />
                    </div>
                    <div>
                      <div className={styles.trackName}>{item.title}</div>
                      <div className={styles.trackDesc}>{item.description}</div>
                    </div>
                  </div>
                  <div className={styles.trackRight}>
                    <span className="badge badge-white">Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRINCIPLES ────────────────────────── */}
        <section className={styles.principles}>
          <div className="container">
            <div className={styles.principlesHead}>
              <div className="section-label">Principles</div>
              <h2>Why it <span className="text-accent">works</span></h2>
            </div>
            <div className={styles.principleGrid}>
              {PRINCIPLES.map((p) => (
                <div key={p.title} className={styles.principleCard}>
                  <div className={styles.principleIcon}>
                    <Icon name={p.icon} size={28} />
                  </div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ────────────────────────── */}
        <section className={styles.ctaBanner}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div className={styles.ctaLeft}>
                <div className="section-label">Start Now — Free</div>
                <h2>Learn variables <span className="text-accent">in 25 minutes.</span></h2>
                <p>The first lesson is live. No account needed.</p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/learn/programming-thinking/variables" className="btn btn-primary btn-lg" id="cta-start">
                  Begin: Variables →
                </Link>
                <Link href="/lab/lab-variables" className="btn btn-ghost btn-lg" id="cta-lab">
                  ⚗ Open Lab
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </main>
    </>
  );
}

/* ── Code Preview Component ─────────────── */
function CodePreview() {
  return (
    <div className={styles.codePreview}>
      <div className={styles.codeHeader}>
        <div className={styles.codeDots}>
          <span style={{ background: '#FF5F57' }} />
          <span style={{ background: '#FEBC2E' }} />
          <span style={{ background: '#28C840' }} />
        </div>
        <span className={styles.codeFileName}>variables.js — DevLab</span>
      </div>
      <div className={styles.codeBody}>
        <div className={styles.codeLine}>
          <span className={styles.codeLineNum}>1</span>
          <span><span className={styles.kw}>let</span> <span className={styles.id}>price</span> = <span className={styles.num}>2999</span>;</span>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.codeLineNum}>2</span>
          <span><span className={styles.kw}>let</span> <span className={styles.id}>discount</span> = <span className={styles.num}>0.10</span>;</span>
        </div>
        <div className={styles.codeLine}>
          <span className={styles.codeLineNum}>3</span>
          <span><span className={styles.kw}>let</span> <span className={styles.id}>shipping</span> = <span className={styles.num}>99</span>;</span>
        </div>
        <div className={styles.codeLine} style={{ opacity: 0.4 }}>
          <span className={styles.codeLineNum}>4</span>
          <span />
        </div>
        <div className={styles.codeLine}>
          <span className={styles.codeLineNum}>5</span>
          <span><span className={styles.kw}>let</span> <span className={styles.id}>total</span> = price - (price * discount) + shipping;</span>
        </div>
        <div className={styles.codeLine} style={{ opacity: 0.4 }}>
          <span className={styles.codeLineNum}>6</span>
          <span />
        </div>
        <div className={styles.codeLine}>
          <span className={styles.codeLineNum}>7</span>
          <span>console.<span className={styles.fn}>log</span>(<span className={styles.str}>&quot;Total: ₹&quot;</span> + total);</span>
        </div>
      </div>
      <div className={styles.codeOutput}>
        <span className={styles.outputPrompt}>&gt;</span>
        <span className={styles.outputText}>Total: ₹2,789.10</span>
        <span className={styles.cursor} />
      </div>
    </div>
  );
}

/* ── Data ───────────────────────────────── */
const STATS = [
  { num: '13',   label: 'Learning Stages' },
  { num: '100+', label: 'Interactive Labs' },
  { num: 'Real', label: 'Code Execution' },
  { num: 'Free', label: 'To Start' },
];

const BEFORE = ['Can generate code with AI', 'Cannot explain what it does', 'Lost when something breaks', 'Dependent on AI for every step'];
const AFTER  = ['Understand why code works', 'Can debug independently', 'See concepts across frameworks', 'Build without AI as a crutch'];

const CYCLE = [
  {
    icon: 'question',
    label: 'Problem',
    subtitle: 'Start with a question, not an answer.',
    desc: 'Instead of starting with abstract syntax rules, we present a real-world software problem or limitation. You understand why a concept exists before learning how to write it.',
    visual: (
      <>
        <div className={styles.visualHeader}>
          <span>system_architecture.svg</span>
          <span>100%</span>
        </div>
        <div className={styles.visualBody}>
          <div style={{ color: 'var(--yellow)', fontWeight: 700 }}>[Scenario: E-Commerce Invoice]</div>
          <div style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
            &quot;We need to display a subtotal, calculate a 10% tax rate, and show the final price. But we don&apos;t have a way to save these values in memory as they calculate...&quot;
          </div>
          <div style={{ color: 'var(--text-muted)', marginTop: 8, fontStyle: 'italic' }}>
            How do we store this data dynamically?
          </div>
        </div>
      </>
    )
  },
  {
    icon: 'pen',
    label: 'Attempt',
    subtitle: 'Try to solve it with what you know.',
    desc: 'You write basic code or guess the solution first. Actively trying to solve a problem — even if you fail — primes your brain to absorb the correct mental model.',
    visual: (
      <>
        <div className={styles.visualHeader}>
          <span>first_attempt.js</span>
          <span>Drafting...</span>
        </div>
        <div className={styles.visualBody}>
          <div><span style={{ color: '#E2A4FF' }}>let</span> finalPrice = <span style={{ color: 'var(--text-muted)' }}>???</span>;</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 8 }}>
            // Writing your first thoughts
          </div>
          <div style={{ color: 'var(--yellow)', marginTop: 4 }}>
            &gt; Trying to compute: 2999 * 0.10 ... but where do we store the intermediate result?
          </div>
        </div>
      </>
    )
  },
  {
    icon: 'struggle',
    label: 'Struggle',
    subtitle: 'Lean into the friction.',
    desc: 'You encounter compile errors or buggy logic. This productive struggle is the most critical phase of learning — it builds actual neural connections that memorization cannot.',
    visual: (
      <>
        <div className={styles.visualHeader}>
          <span>terminal.sh</span>
          <span>Exit Code 1</span>
        </div>
        <div className={styles.visualBody}>
          <div style={{ color: 'var(--error)' }}>
            ReferenceError: subtotal is not defined
          </div>
          <div style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
            &nbsp;&nbsp;at calculateInvoice (invoice.js:4:12)
          </div>
          <div style={{ color: 'var(--yellow)', marginTop: 8 }}>
            💡 Why did this fail? Oh! We tried to use &apos;subtotal&apos; before defining it.
          </div>
        </div>
      </>
    )
  },
  {
    icon: 'lightbulb',
    label: 'Discovery',
    subtitle: 'Introducing the ideal abstraction.',
    desc: 'We introduce the concept (e.g., Variables) as the missing key. The syntax clicks instantly because you have already experienced the exact problem it solves.',
    visual: (
      <>
        <div className={styles.visualHeader}>
          <span>core_concept.md</span>
          <span>Learned</span>
        </div>
        <div className={styles.visualBody}>
          <div style={{ color: 'var(--yellow)', fontWeight: 700 }}>Variables = Storing Values</div>
          <div style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
            Think of a variable as a labeled storage box in the computer&apos;s RAM.
          </div>
          <div style={{ marginTop: 8 }}>
            <span style={{ color: '#E2A4FF' }}>const</span> <span style={{ color: '#79C0FF' }}>subtotal</span> = <span style={{ color: '#F8C555' }}>2999</span>;
          </div>
        </div>
      </>
    )
  },
  {
    icon: 'beaker',
    label: 'Lab',
    subtitle: 'Run and break live code.',
    desc: 'Step into the interactive editor sandbox. Write code, trigger console logs, and run assertions. Play with variables directly to understand their bounds.',
    visual: (
      <>
        <div className={styles.visualHeader}>
          <span>sandbox.js</span>
          <span>Running...</span>
        </div>
        <div className={styles.visualBody}>
          <div>console.<span style={{ color: '#79C0FF' }}>log</span>(<span style={{ color: 'var(--success)' }}>&quot;Subtotal is:&quot;</span>, subtotal);</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 6 }}>
            // Press &apos;Run Code&apos; to execute in sandbox
          </div>
          <div style={{ color: 'var(--success)', marginTop: 6 }}>
            &gt; Subtotal is: 2999
          </div>
        </div>
      </>
    )
  },
  {
    icon: 'target',
    label: 'Challenge',
    subtitle: 'Test your understanding.',
    desc: 'Verify your new skills on real programming tasks. Write code to pass a rigorous set of automated unit tests, matching production engineering standards.',
    visual: (
      <>
        <div className={styles.visualHeader}>
          <span>test_runner.spec.js</span>
          <span>2 / 3 Passed</span>
        </div>
        <div className={styles.visualBody}>
          <div style={{ color: 'var(--success)' }}>✓ should declare variable &apos;subtotal&apos;</div>
          <div style={{ color: 'var(--success)' }}>✓ should assign correct base price</div>
          <div style={{ color: 'var(--error)' }}>✗ should apply 10% tax rate dynamically</div>
        </div>
      </>
    )
  },
  {
    icon: 'trophy',
    label: 'Mastery',
    subtitle: 'Bridge to the real world.',
    desc: 'Finally, see how this basic concept translates directly to advanced frameworks (React State, SQL databases, API endpoints) in production applications.',
    visual: (
      <>
        <div className={styles.visualHeader}>
          <span>real_world_application.jsx</span>
          <span>Production</span>
        </div>
        <div className={styles.visualBody}>
          <div><span style={{ color: '#E2A4FF' }}>const</span> [price, setPrice] = useState(<span style={{ color: '#F8C555' }}>2999</span>);</div>
          <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>
            // The exact same variable concept, powering React states!
          </div>
        </div>
      </>
    )
  }
];

const PRINCIPLES = [
  { icon: 'microscope', title: 'Problem First', desc: 'Every concept begins with a real problem. The solution reveals itself through struggle, not memorization.' },
  { icon: 'terminal', title: 'Write Real Code', desc: 'Labs execute real JavaScript in a sandbox. You run, break, and fix actual code — not simulations.' },
  { icon: 'bug', title: 'Embrace Failure', desc: 'Errors are lessons. The platform explains what went wrong and guides you toward the cause.' },
  { icon: 'network', title: 'Connected Concepts', desc: 'Every concept shows where it appears — React, PHP, Laravel, SQL, Next.js — in real applications.' },
  { icon: 'cpu', title: 'AI that Teaches', desc: 'The AI tutor asks guiding questions. It does not solve challenges for you. You do the thinking.' },
  { icon: 'chart', title: 'Mastery, Not Clicks', desc: 'Completion is not mastery. You prove understanding through independent challenges and variations.' },
];

const COMING_SOON = [
  { stage: 3, icon: 'oop', title: 'Object-Oriented Programming', description: 'From messy code to elegant class hierarchies.' },
  { stage: 4, icon: 'web', title: 'Web Fundamentals', description: 'HTTP, DNS, servers, requests, and responses.' },
  { stage: 5, icon: 'database', title: 'Databases & SQL', description: 'Relational databases, queries, and relationships.' },
  { stage: 6, icon: 'javascript', title: 'JavaScript Deep Dive', description: 'Closures, async, the event loop, and more.' },
  { stage: 7, icon: 'react', title: 'React', description: 'Components, state, and building UIs that think.' },
  { stage: 8, icon: 'nextjs', title: 'Next.js', description: 'Full-stack React with the App Router.' },
  { stage: 9, icon: 'php', title: 'PHP', description: 'Server-side programming fundamentals.' },
  { stage: 10, icon: 'laravel', title: 'Laravel', description: 'Professional PHP framework for real applications.' },
  { stage: 11, icon: 'wrench', title: 'Software Engineering', description: 'Git, testing, architecture, and deployment.' },
  { stage: 12, icon: 'rocket', title: 'Full-Stack Projects', description: 'Build complete production applications.' },
];
