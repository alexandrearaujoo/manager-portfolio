import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { ProjectRequest, projectSchema } from '@/schemas/projectSchema';
import { modalStore } from '@/stores/modalStore';
import { fetchWrapper } from '@/utils/fetchWrapper';
import { zodResolver } from '@hookform/resolvers/zod';

export const useCreateProject = () => {
  const { onClose } = modalStore.getState();

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
    const project = await fetchWrapper<{ message: string; status: number }>(
      'projects',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`
        },
        method: 'POST',
        body: JSON.stringify({ ...data })
      }
    );
    if (project.status !== 201) {
      toast.error(project.message);
      return;
    }
    toast.success(project.message);
    onClose();
    reset();
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
