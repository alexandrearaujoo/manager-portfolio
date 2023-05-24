import { cookies } from 'next/headers';
import Link from 'next/link';
import { BsPlusLg } from 'react-icons/bs';

import Card from '@/components/Card';

import { projectStore } from '@/stores/projectStore';

export const metadata = {
  title: 'Dashboard'
};

export default async function Dashboard() {
  const token = cookies().get('userToken')?.value;

  const projects = await projectStore
    .getState()
    .getUserProjects(token as string);

  return (
    <>
      <section className="w-full">
        <Link
          href="/create"
          className="group flex items-center justify-start w-12 h-12 border-none mb-5 rounded-md relative overflow-hidden transition-all duration-200 bg-button-gradient hover:w-36 hover:transition-all hover:duration-200"
        >
          <div className="w-full transition-all duration-200 flex items-center justify-center text-white group-hover:w-[30%] group-hover:transition-all group-hover:duration-200 group-hover:pl-1">
            <BsPlusLg size={24} />
          </div>
          <span className="absolute right-[0%] w-[0%] opacity-0 text-white text-sm font-semibold transition-all duration-200 group-hover:opacity-100 group-hover:w-[75%] group-hover:transition-all group-hover:duration-200 group-hover:pr-1">
            New Project
          </span>
        </Link>
        <ul className="grid grid-cols-auto-fit gap-4 pb-4">
          {projects?.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      </section>
    </>
  );
}
