import { z } from "zod";

export const userValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(50, {
      message: "Password can't be more then 50 characters long",
    }),
  profile: z.string().optional(),
});

export type TUser = z.infer<typeof userValidationSchema>;
