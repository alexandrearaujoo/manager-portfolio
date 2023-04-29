'use client';

import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  path?: string;
}

const Button = ({ children, className, path, ...rest }: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <button
      className={`${className} text-black text-decoration-none outline-none border-none bg-transparent`}
      {...rest}
      onClick={handleClick}
    >
      <span className="tracking-wider text-lg w-[140px] h-auto float-left duration-[0.5s] ease-linear relative block overflow-hidden p-[15px] text-center mx-[5px] bg-transparent uppercase font-bold text-white before:absolute before:content-[''] before:left-0 before:top-0 before:h-[4px] before:w-full before:border-b-[4px] before:border-b-transparent before:border-l-[4px] before:border-l-transparent before:box-border before:translate-x-full after:absolute after:content-[''] after:left-0 after:bottom-0 after:h-[4px] after:w-full after:border-t-[4px] after:border-b-transparent after:border-r-[4px] after:border-l-transparent after:box-border after:-translate-x-full hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:before:border-white hover:before:h-full hover:before:translate-x-0 hover:before:duration-[0.3s] hover:after:border-white hover:after:h-full hover:after:translate-x-0 hover:after:duration-[0.3s]">
        {children}
      </span>
    </button>
  );
};

export default Button;
