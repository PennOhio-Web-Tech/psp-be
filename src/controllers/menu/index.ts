import { getMenu } from "../../use-cases/menu";

import makeGetMenu from "./get-menu";

const getMainMenu = makeGetMenu({ getMenu });

const MenuController = Object.freeze({
  getMainMenu,
});

export default MenuController;

export { getMainMenu };
