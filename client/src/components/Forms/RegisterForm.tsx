'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import Button from '../Button';
import Input from '../Input';

const RegisterForm = () => {
  return (
    <form className="space-y-6 flex flex-col justify-around items-center w-[95%] max-w-[450px] py-3 rounded-lg shadow-[2px_3px_9px_0px_rgba(0,0,0,0)] backdrop-blur-sm bg-white/10">
      <h2 className="text-white font-bold tracking-[3px]">Register</h2>
      <Input label="Email" />
      <Input label="Name" />
      <Input label="Password" icon />
      <Button type="submit">Register</Button>
      <Button onClick={() => signIn('google')} type="button">
        Continue with Google <FcGoogle size={24} />
      </Button>
      <Button onClick={() => signIn('github')} type="button">
        Continue with GitHub <AiFillGithub size={24} />
      </Button>
      <p className="text-white">
        Ja possui uma conta ?{' '}
        <Link
          href="/login"
          className="text-blue-700 underline duration-[0.5s] hover:text-blue-500"
        >
          Logar
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
