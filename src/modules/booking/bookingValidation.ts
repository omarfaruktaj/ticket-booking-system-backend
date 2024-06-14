import { Types } from "mongoose";
import { z } from "zod";

export const BookingValidationSchema = z.object({
  user: z
    .string()
    .refine((id) => Types.ObjectId.isValid(id), {
      message: "Invalid user id",
    })
    .transform((id) => new Types.ObjectId(id))
    .optional(),
  event: z
    .string()
    .refine((id) => Types.ObjectId.isValid(id), {
      message: "Invalid event id",
    })
    .transform((id) => new Types.ObjectId(id)),
  ticketsBooked: z
    .number()
    .int()
    .min(1, { message: "At least one ticket must be booked" }),
  status: z.enum(["pending", "confirmed", "cancelled"]).optional(),
  paymentStatus: z.enum(["paid", "unpaid"]).optional(),
});

export type TBooking = z.infer<typeof BookingValidationSchema>;
