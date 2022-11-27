import { z } from "zod";

import { Category, Menu, Product, Topping } from "@prisma/client";
import {
  categoryCreateDTOValidator,
  productCreateDTOValidator,
} from "../validators/menu";

export type WithMenuDb = {
  menuDb: MenuDb;
};

export type MakeGetMenu = WithMenuDb;

export type MenuDb = Readonly<{
  getMenu: () => Promise<
    (Menu & {
      categories: (Category & {
        products: (Product & {
          topping: Topping[];
        })[];
      })[];
    })[]
  >;
}>;

export type GetMenu = {
  getMenu: () => Promise<
    (Menu & {
      categories: (Category & {
        products: (Product & {
          topping: Topping[];
        })[];
      })[];
    })[]
  >;
};

export type CategoryCreateDTO = z.infer<typeof categoryCreateDTOValidator>;
export type ProductCreateDTO = z.infer<typeof productCreateDTOValidator>;
