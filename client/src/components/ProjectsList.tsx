'use client';

import dynamic from 'next/dynamic';

import Card from './Card';

import { Project } from '@/interfaces';
import { modalStore } from '@/stores/modalStore';

const UpdateProjectModal = dynamic(
  () => import('./Modals/UpdateProjectModal'),
  { ssr: false }
);

const ProjectsList = ({ projects }: { projects?: Project[] }) => {
  const { isOpenUpdateModal } = modalStore();

  return (
    <>
      <ul>
        {projects?.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </ul>
      {isOpenUpdateModal && <UpdateProjectModal />}
    </>
  );
};
export default ProjectsList;
