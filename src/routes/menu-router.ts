import { Router } from "express";
import makeCallback from "../controllers/express-callback";
import MenuController from "../controllers/menu";

export const router = Router();
router.get("/getMainMenu", makeCallback(MenuController.getMainMenu));
