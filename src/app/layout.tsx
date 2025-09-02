// src/app/layout.tsx
import '../../globals.css'; // adjust to where globals.css lives

export const metadata = {
  title: 'AI Agent Factory',
  description: 'Sector-specific AI agents & templates',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
