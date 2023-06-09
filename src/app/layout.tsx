import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable}`}>
      <body className='font-sans'>{children}</body>
    </html>
  );
}
