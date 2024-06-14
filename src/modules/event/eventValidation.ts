import { z } from "zod";

export const eventValidationSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(100, "Title must be at most 100 characters"),
  description: z.string().min(1, "Description cannot be empty"),
  date: z.date().min(new Date(), "Event date must be in the future"),
  venue: z.string().min(1, "Venue cannot be empty"),
  capacity: z.number().min(1, "Capacity must be at least 1"),
  tickets: z.array(z.string()).optional(),
});

export type TEvent = z.infer<typeof eventValidationSchema>;
