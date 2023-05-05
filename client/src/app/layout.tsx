import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import './globals.css';

export const metadata = {
  title: 'Manager Portfolio'
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
