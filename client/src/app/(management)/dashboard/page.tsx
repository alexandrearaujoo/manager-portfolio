import { cookies } from 'next/headers';

import Card from '@/components/Card';
import CreateProject from '@/components/CreateProject';

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
    <section className="w-full">
      <CreateProject />
      <ul className="grid grid-cols-auto-fit gap-4 pb-4">
        {projects?.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
