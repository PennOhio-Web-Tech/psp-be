import { z } from "zod";
import { CategoryCreateDTO } from "../@types/Menu";
import { categoryCreateDTOValidator } from "../validators/menu";

export default function buildMakeCategory() {
  return function makeCategory(categoryCreateInput: CategoryCreateDTO) {
    try {
      categoryCreateDTOValidator.parse(categoryCreateInput);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log({ error });
        throw new Error(error.issues[0].message);
      }
    }

    return Object.freeze({
      getName: () => categoryCreateInput.name,
      getDescription: () => categoryCreateInput.description || "",
    });
  };
}
