'use client';

import dynamic from 'next/dynamic';
import { BsPlusLg } from 'react-icons/bs';

import { modalStore } from '@/stores/modalStore';

const CreateProjectModal = dynamic(() => import('./CreateProjectModal'), {
  ssr: false
});

const ButtonOpenModal = () => {
  const { isOpenCreateModal, onOpenCreateModal } = modalStore();

  return (
    <>
      <button
        onClick={onOpenCreateModal}
        className="group flex items-center justify-start w-12 h-12 border-none mb-5 rounded-md relative mx-5 overflow-hidden transition-all duration-200 bg-button-gradient hover:w-36 hover:transition-all hover:duration-200"
      >
        <div className="w-full transition-all duration-200 flex items-center justify-center text-white group-hover:w-[30%] group-hover:transition-all group-hover:duration-200 group-hover:pl-3">
          <BsPlusLg size={24} />
        </div>
        <span className="absolute right-[0%] w-[0%] opacity-0 text-white text-sm font-semibold transition-all duration-200 group-hover:opacity-100 group-hover:w-[75%] group-hover:transition-all group-hover:duration-200 group-hover:pr-3">
          New Project
        </span>
      </button>
      {isOpenCreateModal && <CreateProjectModal />}
    </>
  );
};

export default ButtonOpenModal;
