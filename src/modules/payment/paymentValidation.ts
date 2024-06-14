import { Types } from "mongoose";
import { z } from "zod";

export const paymentValidationSchema = z.object({
  paymentId: z.string(),
  user: z
    .string()
    .refine((id) => Types.ObjectId.isValid(id), {
      message: "Invalid User id",
    })
    .transform((id) => new Types.ObjectId(id))
    .optional(),
  booking: z
    .string()
    .refine((id) => Types.ObjectId.isValid(id), {
      message: "Invalid event",
    })
    .transform((id) => new Types.ObjectId(id)),
  amount: z.number().positive("Amount must be a positive number"),
  status: z.enum(["pending", "completed", "failed"], {
    message: "Invalid status",
  }),
});

export const paymentProcessValidationSchema = z.object({
  user: z
    .string()
    .refine((id) => Types.ObjectId.isValid(id), {
      message: "Invalid User id",
    })
    .transform((id) => new Types.ObjectId(id))
    .optional(),
  booking: z
    .string()
    .refine((id) => Types.ObjectId.isValid(id), {
      message: "Invalid event",
    })
    .transform((id) => new Types.ObjectId(id)),
  paymentMethodId: z.string(),
});

export type TPayment = z.infer<typeof paymentValidationSchema>;
export type TPaymentBody = z.infer<typeof paymentProcessValidationSchema>;
