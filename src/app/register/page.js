'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { registerUser } from '@/lib/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Artificial timing delay for premium user registration state feel
    await new Promise((r) => setTimeout(r, 650));

    const result = registerUser(name, email, password);
    setLoading(false);

    if (result.success) {
      router.push('/learn'); // Direct onboarding path
    } else {
      setError(result.error || 'Failed to create account. Please check parameters.');
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-base)', padding: 'var(--space-12) var(--space-4)' }}>
        <div style={{
          width: '100%',
          maxWidth: '440px',
          background: 'rgba(17, 18, 24, 0.65)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-8) var(--space-6)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <span style={{ fontSize: '2rem' }}>🚀</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, margin: '8px 0 4px', letterSpacing: '-0.02em' }}>
              Create Your <span className="text-accent">Account</span>
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Start your step-by-step developer journey</p>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{
              background: 'rgba(244, 63, 94, 0.1)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 14px',
              fontSize: '0.8rem',
              color: 'var(--accent-rose)',
              marginBottom: 'var(--space-4)',
              lineHeight: 1.5,
            }}>
              ⚠️ {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: 6, fontWeight: 600 }}>
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="input"
                style={{ width: '100%', background: 'var(--bg-elevated)', borderColor: 'var(--border-subtle)' }}
                placeholder="Alex Carter"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: 6, fontWeight: 600 }}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="input"
                style={{ width: '100%', background: 'var(--bg-elevated)', borderColor: 'var(--border-subtle)' }}
                placeholder="alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: 6, fontWeight: 600 }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="input"
                style={{ width: '100%', background: 'var(--bg-elevated)', borderColor: 'var(--border-subtle)' }}
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              id="register-submit-btn"
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-2)' }}
            >
              {loading ? 'Setting Up Profile...' : 'Get Started Free'}
            </button>
          </form>

          {/* Link to login */}
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: 'var(--yellow)', fontWeight: 600, textDecoration: 'underline' }}>
              Sign in
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
