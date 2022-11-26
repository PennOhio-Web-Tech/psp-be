import { z } from "zod";

export const orderCreateDTOValidator = z.object({
  subtotal: z.number().positive(),
  tax: z.number().positive(),
  total: z.number().positive(),
  paidWith: z.string(),
  products: z.array(
    z.object({
      productName: z.string(),
      toppings: z.array(z.string()),
    })
  ),
});
