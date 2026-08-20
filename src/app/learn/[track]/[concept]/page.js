import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ConceptEngine from '@/components/learn/ConceptEngine';
import { getConcept, getLab } from '@/data/curriculum';
import { notFound } from 'next/navigation';

import styles from './page.module.css';

// Strip non-serializable fields (functions) from data before passing to Client Components
function serializeConcept(concept) {
  if (!concept) return null;
  return {
    ...concept,
    steps: concept.steps?.map((step) => ({ ...step })),
  };
}

function serializeLab(lab) {
  if (!lab) return null;
  // Explicitly pick only serializable fields — do NOT spread
  return {
    id: lab.id,
    title: lab.title,
    concept: lab.concept,
    description: lab.description,
    language: lab.language,
    starterCode: lab.starterCode,
    tasks: lab.tasks,
    hints: lab.hints,
    solution: lab.solution,
    tests: lab.tests?.map(({ id, description, hidden }) => ({ id, description, hidden })),
  };
}

export async function generateMetadata({ params }) {
  const { concept } = await params;
  const conceptData = getConcept(concept);
  if (!conceptData) return { title: 'Not Found' };
  return {
    title: conceptData.title,
    description: conceptData.subtitle,
  };
}

export default async function ConceptPage({ params }) {
  const { track, concept } = await params;
  const conceptData = getConcept(concept);

  if (!conceptData) {
    notFound();
  }

  const labData = conceptData.labId ? getLab(conceptData.labId) : null;
  const safeConcept = serializeConcept(conceptData);
  const safeLab = serializeLab(labData);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <div className="container">
            <Link href="/learn" className={styles.breadLink}>Learn</Link>
            <span className={styles.breadSep}>›</span>
            <Link href={`/learn/${track}`} className={styles.breadLink}>
              {track.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </Link>
            <span className={styles.breadSep}>›</span>
            <span className={styles.breadCurrent}>{conceptData.title}</span>
          </div>
        </div>

        {/* Concept Header */}
        <div className={styles.conceptHeader}>
          <div className="container">
            <div className={styles.headerMeta}>
              <span className="badge badge-purple">Stage {conceptData.stage}</span>
              <span className="badge badge-indigo">{conceptData.difficulty}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                ~{conceptData.estimatedMinutes} min
              </span>
            </div>
            <h1>{conceptData.title}</h1>
            <p className={styles.headerSubtitle}>{conceptData.subtitle}</p>
          </div>
        </div>

        {/* Concept Engine */}
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <ConceptEngine concept={safeConcept} lab={safeLab} />
        </div>
        <Footer />
      </main>
    </>
  );
}
