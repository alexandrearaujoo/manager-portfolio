'use client';

import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  path?: string;
}

const Button = ({ children, path, onClick, ...rest }: ButtonProps) => {
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
      className="text-lg flex items-center justify-center gap-4 text-black font-inherit font-bold relative border-none bg-none ease-expend duration-[400ms] transition-color focus:after:w-full focus:after:left-[0%] hover:after:w-full hover:after:left-[0%] after:content-[''] after:pointer-events-none after:-bottom-[2px] after:left-1/2 after:absolute after:w-[0%] after:h-[2px] after:bg-black after:ease-expend after:duration-[400ms] after:transition-expend"
    >
      {children}
    </button>
  );
};

export default Button;
