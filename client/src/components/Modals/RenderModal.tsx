'use client';

import dynamic from 'next/dynamic';
import { AiOutlinePlus } from 'react-icons/ai';

import Button from '../Button';

import { modalStore } from '@/stores/modalStore';

const CreateProjectModal = dynamic(() => import('./CreateProjectModal'), {
  ssr: false
});

const RenderModal = () => {
  const { isOpen, onClose, onOpen } = modalStore();

  return (
    <>
      <div>
        <Button color="white" onClick={onOpen}>
          <AiOutlinePlus />
          New Project
        </Button>
      </div>
      {isOpen && <CreateProjectModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default RenderModal;
