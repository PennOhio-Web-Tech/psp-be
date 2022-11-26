import { Router } from "express";
import { router as menuRouter } from "./menu-router";
import { router as ordersRouter } from "./orders-router";

const routes = Router();
routes.use("/menu", menuRouter);
routes.use("/orders", ordersRouter);

export default routes;
