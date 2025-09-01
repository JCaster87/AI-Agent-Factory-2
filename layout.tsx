import './globals.css';
import type { ReactNode } from 'react';

export const metadata = { title: 'AI Agent Factory', description: 'Spin up AI agents like teammates.' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"><body className="min-h-dvh bg-white text-gray-900">{children}</body></html>
  );
}
