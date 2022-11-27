import { z } from "zod";

export const categoryCreateDTOValidator = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
});

export const productCreateDTOValidator = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number(),
});
