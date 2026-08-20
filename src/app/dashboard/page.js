import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import styles from './page.module.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Your learning progress and activity.',
};

// Mock data — will be replaced with real DB calls in Phase 2
const MOCK_PROGRESS = {
  currentTrack: 'Programming Thinking',
  currentConcept: 'Variables',
  streak: 3,
  conceptsCompleted: 0,
  conceptsTotal: 12,
  recentActivity: [
    { type: 'lab', concept: 'Variables', time: 'Just now', status: 'in-progress' },
  ],
  recommendations: [
    { title: 'Variables', desc: 'Your current lesson', href: '/learn/programming-thinking/variables', badge: 'In Progress', badgeClass: 'badge-indigo' },
    { title: 'Variable Lab', desc: 'Practice in the editor', href: '/lab/lab-variables', badge: 'Lab', badgeClass: 'badge-cyan' },
    { title: 'Invoice Challenge', desc: 'Test your understanding', href: '/challenge/challenge-variables-1', badge: 'Challenge', badgeClass: 'badge-amber' },
  ],
};

export default function DashboardPage() {
  const p = MOCK_PROGRESS;
  const pct = Math.round((p.conceptsCompleted / p.conceptsTotal) * 100);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          {/* Header */}
          <div className={styles.header}>
            <div>
              <div className="section-label">Dashboard</div>
              <h1>Welcome <span className="text-accent">back.</span></h1>
              <p>Continue where you left off.</p>
            </div>
            <div className={styles.streak}>
              <div className={styles.streakIcon} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="struggle" size={24} />
              </div>
              <div>
                <strong>{p.streak}</strong>
                <span>day streak</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className="section-label">Current Track</div>
              <div className={styles.statValue}>{p.currentTrack}</div>
              <div className={styles.statSub}>Concept: {p.currentConcept}</div>
            </div>
            <div className={styles.statCard}>
              <div className="section-label">Progress</div>
              <div className={styles.statValue}>{p.conceptsCompleted}/{p.conceptsTotal}</div>
              <div className="progress-bar" style={{ marginTop: 8 }}>
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className={styles.statSub} style={{ marginTop: 6 }}>{pct}% complete</div>
            </div>
            <div className={styles.statCard}>
              <div className="section-label">Labs Completed</div>
              <div className={styles.statValue}>0</div>
              <div className={styles.statSub}>Start your first lab</div>
            </div>
            <div className={styles.statCard}>
              <div className="section-label">Challenges Solved</div>
              <div className={styles.statValue}>0</div>
              <div className={styles.statSub}>No challenges attempted</div>
            </div>
          </div>

          <div className={styles.grid}>
            {/* Recommendations */}
            <div>
              <div className="section-label" style={{ marginBottom: 'var(--space-4)' }}>Recommended Next</div>
              <div className={styles.recommendations}>
                {p.recommendations.map((r, i) => (
                  <Link key={i} href={r.href} className={`card card-hover ${styles.recCard}`} id={`rec-${i}`}>
                    <div className={styles.recTop}>
                      <h4>{r.title}</h4>
                      <span className={`badge ${r.badgeClass}`}>{r.badge}</span>
                    </div>
                    <p>{r.desc}</p>
                    <span className={styles.recArrow}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="section-label" style={{ marginBottom: 'var(--space-4)' }}>Recent Activity</div>
              <div className="card">
                {p.recentActivity.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: 'var(--space-8)', color: 'var(--text-muted)' }}>
                    <p>No activity yet. Start learning!</p>
                    <Link href="/learn" className="btn btn-primary btn-sm" style={{ marginTop: 'var(--space-4)' }}>
                      Start Learning
                    </Link>
                  </div>
                ) : (
                  p.recentActivity.map((a, i) => (
                    <div key={i} className={styles.activityItem}>
                      <div className={`status-dot ${a.status === 'complete' ? 'status-success' : 'status-info'}`} />
                      <div>
                        <strong>{a.concept}</strong>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>{a.type} · {a.time}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Quick Links */}
              <div className="section-label" style={{ margin: 'var(--space-6) 0 var(--space-4)' }}>Quick Access</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {[
                  { label: 'Browse all tracks', href: '/learn', icon: 'book' },
                  { label: 'Variable Lab', href: '/lab/lab-variables', icon: 'beaker' },
                  { label: 'Invoice Challenge', href: '/challenge/challenge-variables-1', icon: 'target' },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="btn btn-secondary btn-sm" style={{ justifyContent: 'flex-start', gap: '8px' }}>
                    <Icon name={l.icon} size={14} />
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
