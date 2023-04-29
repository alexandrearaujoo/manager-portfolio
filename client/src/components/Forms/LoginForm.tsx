'use client';

import Link from 'next/link';

import Button from '../Button';
import Input from '../Input';

const LoginForm = () => {
  return (
    <form className="flex flex-col justify-around items-center w-[95%] max-w-[400px] h-[350px] rounded-lg shadow-[2px_3px_9px_0px_rgba(0,0,0,0)] backdrop-blur-sm bg-white/10">
      <h2 className="text-white font-bold tracking-[3px]">Login</h2>
      <Input label="Email" />
      <Input label="Password" icon />
      <Button type="submit">Login</Button>
      <p className="text-white">
        Não possui conta ainda ?{' '}
        <Link
          href="/signup"
          className="text-blue-700 underline duration-[0.5s] hover:text-blue-500"
        >
          Cadastre-se
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
