import { Category, Menu, Product, Topping } from "@prisma/client";

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
