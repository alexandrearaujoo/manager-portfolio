import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { ProjectRequest, projectSchema } from '@/schemas/projectSchema';
import { modalStore } from '@/stores/modalStore';
import { projectStore } from '@/stores/projectStore';
import { zodResolver } from '@hookform/resolvers/zod';

export const useCreateProject = () => {
  const { onCloseCreateModal } = modalStore.getState();
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

  const setCustomValue = (id: any, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  };

  const onSubmit = async (data: ProjectRequest) => {
    const project = await createProject(data);

    if (project.status !== 201) {
      toast.error(project.message);
      return;
    }
    toast.success(project.message);
    onCloseCreateModal();
    reset();
    router.refresh();
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
