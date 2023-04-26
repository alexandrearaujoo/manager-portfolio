import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name is required"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  password: z.string({ required_error: "Password is required" }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  password: z.string({ required_error: "Password is required" }),
});
