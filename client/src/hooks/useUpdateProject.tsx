import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { Project } from '@/interfaces';
import { ProjectRequest, projectSchema } from '@/schemas/projectSchema';
import { modalStore } from '@/stores/modalStore';
import { projectStore } from '@/stores/projectStore';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';

export const useUpdateProject = (project: Project | null) => {
  const token = Cookies.get('userToken');
  const updateProject = projectStore((state) => state.updateProject);
  const router = useRouter();
  const onCloseUpdateModal = modalStore((state) => state.onCloseUpdateModal);

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

  const setCustomValue = (id: 'thumbnail', value: string) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  };

  const onSubmit = async (data: ProjectRequest) => {
    const projectUpdated = await updateProject(
      project?.id as string,
      data,
      token as string
    );

    if (projectUpdated.status !== 200) {
      toast.error(projectUpdated.message);
      return;
    }

    router.refresh();
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
