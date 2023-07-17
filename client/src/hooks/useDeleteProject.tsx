import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { api } from '@/services/api';
import { modalStore } from '@/stores/modalStore';
import Cookies from 'js-cookie';

export const useDeleteProject = () => {
  const router = useRouter();
  const token = Cookies.get('userToken');
  const isDeleteModalOpen = modalStore((state) => state.isDeleteModalOpen);
  const onCloseDeleteModal = modalStore((state) => state.onCloseDeleteModal);
  const onDeleteModalOpen = modalStore((state) => state.onDeleteModalOpen);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteProject = async (projectId: string) => {
    setIsDeleting(true);
    const {
      data: { message, status }
    } = await api.delete<{
      message: string;
      status: number;
    }>(`projects/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (status !== 200) {
      toast.error(message);
      setIsDeleting(false);
      return;
    }

    router.refresh();
    toast.success(message);
    setIsDeleting(false);
    onCloseDeleteModal();
  };
  return {
    deleteProject,
    isDeleting,
    onCloseDeleteModal,
    onDeleteModalOpen,
    isDeleteModalOpen
  };
};
