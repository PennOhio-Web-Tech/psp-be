import { Product } from "@prisma/client";
import { HttpRequest, HttpResponse } from "../../@types/http";
import { ProductCreateDTO } from "../../@types/Menu";

type AddProduct = {
  addProduct: (
    productCreateInput: ProductCreateDTO,
    CategoryId: string
  ) => Promise<Product | null>;
};

export default function makePostCreateProduct({ addProduct }: AddProduct) {
  return async function postCreateProduct(
    httpRequest: HttpRequest
  ): Promise<HttpResponse | undefined> {
    try {
      const { categoryId } = httpRequest.params;
      const productFormInput = httpRequest.body;
      console.log(httpRequest);
      const product = await addProduct(productFormInput, categoryId);

      return {
        headers: { "Content-Type": "application/json" },
        statusCode: 201,
        body: { product },
      };
    } catch (error) {
      console.log({ error });
      if (error instanceof Error) {
        return {
          headers: { "Content-Type": "application/json" },
          statusCode: 400,
          body: { error: error.message },
        };
      }
    }
  };
}
