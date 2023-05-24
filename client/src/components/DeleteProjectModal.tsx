'use client';

import { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Button from './Button';

import { useDeleteProject } from '@/hooks/useDeleteProject';
import { Transition, Dialog } from '@headlessui/react';

const DeleteProjectModal = ({
  isOpen,
  closeModal,
  projectId
}: {
  isOpen: boolean;
  closeModal: () => void;
  projectId: string;
}) => {
  const { deleteProject, isDeleting } = useDeleteProject();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 overflow-y-hidden" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 space-y-9 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h1"
                  className="flex items-center justify-between text-lg leading-6 text-gray-900 font-bold"
                >
                  Delete Project
                  <AiOutlineClose
                    className="text-black p-1 cursor-pointer"
                    size={24}
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-lg text-black">
                    Are you sure you want to delete this project?
                  </p>
                </div>

                <div className="mt-4">
                  <Button
                    bgWhite
                    onClick={() => deleteProject(projectId)}
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteProjectModal;
