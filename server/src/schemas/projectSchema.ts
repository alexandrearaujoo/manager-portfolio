import { z } from "zod";

export const projectSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  type: z.string().nullish(),
  slug: z.string().nullish(),
  thumbbail: z.string().nullish(),
  linkWebsite: z
    .string({ required_error: "Link of website is required" })
    .url("Link of website is invalid"),
  linkRepository: z
    .string({ required_error: "Link of repository is required" })
    .url("Link of repository is invalid"),
  description: z.string().nullish(),
});
