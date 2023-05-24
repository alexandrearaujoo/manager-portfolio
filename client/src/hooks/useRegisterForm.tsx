import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { RegisterRequest, registerSchema } from '@/schemas/registerSchema';
import { fetchWrapper } from '@/utils/fetchWrapper';
import { zodResolver } from '@hookform/resolvers/zod';

export const useRegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<RegisterRequest>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterRequest) => {
    const user = await fetchWrapper<{ message: string; status: number }>(
      'users',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ ...data })
      }
    );
    if (user.status !== 201) {
      toast.error(user.message);
      return;
    }

    const res = await fetch('/api/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email: data.email, password: data.password })
    });

    const login = await res.json();

    if ('message' in login) {
      toast.error(login.message);
      return;
    }
    reset();
    toast.success('Login successful');
    router.push('/dashboard');
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};
