import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Construct.ai — We Construct AI Solutions',
  description: 'Enterprise-grade software, built by AI agent armies and elite human architects. Delivered in weeks, not months.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}