import { addOrder, deleteOrderById, getOrders } from "../../use-cases/orders";

import makePostCreateOrder from "./post-order";
import makeDeleteOrder from "./delete-order";
import makeGetAllOrders from "./get-orders";

const postOrder = makePostCreateOrder({ addOrder });
const deleteOrder = makeDeleteOrder({ deleteOrderById });
const getAllOrders = makeGetAllOrders({ getOrders });

const OrdersController = Object.freeze({
  postOrder,
  deleteOrder,
  getAllOrders,
});

export default OrdersController;

export { postOrder, deleteOrder, getAllOrders };
