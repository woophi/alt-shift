import { fixelDisplay } from '@/ui/font';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alt+Shift',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fixelDisplay.className}>{children}</body>
    </html>
  );
}
