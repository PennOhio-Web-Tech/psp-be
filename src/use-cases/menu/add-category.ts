import { Prisma } from "@prisma/client";
import { CategoryCreateDTO } from "../../@types/Menu";
import { MenuDb } from "../../data-access";
import { makeCategory } from "../../entities";

type MakeCategory = {
  menuDb: MenuDb;
};

export default function makeAddCategory({ menuDb }: MakeCategory) {
  return async function addCategory(
    category: CategoryCreateDTO,
    menuId: string
  ) {
    const menu = await menuDb.findById(menuId);

    if (!menu) {
      throw new Error("Menu not found");
    }

    const newCategory = makeCategory(category);

    const categoryCreated: Prisma.CategoryCreateArgs = {
      data: {
        name: newCategory.getName(),
        description: newCategory.getDescription(),
        menu: { connect: { id: menuId } },
      },
      include: { products: true },
    };

    return await menuDb.addCategory(categoryCreated);
  };
}
