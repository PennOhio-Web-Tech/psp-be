import { Router } from "express";
import makeCallback from "../controllers/express-callback";
import OrdersController from "../controllers/order";

export const router = Router();

router.post("/", makeCallback(OrdersController.postOrder));
router.delete("/:orderId", makeCallback(OrdersController.deleteOrder));
router.get("/all", makeCallback(OrdersController.getAllOrders));
