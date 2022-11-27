import { HttpRequest, HttpResponse } from "../../@types/http";
import { GetMenu } from "../../@types/Menu";

export default function makeGetMenu({ getMenu }: GetMenu) {
  return async function getEngagement(
    httpRequest: HttpRequest
  ): Promise<HttpResponse | undefined> {
    try {
      const menu = await getMenu();
      return {
        headers: { "Content-Type": "application/json" },
        statusCode: 200,
        body: { menu },
      };
    } catch (error) {
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
