import CreateProjectForm from '@/components/Forms/CreateProjectForm';
import CreateProjectAnimation from '@/components/Lotties/CreateProjectAnimation';

export default function Create() {
  return (
    <main className="px-1 md:px-10 flex gap-4 md:flex-row items-center justify-center">
      <section className="w-full max-w-5xl">
        <CreateProjectForm />
      </section>
      <section className="hidden lg:flex w-full">
        <CreateProjectAnimation />
      </section>
    </main>
  );
}
