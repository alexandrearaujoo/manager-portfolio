import Button from '@/components/Button';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-evenly items-center w-full h-screen bg-[url('/assets/background.webp')] bg-cover bg-center bg-no-repeat">
      <Logo label />
      <section className="flex h-[120px] justify-between flex-col lg:flex-row lg:w-[350px]">
        <Button path="/login">Login</Button>
        <Button path="/signup">Sign Up</Button>
      </section>
    </main>
  );
}
