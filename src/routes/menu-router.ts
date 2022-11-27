import { Router } from "express";
import makeCallback from "../controllers/express-callback";
import MenuController from "../controllers/menu";

export const router = Router();
router.get("/getMainMenu", makeCallback(MenuController.getMainMenu));
router.post(
  "/:menuId/category",
  makeCallback(MenuController.postCreateCategory)
);
router.post(
  "/:categoryId/product",
  makeCallback(MenuController.postCreateProduct)
);
