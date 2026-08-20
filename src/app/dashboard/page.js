'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import styles from './page.module.css';
import { getCurrentUser } from '@/lib/auth';
import { getDashboardStats } from '@/lib/dataService';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = () => {
      const activeUser = getCurrentUser();
      if (activeUser) {
        setUser(activeUser);
        const userStats = getDashboardStats(activeUser.id);
        setStats(userStats);
      } else {
        setUser(null);
        setStats(null);
      }
      setLoading(false);
    };

    loadDashboardData();
    window.addEventListener('auth-change', loadDashboardData);
    return () => window.removeEventListener('auth-change', loadDashboardData);
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className={styles.main} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
          <div className="status-dot status-info" style={{ width: 12, height: 12, marginRight: 8 }} />
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Loading dashboard data...</span>
        </main>
        <Footer />
      </>
    );
  }

  // Onboarding view for unauthenticated users
  if (!user) {
    return (
      <>
        <Navbar />
        <main className={styles.main}>
          <div className="container" style={{ maxWidth: '600px', padding: 'var(--space-12) var(--space-4)', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>📈</div>
            <h1 className="text-accent" style={{ marginBottom: 'var(--space-2)' }}>Track Your Journey</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: 'var(--space-8)', lineHeight: 1.6 }}>
              Create an account or sign in to track your learning progress, persist your lab editor code, and view your coding achievements.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link href="/register" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>
                Create Free Account
              </Link>
              <Link href="/login" className="btn btn-secondary btn-lg" style={{ justifyContent: 'center' }}>
                Sign In to Existing Account
              </Link>
            </div>
          </div>
          <Footer />
        </main>
      </>
    );
  }

  const pct = stats.conceptsTotal > 0 ? Math.round((stats.conceptsCompleted / stats.conceptsTotal) * 100) : 0;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          {/* Header */}
          <div className={styles.header}>
            <div>
              <div className="section-label">Learner Profile</div>
              <h1>Welcome back, <span className="text-accent">{user.name}.</span></h1>
              <p>Continue your personalized software developer pathway.</p>
            </div>
            <div className={styles.streak}>
              <div className={styles.streakIcon} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="struggle" size={24} />
              </div>
              <div>
                <strong>{stats.streak}</strong>
                <span>day streak</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className="section-label">Track Progress</div>
              <div className={styles.statValue}>{stats.conceptsCompleted}/{stats.conceptsTotal}</div>
              <div className="progress-bar" style={{ marginTop: 8 }}>
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className={styles.statSub} style={{ marginTop: 6 }}>{pct}% of curriculum complete</div>
            </div>
            <div className={styles.statCard}>
              <div className="section-label">Active Track</div>
              <div className={styles.statValue} style={{ fontSize: '1.25rem', height: '40px', display: 'flex', alignItems: 'center' }}>
                Programming Thinking
              </div>
              <div className={styles.statSub}>Stage 1 Foundations</div>
            </div>
            <div className={styles.statCard}>
              <div className="section-label">Labs Completed</div>
              <div className={styles.statValue}>{stats.labsCompletedCount}</div>
              <div className={styles.statSub}>Interactive editor trials</div>
            </div>
            <div className={styles.statCard}>
              <div className="section-label">Challenges Solved</div>
              <div className={styles.statValue}>{stats.challengesSolvedCount}</div>
              <div className={styles.statSub}>Independent mastery challenges</div>
            </div>
          </div>

          <div className={styles.grid}>
            {/* Recommendations */}
            <div>
              <div className="section-label" style={{ marginBottom: 'var(--space-4)' }}>Recommended Next</div>
              <div className={styles.recommendations}>
                <Link href="/learn/programming-thinking/variables" className={`card card-hover ${styles.recCard}`}>
                  <div className={styles.recTop}>
                    <h4>Variables</h4>
                    <span className="badge badge-indigo">In Progress</span>
                  </div>
                  <p>Master how values are stored, named, and referenced in memory.</p>
                  <span className={styles.recArrow}>→</span>
                </Link>
                <Link href="/lab/lab-variables" className={`card card-hover ${styles.recCard}`}>
                  <div className={styles.recTop}>
                    <h4>Variable Lab</h4>
                    <span className="badge badge-cyan">Editor Lab</span>
                  </div>
                  <p>Execute real variables and compute invoice pricing inside the sandbox.</p>
                  <span className={styles.recArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="section-label" style={{ marginBottom: 'var(--space-4)' }}>Recent Activity</div>
              <div className="card">
                {stats.recentActivity.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: 'var(--space-8)', color: 'var(--text-muted)' }}>
                    <p style={{ margin: 0 }}>No activity logged yet. Start a lesson to track your path!</p>
                    <Link href="/learn" className="btn btn-primary btn-sm" style={{ marginTop: 'var(--space-4)' }}>
                      Start Learning
                    </Link>
                  </div>
                ) : (
                  stats.recentActivity.map((a, i) => (
                    <div key={i} className={styles.activityItem}>
                      <div className={`status-dot ${a.status === 'complete' ? 'status-success' : 'status-info'}`} />
                      <div>
                        <strong>{a.name}</strong>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                          {a.type.toUpperCase()} · {a.time}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Quick Links */}
              <div className="section-label" style={{ margin: 'var(--space-6) 0 var(--space-4)' }}>Quick Access</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Link href="/learn" className="btn btn-secondary btn-sm" style={{ justifyContent: 'flex-start', gap: '8px' }}>
                  <Icon name="book" size={14} />
                  <span>Browse curriculum map</span>
                </Link>
                <Link href="/lab/lab-variables" className="btn btn-secondary btn-sm" style={{ justifyContent: 'flex-start', gap: '8px' }}>
                  <Icon name="beaker" size={14} />
                  <span>Run invoice simulator</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
