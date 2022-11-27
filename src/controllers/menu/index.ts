import { getMenu, addCategory, addProduct } from "../../use-cases/menu";

import makeGetMenu from "./get-menu";
import makePostCreateCategory from "./post-category";
import makePostCreateProduct from "./post-product";

const getMainMenu = makeGetMenu({ getMenu });
const postCreateCategory = makePostCreateCategory({ addCategory });
const postCreateProduct = makePostCreateProduct({ addProduct });

const MenuController = Object.freeze({
  getMainMenu,
  postCreateCategory,
  postCreateProduct,
});

export default MenuController;

export { getMainMenu, postCreateCategory, postCreateProduct };
