'use client';

import { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '../Button';
import ImageUpload from '../ImageUpload';
import Input from '../Input';

import { useCreateProject } from '@/hooks/useCreateProject';
import { Transition, Dialog } from '@headlessui/react';

const CreateProjectModal = ({
  isOpen,
  closeModal
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const {
    register,
    handleSubmit,
    setCustomValue,
    onSubmit,
    isSubmitting,
    errors,
    thumbnail
  } = useCreateProject();

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
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-8 space-y-9 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h1"
                  className="flex items-center justify-between text-lg leading-6 text-gray-900 font-bold"
                >
                  Create Project
                  <AiOutlineClose
                    className="text-black p-1 cursor-pointer"
                    size={24}
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <h1 className="text-white font-bold">Create Project</h1>
                  <div className="flex flex-col md:flex-row mt-4 w-full gap-4">
                    <Input
                      label="Title"
                      {...register('title')}
                      error={errors.title?.message}
                    />
                    <Input label="Type" {...register('type')} />
                  </div>
                  <div className="flex flex-col md:flex-row mt-4 gap-4">
                    <Input label="Slug" {...register('slug')} />
                    <Input
                      label="Link Website"
                      {...register('linkWebsite')}
                      error={errors.linkWebsite?.message}
                    />
                    <Input
                      label="Link Repository"
                      {...register('linkRepository')}
                      error={errors.linkRepository?.message}
                    />
                  </div>
                  <div className="mt-4">
                    <ImageUpload
                      onChange={(value) => setCustomValue('thumbnail', value)}
                      value={thumbnail as string}
                    />
                  </div>
                  <div className="mt-4 relative bg-button-gradient p-[0.15rem] rounded-xl">
                    <textarea
                      {...register('description')}
                      className={`resize-none block px-3 pt-6 pb-1 w-full h-24 text-md text-zinc-800 bg-white rounded-xl appearance-none focus:outline-none focus:ring-0 peer transition`}
                      placeholder=" "
                    />
                    <label
                      htmlFor=""
                      className="absolute flex gap-2 text-md text-zinc-800 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Description
                    </label>
                  </div>
                  <div className="mt-4">
                    <Button type="submit" disabled={isSubmitting} bgWhite>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600" />{' '}
                          Creating...
                        </>
                      ) : (
                        'Create'
                      )}
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateProjectModal;
