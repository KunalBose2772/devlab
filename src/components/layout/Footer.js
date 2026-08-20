'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          
          {/* Column 1: Branding */}
          <div className={styles.footerColBrand}>
            <div className={styles.footerLogo}>
              <span className={styles.footerMark}>▲</span>
              <span>DevLab</span>
            </div>
            <p className={styles.footerTagline}>
              Don&apos;t memorize programming. Understand it by building it.
            </p>
            <div className={styles.systemStatus}>
              <span className="status-dot status-success" />
              <span>All systems operational</span>
            </div>
          </div>

          {/* Column 2: Track Catalog */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Curriculum</h4>
            <ul className={styles.footerLinksList}>
              <li><Link href="/learn/programming-thinking">Programming Thinking</Link></li>
              <li><Link href="/learn/programming-thinking/variables">Variables &amp; Types</Link></li>
              <li><Link href="/learn/programming-thinking/constants">Constants</Link></li>
              <li><Link href="/learn/programming-thinking/data-types">Data Types</Link></li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Platform</h4>
            <ul className={styles.footerLinksList}>
              <li><Link href="/dashboard">User Dashboard</Link></li>
              <li><Link href="/learn">Course Catalog</Link></li>
              <li><Link href="/login">Account Access</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Info */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Developer</h4>
            <ul className={styles.footerLinksList}>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub Repository</a></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} DevLab Inc. All rights reserved.
          </p>
          <div className={styles.footerThemeBadge}>
            <span>Vercel-inspired Design System</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
