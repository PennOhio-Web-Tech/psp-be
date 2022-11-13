import { MakeDb } from "../@types/db";

export default function makeMenuDb({ prisma }: MakeDb) {
  return Object.freeze({
    getMenu,
  });

  async function getMenu() {
    const menu = await prisma.menu.findMany({
      include: {
        categories: {
          include: {
            products: {
              include: {
                topping: true,
              },
            },
          },
        },
      },
    });
    return menu;
  }
}
