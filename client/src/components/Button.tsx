'use client';

import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  path?: string;
  bgWhite?: boolean;
}

const Button = ({
  children,
  path,
  onClick,
  bgWhite = false,
  ...rest
}: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <button
      {...rest}
      onClick={path ? handleClick : onClick}
      className={`w-[15em] flex items-center justify-center gap-2 relative h-[3.5rem] border-[3px] border-rigde border-blue-500 bg-transparent ${
        bgWhite ? 'text-zinc-600' : 'text-white'
      } transition-all duration-200 rounded-[0.3em] text-base font-bold after:content-[''] after:absolute after:-top-[10px] after:left-[3%] after:w-[95%] after:h-[40%] ${
        bgWhite ? 'after:bg-white' : 'after:bg-zinc-800'
      } after:transition-all after:duration-300 after:origin-center before:content-[''] before:origin-center before:absolute before:top-[80%] before:left-[3%] before:w-[95%] before:h-[40%] ${
        bgWhite ? 'before:bg-white' : 'before:bg-zinc-800'
      } before:duration-300 hover:before:scale-0 hover:after:scale-0 hover:shadow-lg`}
    >
      {children}
    </button>
  );
};

export default Button;
