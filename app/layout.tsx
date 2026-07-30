import type { Metadata } from 'next';
import './globals.css';
import { AccessibilityProvider } from '@/components/accessibility-provider';

export const metadata: Metadata = {
  title: 'JanSahay AI – Smart Government Welfare Assistant',
  description: 'One Platform. Every Government Scheme. Discover, check eligibility, apply online, and track central and state welfare schemes across India using AI.',
  keywords: 'Government Schemes, JanSahay AI, PM-KISAN, Ayushman Bharat, Welfare Discovery, Project Viksit Bharat 2026, MeitY'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AccessibilityProvider>
          {children}
        </AccessibilityProvider>
      </body>
    </html>
  );
}
