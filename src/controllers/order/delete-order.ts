import { Order } from "@prisma/client";
import { HttpRequest, HttpResponse } from "../../@types/http";

type MakeDeleteOrder = {
  deleteOrderById: (OrderId: string) => Promise<Order>;
};

export default function makeDeleteOrder({ deleteOrderById }: MakeDeleteOrder) {
  return async function deleteOrder(
    httpRequest: HttpRequest
  ): Promise<HttpResponse | undefined> {
    try {
      const { orderId } = httpRequest.params;
      const deletedOrder = await deleteOrderById(orderId);

      return {
        headers: { "Content-Type": "application/json" },
        statusCode: 200,
        body: { deletedOrder },
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
