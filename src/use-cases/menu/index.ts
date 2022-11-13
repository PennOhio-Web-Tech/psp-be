import { menuDb } from "../../data-access";

import makeGetMenu from "./getMenu";

const getMenu = makeGetMenu({ menuDb });

const MenuService = Object.freeze({
  getMenu,
});

export default MenuService;
export { getMenu };
