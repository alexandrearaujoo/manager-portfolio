import { Toaster } from 'react-hot-toast';

import './globals.css';

export const metadata = {
  title: 'Manager Portfolio'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
