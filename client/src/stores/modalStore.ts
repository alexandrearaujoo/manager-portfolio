import { ModalStore } from '@/interfaces';
import { create } from 'zustand';

export const modalStore = create<ModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));
