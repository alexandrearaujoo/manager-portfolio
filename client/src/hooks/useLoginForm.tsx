import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { LoginRequest, loginSchema } from '@/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useLoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<LoginRequest>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginRequest) => {
    const res = await signIn('credentials', {
      ...data,
      redirect: false
    });

    if (res?.ok) {
      reset();
      toast.success('Login successful');
      router.push('/dashboard');
    }
    if (res?.error) {
      toast.error(res.error);
    }
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};
