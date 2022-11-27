import { Prisma } from "@prisma/client";
import { ProductCreateDTO } from "../../@types/Menu";
import { MenuDb } from "../../data-access";
import { makeProduct } from "../../entities";

type MakeProduct = {
  menuDb: MenuDb;
};

export default function makeAddProduct({ menuDb }: MakeProduct) {
  return async function addProduct(
    product: ProductCreateDTO,
    categoryId: string
  ) {
    const category = await menuDb.findCategoryById(categoryId);

    if (!category) {
      throw new Error("Category not found");
    }

    const newProduct = makeProduct(product);

    const productCreated: Prisma.ProductCreateArgs = {
      data: {
        name: newProduct.getName(),
        description: newProduct.getDescription(),
        price: newProduct.getPrice(),
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
      include: { topping: true, category: true },
    };

    return await menuDb.addProduct(productCreated);
  };
}
