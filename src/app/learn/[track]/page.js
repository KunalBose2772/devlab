import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getTrack } from '@/data/curriculum';
import { notFound } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { track } = await params;
  const t = getTrack(track);
  if (!t) return { title: 'Not Found' };
  return { title: t.title, description: t.description };
}

export default async function TrackPage({ params }) {
  const { track } = await params;
  const trackData = getTrack(track);

  if (!trackData) notFound();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/learn" className={styles.breadLink}>Learn</Link>
            <span className={styles.sep}>›</span>
            <span>{trackData.title}</span>
          </div>

          {/* Track Header */}
          <div className={styles.header}>
            <div
              className={styles.headerIcon}
              style={{ background: `rgba(255,221,0,0.06)`, border: `1px solid rgba(255,221,0,0.15)` }}
            >
              <Icon name={trackData.icon} size={28} />
            </div>
            <div>
              <div className="section-label">Stage {trackData.stage}</div>
              <h1>{renderDualColorTitle(trackData.title)}</h1>
              <p>{trackData.description}</p>
            </div>
          </div>

          {/* Modules */}
          <div className={styles.modules}>
            {trackData.modules.map((module, mi) => (
              <div key={module.id} className={styles.module}>
                <div className={styles.moduleHeader}>
                  <div className={styles.moduleNum}>{mi + 1}</div>
                  <div>
                    <h3 className={styles.moduleTitle}>{module.title}</h3>
                    <p className={styles.moduleDesc}>{module.concepts.length} concepts</p>
                  </div>
                </div>

                <div className={styles.conceptList}>
                  {module.concepts.map((conceptSlug) => (
                    <Link
                      key={conceptSlug}
                      href={`/learn/${trackData.slug}/${conceptSlug}`}
                      className={styles.conceptItem}
                      id={`concept-${conceptSlug}`}
                    >
                      <div className={styles.conceptLeft}>
                        <div className={styles.conceptIcon}>○</div>
                        <span className={styles.conceptName}>{formatConceptName(conceptSlug)}</span>
                      </div>
                      <span className={styles.conceptArrow}>→</span>
                    </Link>
                  ))}
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

function formatConceptName(slug) {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function renderDualColorTitle(title) {
  if (!title) return '';
  const words = title.split(' ');
  if (words.length <= 1) return <span className="text-accent">{title}</span>;
  const splitIdx = words.length > 2 ? words.length - 2 : words.length - 1;
  const mainPart = words.slice(0, splitIdx).join(' ');
  const accentPart = words.slice(splitIdx).join(' ');
  return (
    <>
      {mainPart} <span className="text-accent">{accentPart}</span>
    </>
  );
}
