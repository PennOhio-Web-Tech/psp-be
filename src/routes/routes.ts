import { Router } from "express";
import { router as menuRouter } from "./menu-router";

const routes = Router();
routes.use("/menu", menuRouter);

export default routes;
