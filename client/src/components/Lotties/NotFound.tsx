'use client';

import Link from 'next/link';
import Lottie from 'react-lottie';

import NotFoundAnimation from '@/lotties/100267-page-not-found.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFoundAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function NotFound() {
  return (
    <main className="bg-zinc-400 h-screen relative">
      <Lottie
        options={defaultOptions}
        style={{ cursor: 'default' }}
        isClickToPauseDisabled
      />
      <Link
        href="/"
        className="absolute top-[45%] left-1/2 -translate-x-1/2 font-bold bg-white p-3 rounded-md shadow-md"
      >
        Back to Homepage
      </Link>
    </main>
  );
}
