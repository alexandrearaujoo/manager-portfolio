import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { ProjectRequest, projectSchema } from '@/schemas/projectSchema';
import { modalStore } from '@/stores/modalStore';
import { projectStore } from '@/stores/projectStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';

export const useCreateProject = () => {
  const token = Cookies.get('userToken');
  const createProject = projectStore((state) => state.createProject);
  const router = useRouter();
  const onCloseCreateModal = modalStore((state) => state.onCloseCreateModal);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ProjectRequest>({ resolver: zodResolver(projectSchema) });

  const thumbnail = watch('thumbnail');

  const setCustomValue = (id: 'thumbnail', value: string) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  };

  const onSubmit = async (data: ProjectRequest) => {
    try {
      const project = await createProject(data, token as string);

      onCloseCreateModal();
      router.refresh();
      toast.success(project.message);
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
        return;
      }
      toast.error('Something went wrong');
    }
  };

  return {
    onSubmit,
    register,
    setCustomValue,
    handleSubmit,
    errors,
    isSubmitting,
    thumbnail
  };
};
