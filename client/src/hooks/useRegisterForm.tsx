import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { RegisterRequest, registerSchema } from '@/schemas/registerSchema';
import { api } from '@/services/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';

export const useRegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<RegisterRequest>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterRequest) => {
    try {
      await api.post<{
        message: string;
        status: number;
      }>('users', data);

      toast.success('Successfully registered!');
      router.push('/login');
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
        return;
      }
      toast.error('Something went wrong!');
    }
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};
