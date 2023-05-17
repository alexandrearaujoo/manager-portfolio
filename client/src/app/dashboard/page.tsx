import ButtonOpenModal from '@/components/Modals/ButtonOpenModal';
import ProjectsList from '@/components/ProjectsList';

import { projectStore } from '@/stores/projectStore';

export const metadata = {
  title: 'Dashboard'
};

export default async function Dashboard() {
  const projects = await projectStore.getState().getUserProjects();

  return (
    <>
      <section className="w-full">
        <ButtonOpenModal />
        <ProjectsList projects={projects} />
      </section>
    </>
  );
}
