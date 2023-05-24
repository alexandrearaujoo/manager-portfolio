import ManagerAnimation from '@/components/Lotties/ManagerAnimation';
import Redirect from '@/components/Redirect';

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
          <Redirect href="/login" />
          <Redirect href="/signup" />
        </div>
      </section>
    </main>
  );
}
