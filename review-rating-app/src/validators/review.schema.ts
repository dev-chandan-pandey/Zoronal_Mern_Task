import { z } from "zod";

export const reviewSchema = z.object({
  fullName: z.string().min(2),

  subject: z.string().min(2),

  reviewText: z.string().min(10),

  rating: z.number().min(1).max(5),
});