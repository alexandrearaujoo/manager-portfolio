import { ModalStore, Project } from '@/interfaces';
import { create } from 'zustand';

export const modalStore = create<ModalStore>((set) => ({
  project: null,
  isOpenCreateModal: false,
  onOpenCreateModal: () => set({ isOpenCreateModal: true }),
  onCloseCreateModal: () => set({ isOpenCreateModal: false }),
  isOpenUpdateModal: false,
  onOpenUpdateModal: (project: Project) =>
    set({ isOpenUpdateModal: true, project: project }),
  onCloseUpdateModal: () => set({ isOpenUpdateModal: false })
}));
