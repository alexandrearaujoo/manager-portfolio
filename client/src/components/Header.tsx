'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Avatar from './Avatar';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-transparent backdrop-blur-lg transition-colors duration-500 z-10 w-full p-5 flex items-center justify-between px-5 sm:px-16">
      <h1 className="text-base md:text-2xl font-bold bg-clip-text text-transparent bg-button-gradient cursor-pointer">
        <Link href="/dashboard">Project Manager</Link>
      </h1>
      <nav className="flex items-center gap-5">
        <Link
          href="/dashboard"
          className={`hidden sm:block text-white font-bold text-base transition-all duration-200 border-b-2 ${
            pathname === '/dashboard'
              ? 'border-white hover:border-white/20'
              : 'border-transparent'
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/token"
          className={`hidden sm:block whitespace-nowrap w-20 text-white font-bold text-base transition-all duration-200 border-b-2 ${
            pathname === '/dashboard/token'
              ? 'border-white'
              : 'border-transparent hover:border-white'
          }`}
        >
          API Token
        </Link>
        <Avatar />
      </nav>
    </header>
  );
};

export default Header;
