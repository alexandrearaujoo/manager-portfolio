import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';

import './globals.css';

export const metadata = {
  title: 'Project Manager'
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#3b82f6" />
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
