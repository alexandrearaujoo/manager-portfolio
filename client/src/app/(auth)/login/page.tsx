import LoginForm from '@/components/Forms/LoginForm';

export default function Login() {
  return (
    <main className="w-full h-screen flex flex-col-reverse justify-around items-center bg-[url('/assets/background.webp')] bg-cover bg-center bg-no-repeat">
      <LoginForm />
    </main>
  );
}
