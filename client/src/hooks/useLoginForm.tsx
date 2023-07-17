import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { LoginRequest, loginSchema } from '@/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';

export const useLoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginRequest>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginRequest) => {
    try {
      await axios.post('/api/login', data);

      toast.success('Login successful');
      router.push('/dashboard');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
        return;
      }
      toast.error('Something went wrong');
    }
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};
