import { z } from 'zod';

export const projectSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(2, 'Title is required'),
  type: z.string().nullish(),
  slug: z.string().nullish(),
  thumbnail: z.string().nullish(),
  linkWebsite: z
    .string({ required_error: 'Link is required' })
    .url('Link is invalid'),
  linkRepository: z
    .string({ required_error: 'Link  is required' })
    .url('Link is invalid'),
  description: z.string().nullish()
});

export type ProjectRequest = z.infer<typeof projectSchema>;
