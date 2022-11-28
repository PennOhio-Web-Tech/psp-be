import { Category } from "@prisma/client";
import { HttpRequest, HttpResponse } from "../../@types/http";
import { CategoryCreateDTO } from "../../@types/Menu";

type AddCategory = {
  addCategory: (
    categoryCreateInput: CategoryCreateDTO
  ) => Promise<Category | null>;
};

export default function makePostCreateCategory({ addCategory }: AddCategory) {
  return async function postCreateCategory(
    httpRequest: HttpRequest
  ): Promise<HttpResponse | undefined> {
    try {
      const categoryFormInput = httpRequest.body;
      console.log(httpRequest);
      const category = await addCategory(categoryFormInput);

      return {
        headers: { "Content-Type": "application/json" },
        statusCode: 201,
        body: { category },
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
