import dynamic from 'next/dynamic';

import Card from '@/components/Card';

import { modalStore } from '@/stores/modalStore';
import { projectStore } from '@/stores/projectStore';

const CreateProjectModal = dynamic(
  () => import('@/components/Modals/CreateProjectModal'),
  { ssr: false }
);
const UpdateProjectModal = dynamic(
  () => import('@/components/Modals/UpdateProjectModal'),
  { ssr: false }
);

export const metadata = {
  title: 'Dashboard'
};

export default async function Dashboard() {
  const projects = await projectStore.getState().getUserProjects();

  const isOpenCreateModal = modalStore.getState().isOpenCreateModal;
  const isOpenUpdateModal = modalStore.getState().isOpenUpdateModal;

  return (
    <>
      <section className="w-full">
        <ul className={`mt-10 pb-10 grid grid-cols-auto-fit gap-10 mx-5`}>
          {projects?.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      </section>
      {isOpenCreateModal && <CreateProjectModal />}
      {isOpenUpdateModal && <UpdateProjectModal />}
    </>
  );
}
