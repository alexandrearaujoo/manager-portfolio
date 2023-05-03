import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, 'Minimum of 2 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email')
    .min(2, 'Minimum of 2 characters'),
  password: z.string({ required_error: 'Password is required' })
});

export type RegisterRequest = z.infer<typeof registerSchema>;
