import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getAllTracks } from '@/data/curriculum';
import Icon from '@/components/ui/Icon';
import styles from './page.module.css';

export const metadata = {
  title: 'Learn',
  description: 'Browse all learning tracks and start your journey.',
};

export default function LearnPage() {
  const tracks = getAllTracks();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          <div className={styles.header}>
            <div className="section-label">All Tracks</div>
            <h1>What do you <span className="text-accent">want to learn?</span></h1>
            <p>
              Start with Programming Thinking, or jump straight to the topic you
              need. Every concept is interconnected.
            </p>
          </div>

          <div className={styles.trackList}>
            {tracks.map((track) => (
              <Link
                key={track.id}
                href={`/learn/${track.slug}`}
                className={styles.trackRow}
                id={`track-link-${track.slug}`}
              >
                <div className={styles.trackLeft}>
                  <div
                    className={styles.trackIconWrap}
                    style={{ background: `rgba(255,221,0,0.06)`, border: `1px solid rgba(255,221,0,0.15)` }}
                  >
                    <Icon name={track.icon} size={20} />
                  </div>
                  <div>
                    <div className={styles.trackStage}>Stage {track.stage}</div>
                    <h3 className={styles.trackName}>{track.title}</h3>
                    <p className={styles.trackDesc}>{track.description}</p>
                  </div>
                </div>
                <div className={styles.trackRight}>
                  <div className={styles.trackMeta}>
                    <span>{track.modules.length} modules</span>
                  </div>
                  <span className={styles.trackArrow}>→</span>
                </div>
              </Link>
            ))}

            {/* Coming soon items */}
            {COMING_SOON.map((item) => (
              <div key={item.title} className={`${styles.trackRow} ${styles.trackRowDisabled}`}>
                <div className={styles.trackLeft}>
                  <div
                    className={styles.trackIconWrap}
                    style={{ background: `rgba(255,221,0,0.02)`, border: `1px solid rgba(255,221,0,0.06)` }}
                  >
                    <Icon name={item.icon} size={20} style={{ opacity: 0.4 }} />
                  </div>
                  <div>
                    <div className={styles.trackStage}>Stage {item.stage}</div>
                    <h3 className={styles.trackName}>{item.title}</h3>
                    <p className={styles.trackDesc}>{item.description}</p>
                  </div>
                </div>
                <div className={styles.trackRight}>
                  <span className="badge badge-amber">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

const COMING_SOON = [
  { stage: 3, icon: 'oop', title: 'Object-Oriented Programming', description: 'From messy code to elegant class hierarchies.' },
  { stage: 4, icon: 'web', title: 'Web Fundamentals', description: 'HTTP, DNS, servers, requests, and responses.' },
  { stage: 5, icon: 'database', title: 'Databases & SQL', description: 'Relational databases, queries, and relationships.' },
  { stage: 6, icon: 'javascript', title: 'JavaScript Deep Dive', description: 'Closures, async, the event loop, and more.' },
  { stage: 7, icon: 'react', title: 'React', description: 'Components, state, and building UIs that think.' },
  { stage: 8, icon: 'nextjs', title: 'Next.js', description: 'Full-stack React with the App Router.' },
  { stage: 9, icon: 'php', title: 'PHP', description: 'Server-side programming fundamentals.' },
  { stage: 10, icon: 'laravel', title: 'Laravel', description: 'Professional PHP framework for real applications.' },
];
