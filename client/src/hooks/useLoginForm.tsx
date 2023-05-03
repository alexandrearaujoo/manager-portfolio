import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { LoginRequest, loginSchema } from '@/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<LoginRequest>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginRequest) => {
    const res = await signIn('credentials', {
      ...data,
      callbackUrl: '/dashboard'
    });

    if (res?.ok) {
      reset();
      toast.success('Login successful');
    }
    if (res?.error) {
      toast.error(res.error);
    }
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};
