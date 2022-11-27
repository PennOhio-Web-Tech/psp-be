import { z } from "zod";
import { ProductCreateDTO } from "../@types/Menu";
import { productCreateDTOValidator } from "../validators/menu";

export default function buildMakeProduct() {
  return function makeProduct(productCreateInput: ProductCreateDTO) {
    try {
      productCreateDTOValidator.parse(productCreateInput);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log({ error });
        throw new Error(error.issues[0].message);
      }
    }

    return Object.freeze({
      getName: () => productCreateInput.name,
      getDescription: () => productCreateInput.description || "",
      getPrice: () => productCreateInput.price,
    });
  };
}
