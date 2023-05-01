import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-screen flex flex-col-reverse justify-around items-center bg-[url('/assets/background.webp')] bg-cover bg-center bg-no-repeat">
      {children}
    </main>
  );
}
