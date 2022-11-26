import { OrderDb } from "../../data-access";

type MakeGetOrders = {
  orderDb: OrderDb;
};

export default function makeGetOrders({ orderDb }: MakeGetOrders) {
  return async function getOrders() {
    return await orderDb.getOrders();
  };
}
