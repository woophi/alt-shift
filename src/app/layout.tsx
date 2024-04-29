import { cn } from '@/core/utils/cn';
import { Header } from '@/modules/header';
import { BaseLayout } from '@/ui/base';
import { fixelDisplay, fixelText } from '@/ui/font';
import { themeClass } from '@/ui/styles/theme.css';
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
      <body className={cn(fixelDisplay.variable, fixelText.variable, themeClass)}>
        <BaseLayout header={<Header />}>{children}</BaseLayout>
      </body>
    </html>
  );
}
