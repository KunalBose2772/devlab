import React from 'react';

/**
 * Premium Vercel-style SVG Icon library
 * Uses yellow accent color. Stroke-based, light and crisp.
 */
export default function Icon({ name, size = 20, className = '', style = {} }) {
  const icons = {
    // Stage / Track Icons
    foundations: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
    'programming-thinking': (
      <>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
      </>
    ),
    data: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </>
    ),
    oop: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
    web: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </>
    ),
    javascript: (
      <>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </>
    ),
    react: (
      <>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    nextjs: (
      <>
        <polygon points="12 2 22 22 2 22" />
      </>
    ),
    php: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="7" y1="8" x2="11" y2="8" />
        <line x1="7" y1="12" x2="11" y2="12" />
        <line x1="7" y1="16" x2="11" y2="16" />
        <polyline points="14 8 17 12 14 16" />
      </>
    ),
    laravel: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    wrench: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
      </>
    ),
    rocket: (
      <>
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
        <path d="M12 5l-8 8v4h4l8-8" />
        <path d="M19 5c1.5-1.5 2-3.5 2-3.5s-2 .5-3.5 2" />
        <line x1="9" y1="15" x2="11" y2="17" />
      </>
    ),

    // Learning Cycle Steps
    question: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20" />
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
      </>
    ),
    pen: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </>
    ),
    struggle: (
      <>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </>
    ),
    lightbulb: (
      <>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 7 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </>
    ),
    beaker: (
      <>
        <path d="M16.3 11 14 6V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3L7.7 11A6 6 0 0 0 5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3a6 6 0 0 0-2.7-5z" />
        <line x1="9" y1="3" x2="15" y2="3" />
        <line x1="6" y1="14" x2="18" y2="14" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    trophy: (
      <>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
        <path d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" />
      </>
    ),

    // Principles
    microscope: (
      <>
        <path d="M12 22a7 7 0 0 0 7-7h-2a5 5 0 0 1-5-5V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v6a7 7 0 0 0 7 7z" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="7" y1="14" x2="17" y2="14" />
        <line x1="9" y1="22" x2="15" y2="22" />
      </>
    ),
    terminal: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="m7 8 4 4-4 4" />
        <path d="m12 16h5" />
      </>
    ),
    bug: (
      <>
        <rect x="6" y="7" width="12" height="12" rx="6" />
        <path d="m18 13 4 1" />
        <path d="m18 9 4-1" />
        <path d="m18 17 4 2" />
        <path d="m6 13-4 1" />
        <path d="m6 9-4-1" />
        <path d="m6 17-4 2" />
        <path d="M9 7V4a3 3 0 0 1 6 0v3" />
      </>
    ),
    network: (
      <>
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M12 8v8" />
        <path d="M5 16v-4h14v4" />
      </>
    ),
    cpu: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </>
    ),
    chart: (
      <>
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
        <path d="M3 20h18" />
      </>
    ),
  };

  const path = icons[name] || icons['question'];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{
        color: 'var(--yellow)',
        flexShrink: 0,
        ...style,
      }}
    >
      {path}
    </svg>
  );
}
