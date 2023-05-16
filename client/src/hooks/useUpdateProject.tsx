import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { ProjectRequest, projectSchema } from '@/schemas/projectSchema';
import { modalStore } from '@/stores/modalStore';
import { projectStore } from '@/stores/projectStore';
import { zodResolver } from '@hookform/resolvers/zod';

export const useUpdateProject = () => {
  const { onCloseUpdateModal, project } = modalStore.getState();
  const { updateProject } = projectStore.getState();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<ProjectRequest>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      description: project?.description,
      linkRepository: project?.linkRepository,
      linkWebsite: project?.linkWebsite,
      slug: project?.slug,
      thumbnail: project?.thumbnail,
      title: project?.title,
      type: project?.type
    }
  });

  const thumbnail = watch('thumbnail');

  const setCustomValue = (id: any, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  };

  const onSubmit = async (data: ProjectRequest) => {
    const projectUpdated = await updateProject(project?.id as string, data);

    if (projectUpdated.status !== 200) {
      toast.error(projectUpdated.message);
      return;
    }

    toast.success(projectUpdated.message);
    onCloseUpdateModal();
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
