import { z } from "zod";

export const eventValidationSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(100, "Title must be at most 100 characters"),
  description: z.string().min(1, "Description cannot be empty"),
  date: z.string().transform((value: string) => new Date(value)),
  venue: z.string().min(1, "Venue cannot be empty"),
  capacity: z.number().min(1, "Capacity must be at least 1"),
  banner: z.string().min(1, "Banner cannot be empty"),
  price: z
    .number()
    .int()
    .min(0, { message: "Price must be a non-negative integer" }),
  ticketsAvailable: z
    .number()
    .int()
    .min(0, { message: "Tickets available must be a non-negative integer" }),
});

export type TEvent = z.infer<typeof eventValidationSchema>;
