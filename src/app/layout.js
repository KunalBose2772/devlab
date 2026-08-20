import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'DevLab — Interactive Developer Learning',
    template: '%s | DevLab',
  },
  description:
    'An interactive software-development laboratory where you understand programming by solving real problems and building real systems.',
  keywords: ['programming', 'learn to code', 'interactive coding', 'javascript', 'react', 'next.js', 'web development'],
  openGraph: {
    title: 'DevLab — Interactive Developer Learning',
    description: "Don't memorize programming. Understand it by building it.",
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

