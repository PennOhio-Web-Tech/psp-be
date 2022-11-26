import { OrderDb } from "../../data-access";

type MakeDeleteOrderById = {
  orderDb: OrderDb;
};

export default function makeDeleteOrderById({ orderDb }: MakeDeleteOrderById) {
  return async function deleteOrderById(orderId: string) {
    const order = await orderDb.findById(orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    return await orderDb.deleteOrder(orderId);
  };
}
