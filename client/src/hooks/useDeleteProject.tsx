import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { fetchWrapper } from '@/utils/fetchWrapper';
import Cookies from 'js-cookie';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useDeleteProject = () => {
  const router = useRouter();
  const token = Cookies.get('userToken');
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteProject = async (projectId: string) => {
    setIsDeleting(true);
    const { message, status } = await fetchWrapper<{
      message: string;
      status: number;
    }>(`projects/${projectId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (status !== 200) {
      toast.error(message);
      setIsDeleting(false);
      return;
    }
    await delay(2000);
    toast.success(message);
    setIsDeleting(false);
    setIsOpen(false);
    router.push('/dashboard');
  };
  return { deleteProject, isDeleting, setIsOpen, isOpen };
};
