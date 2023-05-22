import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { ProjectRequest, projectSchema } from '@/schemas/projectSchema';
import { projectStore } from '@/stores/projectStore';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';

export const useCreateProject = () => {
  const token = Cookies.get('userToken');
  const { createProject } = projectStore.getState();
  const router = useRouter();

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
    const project = await createProject(data, token as string);

    if (project.status !== 201) {
      toast.error(project.message);
      return;
    }
    toast.success(project.message);
    reset();
    router.push('/dashboard');
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
