import { Types } from "mongoose";
import { z } from "zod";

export const BookingValidationSchema = z.object({
  user: z
    .string()
    .refine((id) => Types.ObjectId.isValid(id), {
      message: "Invalid room id",
    })
    .transform((id) => new Types.ObjectId(id))
    .optional(),
  event: z
    .string()
    .refine((id) => Types.ObjectId.isValid(id), {
      message: "Invalid room id",
    })
    .transform((id) => new Types.ObjectId(id)),
  ticketsBooked: z
    .number()
    .int()
    .min(1, { message: "At least one ticket must be booked" }),
});

export type TBooking = z.infer<typeof BookingValidationSchema>;
