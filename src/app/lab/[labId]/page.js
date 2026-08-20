import Navbar from '@/components/layout/Navbar';
import VariableLab from '@/components/learn/VariableLab';
import { getLab } from '@/data/curriculum';
import { notFound } from 'next/navigation';
import Link from 'next/link';

function serializeLab(lab) {
  if (!lab) return null;
  // Explicitly pick only serializable fields — no functions
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
  const { labId } = await params;
  const lab = getLab(labId);
  if (!lab) return { title: 'Lab Not Found' };
  return { title: `Lab: ${lab.title}`, description: lab.description };
}

export default async function LabPage({ params }) {
  const { labId } = await params;
  const lab = getLab(labId);

  if (!lab) notFound();

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <div style={{
          padding: 'var(--space-4) var(--space-8)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-surface)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}>
          <Link href="/learn" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            Learn
          </Link>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>›</span>
          <Link href={`/learn/programming-thinking/${lab.concept}`} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            {lab.concept.charAt(0).toUpperCase() + lab.concept.slice(1)}
          </Link>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>›</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Lab: {lab.title}
          </span>
        </div>

        <VariableLab lab={serializeLab(lab)} embedded={false} />
      </div>
    </>
  );
}
