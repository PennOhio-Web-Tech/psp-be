import { Order } from "@prisma/client";
import { HttpRequest } from "../../@types/http";

type MakeGetAllOrders = {
  getOrders: () => Promise<Order[]>;
};

export default function makeGetAllOrders({ getOrders }: MakeGetAllOrders) {
  return async function getAllOrders(httpRequest: HttpRequest) {
    try {
      const orders = await getOrders();

      return {
        headers: { "Content-Type": "application/json" },
        statusCode: 200,
        body: { orders },
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
