import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email')
    .min(2, 'Minimum of 2 characters'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(2, 'Password is required')
});

export type LoginRequest = z.infer<typeof loginSchema>;
