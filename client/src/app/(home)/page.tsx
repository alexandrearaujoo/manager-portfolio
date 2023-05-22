import Link from 'next/link';

import ManagerAnimation from '@/components/Lotties/ManagerAnimation';

export default function Home() {
  return (
    <main className="flex flex-col-reverse gap-10 lg:flex-row justify-evenly items-center w-full h-screen">
      <div className="">
        <ManagerAnimation />
      </div>
      <section className="flex h-[120px] w-[95%] justify-between flex-col lg:w-[350px]">
        <h1 className="bg-clip-text text-transparent bg-button-gradient text-center font-bold text-3xl mb-5">
          Project manager
        </h1>
        <div className="flex flex-col gap-5 sm:gap-3 sm:flex-row items-center justify-center">
          <div className="bg-button-gradient p-[0.15rem] rounded-xl w-[15.3em]">
            <Link
              href="/login"
              className="w-[15em] flex items-center justify-center gap-2 relative h-[3.5rem] bg-zinc-800 text-white transition-all duration-200 rounded-xl text-base font-bold after:content-[''] after:absolute after:-top-[10px] after:left-[3%] after:w-[95%] after:h-[40%] after:bg-zinc-800 after:transition-all after:duration-300 after:origin-center before:content-[''] before:origin-center before:absolute before:top-[80%] before:left-[3%] before:w-[95%] before:h-[40%] before:bg-zinc-800 before:duration-300 hover:before:scale-0 hover:after:scale-0 hover:shadow-lg"
            >
              Login
            </Link>
          </div>
          <div className="bg-button-gradient p-[0.15rem] rounded-xl w-[15.3em]">
            <Link
              href="/signup"
              className="w-[15em] flex items-center justify-center gap-2 relative h-[3.5rem] bg-zinc-800 text-white transition-all duration-200 rounded-xl text-base font-bold after:content-[''] after:absolute after:-top-[10px] after:left-[3%] after:w-[95%] after:h-[40%] after:bg-zinc-800 after:transition-all after:duration-300 after:origin-center before:content-[''] before:origin-center before:absolute before:top-[80%] before:left-[3%] before:w-[95%] before:h-[40%] before:bg-zinc-800 before:duration-300 hover:before:scale-0 hover:after:scale-0 hover:shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
