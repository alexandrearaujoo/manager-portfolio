'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { AiFillEdit, AiFillGithub } from 'react-icons/ai';
import { TbNetwork } from 'react-icons/tb';

import { Project } from '@/interfaces';
import { modalStore } from '@/stores/modalStore';

const UpdateProjectModal = dynamic(
  () => import('./Modals/UpdateProjectModal'),
  { ssr: false }
);

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const isUpdateModalOpen = modalStore((state) => state.isUpdateModalOpen);
  const onUpdateModalOpen = modalStore((state) => state.onUpdateModalOpen);
  const onCloseUpdateModal = modalStore((state) => state.onCloseUpdateModal);

  return (
    <>
      <li className="relative flex items-center justify-center w-full min-w-min shadow-lg p-8 overflow-hidden rounded-xl transition-all duration-200 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[5px] before:bg-button-gradient before:z-[-1] before:transition-all before:duration-200 hover:before:h-full hover:shadow-none">
        <div className="flex flex-col items-start w-full gap-5 text-gray-200 transition-all duration-200">
          <h1 className="font-bold text-3xl break-words w-full">
            {project.title}
          </h1>
          <p className="leading-[1.5]">
            {project.description || "This project doesn't have a description"}
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => onUpdateModalOpen(project)}
              className="group flex items-center justify-start w-12 h-12 border-none rounded-md relative overflow-hidden transition-all duration-200 bg-button-gradient hover:w-32 hover:transition-all hover:duration-200"
            >
              <div className="w-full transition-all duration-200 flex items-center justify-center group-hover:w-[30%] group-hover:transition-all group-hover:duration-200 group-hover:pl-5">
                <AiFillEdit size={24} />
              </div>
              <span className="absolute right-[0%] w-[0%] opacity-0 text-white text-sm font-semibold transition-all duration-200 group-hover:opacity-100 group-hover:w-[70%] group-hover:transition-all group-hover:duration-200 group-hover:px-5">
                Edit
              </span>
            </button>
            <Link
              href={project.linkRepository || '/dashboard'}
              className="group flex items-center justify-start w-12 h-12 border-none rounded-md relative overflow-hidden transition-all duration-200 bg-button-gradient hover:w-32 hover:transition-all hover:duration-200"
            >
              <div className="w-full transition-all duration-200 flex items-center justify-center group-hover:w-[30%] group-hover:transition-all group-hover:duration-200 group-hover:pl-5">
                <AiFillGithub size={24} />
              </div>
              <span className="absolute right-[0%] w-[0%] opacity-0 text-center text-white text-sm font-semibold transition-all duration-200 group-hover:opacity-100 group-hover:w-[70%] group-hover:transition-all group-hover:duration-200 group-hover:pr-5">
                Github
              </span>
            </Link>
            <Link
              href={project.linkWebsite || '/dashboard'}
              className="group flex items-center justify-start w-12 h-12 border-none rounded-md relative overflow-hidden transition-all duration-200 bg-button-gradient hover:w-32 hover:transition-all hover:duration-200"
            >
              <div className="w-full transition-all duration-200 flex items-center justify-center group-hover:w-[30%] group-hover:transition-all group-hover:duration-200 group-hover:pl-5">
                <TbNetwork size={24} />
              </div>
              <span className="absolute right-[0%] w-[0%] text-center opacity-0 text-white text-sm font-semibold transition-all duration-200 group-hover:opacity-100 group-hover:w-[70%] group-hover:transition-all group-hover:duration-200 group-hover:pr-5">
                Website
              </span>
            </Link>
          </div>
        </div>
      </li>
      {isUpdateModalOpen && (
        <UpdateProjectModal
          onOpen={isUpdateModalOpen}
          project={project}
          closeModal={onCloseUpdateModal}
        />
      )}
    </>
  );
};

export default Card;
