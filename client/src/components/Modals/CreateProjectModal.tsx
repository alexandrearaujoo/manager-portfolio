'use client';

import { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '../Button';
import ImageUpload from '../ImageUpload';
import Input from '../Input';

import { useCreateProject } from '@/hooks/useCreateProject';
import { modalStore } from '@/stores/modalStore';
import { Dialog, Transition } from '@headlessui/react';

const CreateProjectModal = () => {
  const {
    register,
    handleSubmit,
    setCustomValue,
    onSubmit,
    isSubmitting,
    thumbnail,
    errors
  } = useCreateProject();

  const { isOpenCreateModal, onCloseCreateModal } = modalStore.getState();

  return (
    <Transition appear show={isOpenCreateModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCloseCreateModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900 flex items-center justify-between"
                >
                  Create Project
                  <AiOutlineClose
                    size={30}
                    onClick={onCloseCreateModal}
                    className="p-1 cursor-pointer font-bold transition-colors duration-200 hover:text-gray-600"
                  />
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col md:flex-row mt-4 w-full gap-4">
                    <Input
                      label="Title"
                      {...register('title')}
                      error={errors.title?.message}
                    />
                    <Input label="Type" {...register('type')} />
                  </div>
                  <div className="mt-4">
                    <ImageUpload
                      onChange={(value) => setCustomValue('thumbnail', value)}
                      value={thumbnail as string}
                    />
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
                  <div className="mt-4 relative">
                    <textarea
                      {...register('description')}
                      className={`resize-none block px-3 pt-6 pb-1 w-full text-md text-black bg-transparent border-2 ${
                        errors.description?.message
                          ? 'border-red-500'
                          : 'border-blue-600'
                      } rounded-xl appearance-none focus:outline-none focus:ring-0 peer transition`}
                      placeholder=" "
                    />
                    <label
                      htmlFor=""
                      className="absolute flex gap-2 text-md text-black duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Description
                    </label>
                  </div>
                  <div className="mt-4">
                    <Button type="submit" disabled={isSubmitting} bgWhite>
                      Create
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
