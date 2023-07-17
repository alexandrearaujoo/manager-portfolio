import { ModalStore, Project } from '@/interfaces';
import { create } from 'zustand';

export const modalStore = create<ModalStore>((set) => ({
  project: null,
  isCreateModalOpen: false,
  onCreateModalOpen: () => set(() => ({ isCreateModalOpen: true })),
  onCloseCreateModal: () => set(() => ({ isCreateModalOpen: false })),
  isUpdateModalOpen: false,
  onUpdateModalOpen: (project: Project) =>
    set(() => ({ isUpdateModalOpen: true, project })),
  onCloseUpdateModal: () => set(() => ({ isUpdateModalOpen: false })),
  isDeleteModalOpen: false,
  onDeleteModalOpen: () => set(() => ({ isDeleteModalOpen: true })),
  onCloseDeleteModal: () => set(() => ({ isDeleteModalOpen: false }))
}));
