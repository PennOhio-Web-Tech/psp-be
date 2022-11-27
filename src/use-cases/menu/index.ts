import { menuDb } from "../../data-access";

import makeGetMenu from "./getMenu";
import makeAddCategory from "./add-category";
import makeAddProduct from "./add-product";

const getMenu = makeGetMenu({ menuDb });
const addCategory = makeAddCategory({ menuDb });
const addProduct = makeAddProduct({ menuDb });

const MenuService = Object.freeze({
  getMenu,
  addCategory,
  addProduct,
});

export default MenuService;
export { getMenu, addCategory, addProduct };
