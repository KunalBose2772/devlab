'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { getCurrentUser, logoutUser } from '@/lib/auth';

const NAV_LINKS = [
  { href: '/learn',     label: 'Learn' },
  { href: '/lab/lab-variables', label: 'Lab' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const checkUser = () => {
      setUser(getCurrentUser());
    };
    checkUser();
    window.addEventListener('auth-change', checkUser);
    return () => window.removeEventListener('auth-change', checkUser);
  }, []);

  const handleSignOut = () => {
    logoutUser();
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} id="navbar-logo">
          <span className={styles.logoMark}>▲</span>
          <span className={styles.logoText}>DevLab</span>
        </Link>

        {/* Nav Links */}
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${pathname?.startsWith(link.href) ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={user.avatarUrl}
                alt={user.name}
                style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
              />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{user.name}</span>
              <button onClick={handleSignOut} className="btn btn-ghost btn-md" id="nav-signout">
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost btn-md" id="nav-signin">
                Sign In
              </Link>
              <Link href="/register" className="btn btn-primary btn-md" id="nav-start">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.burger} ${menuOpen ? styles.open : ''}`}>
            <span /><span /><span />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobile}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileDivider} />
          {user ? (
            <button
              className="btn btn-secondary btn-md"
              onClick={() => { setMenuOpen(false); handleSignOut(); }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Sign Out
            </button>
          ) : (
            <Link href="/register" className="btn btn-primary btn-md" onClick={() => setMenuOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
              Get Started
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
