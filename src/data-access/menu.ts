import { Prisma } from "@prisma/client";
import { MakeDb } from "../@types/db";

export default function makeMenuDb({ prisma }: MakeDb) {
  return Object.freeze({
    getMenu,
    addCategory,
    findById,
    addProduct,
    findCategoryById,
  });

  async function getMenu() {
    const menu = await prisma.menu.findMany({
      include: {
        categories: {
          include: {
            products: {
              include: {
                topping: true,
                category: true,
              },
            },
          },
        },
      },
    });

    return menu;
  }

  async function addCategory(category: Prisma.CategoryCreateArgs) {
    const newCategory = await prisma.category.create(category);

    return newCategory;
  }

  async function addProduct(product: Prisma.ProductCreateArgs) {
    const newProduct = await prisma.product.create(product);

    return newProduct;
  }

  async function findById(menuId: string) {
    const menu = await prisma.menu.findUnique({
      where: { id: menuId },
    });

    return menu;
  }

  async function findCategoryById(categoryId: string) {
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    return category;
  }
}
