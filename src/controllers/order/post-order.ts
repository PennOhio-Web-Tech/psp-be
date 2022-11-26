import { Order } from "@prisma/client";
import { HttpRequest, HttpResponse } from "../../@types/http";
import { OrderCreateDTO } from "../../@types/Order";

type AddOrder = {
  addOrder: (orderCreateInput: OrderCreateDTO) => Promise<Order | null>;
};

export default function makePostCreateOrder({ addOrder }: AddOrder) {
  return async function postCreateOrder(
    httpRequest: HttpRequest
  ): Promise<HttpResponse | undefined> {
    try {
      const orderFormInput = httpRequest.body;

      const order = await addOrder(orderFormInput);

      return {
        headers: { "Content-Type": "application/json" },
        statusCode: 201,
        body: { order },
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
