'use client';

import Link from 'next/link';
import Lottie from 'react-lottie';

import Button from '../Button';
import Input from '../Input';

import { useLoginForm } from '@/hooks/useLoginForm';
import LoginAnimation from '@/lotties/121421-login.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoginAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const LoginForm = () => {
  const { errors, handleSubmit, isSubmitting, onSubmit, register } =
    useLoginForm();

  return (
    <section className="flex items-center gap-x-20 transition">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 animate-fade-in md:animate-slide-right bg-white h-screen w-full min-w-[309px] md:w-2/5 flex flex-col items-center justify-center gap-9 transition"
      >
        <h2 className="text-black font-bold text-center text-3xl">Login</h2>
        <Input
          label="Email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          icon
          {...register('password')}
          error={errors.password?.message}
        />
        <Button type="submit" disabled={isSubmitting} bgWhite>
          Login
        </Button>
        <p className="text-black text-center font-semibold">
          Don&apos;t have an account ?{' '}
          <Link
            href="/signup"
            className="bg-clip-text text-transparent bg-button-gradient transition-colors duration-200 hover:opacity-80"
          >
            Sign Up
          </Link>
        </p>
      </form>
      <div className="hidden md:block">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled
          style={{ cursor: 'default' }}
        />
      </div>
    </section>
  );
};

export default LoginForm;
