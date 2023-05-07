'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

import Button from './Button';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Image
        src={'/assets/placeholder.png' ?? ''}
        alt="avatar"
        width={50}
        height={50}
        className="rounded-full cursor-pointer"
      />
      {isOpen && (
        <ul className="absolute top-[3.1rem] right-3 w-32 bg-white p-2 rounded-md shadow-lg space-y-2">
          <li className="font-bold">@Alexandre</li>
          <li>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Avatar;
