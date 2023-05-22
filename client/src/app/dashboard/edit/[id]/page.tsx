import { cookies } from 'next/headers';
import Link from 'next/link';

import UpdateProjectForm from '@/components/Forms/UpdateProjectForm';
import EditProjectAnimation from '@/components/Lotties/EditProjectAnimation';

import { Project } from '@/interfaces';
import { fetchWrapper } from '@/utils/fetchWrapper';

export default async function Edit({ params }: { params: { id: string } }) {
  const token = cookies().get('userToken')?.value;

  const { id } = params;

  const project = await fetchWrapper<Project>(`projects/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if ('message' in project) {
    return (
      <main className="mt-10 flex flex-col gap-10 items-center justify-center w-full">
        <h1 className="text-white font-bold text-xl md:text-2xl">
          This project does not exist
        </h1>
        <Link
          href="/dashboard"
          className="text-white font-semibold text-lg md:text-xl transition-colors duration-200 border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300"
        >
          Back to dashboard
        </Link>
      </main>
    );
  }

  return (
    <main className="px-1 md:px-10 flex gap-4 md:flex-row items-center justify-center">
      <section className="hidden lg:flex w-full max-w-5xl">
        <EditProjectAnimation />
      </section>
      <section className="w-full">
        <UpdateProjectForm project={project} />
      </section>
    </main>
  );
}
