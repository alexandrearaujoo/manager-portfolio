import Image from 'next/image';

import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-evenly items-center w-full h-screen bg-[url('/assets/background.webp')] bg-cover bg-center bg-no-repeat">
      <div className="w-[95%] max-w-[350px] flex flex-col items-center">
        <Image
          src="/assets/logo.png"
          width={300}
          height={300}
          alt="Logo"
          className="w-[70%]"
        />
        <p className="text-2xl mt-4 text-white lg:text-[2rem]">
          Registre seus projetos de forma rapida e eficaz!
        </p>
      </div>
      <section className="flex h-[120px] justify-between flex-col lg:flex-row lg:w-[350px]">
        <Button path="/login">Login</Button>
        <Button path="/signup">Sign Up</Button>
      </section>
    </main>
  );
}
