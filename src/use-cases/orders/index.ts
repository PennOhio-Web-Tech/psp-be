import makeAddOrder from "./addOrder";
import { orderDb } from "../../data-access";
import makeDeleteOrderById from "./deleteOrderById";
import makeGetOrders from "./getOrders";

const addOrder = makeAddOrder({ orderDb });
const deleteOrderById = makeDeleteOrderById({ orderDb });
const getOrders = makeGetOrders({ orderDb });

const OrderService = Object.freeze({
  addOrder,
  deleteOrderById,
  getOrders,
});
export default OrderService;
export { addOrder, deleteOrderById, getOrders };
