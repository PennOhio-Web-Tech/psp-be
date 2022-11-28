"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.addCategory = exports.getMenu = void 0;
const data_access_1 = require("../../data-access");
const getMenu_1 = __importDefault(require("./getMenu"));
const add_category_1 = __importDefault(require("./add-category"));
const add_product_1 = __importDefault(require("./add-product"));
const getMenu = (0, getMenu_1.default)({ menuDb: data_access_1.menuDb });
exports.getMenu = getMenu;
const addCategory = (0, add_category_1.default)({ menuDb: data_access_1.menuDb });
exports.addCategory = addCategory;
const addProduct = (0, add_product_1.default)({ menuDb: data_access_1.menuDb });
exports.addProduct = addProduct;
const MenuService = Object.freeze({
    getMenu,
    addCategory,
    addProduct,
});
exports.default = MenuService;
