"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCreateCategory = exports.getMainMenu = void 0;
const menu_1 = require("../../use-cases/menu");
const get_menu_1 = __importDefault(require("./get-menu"));
const post_category_1 = __importDefault(require("./post-category"));
const getMainMenu = (0, get_menu_1.default)({ getMenu: menu_1.getMenu });
exports.getMainMenu = getMainMenu;
const postCreateCategory = (0, post_category_1.default)({ addCategory: menu_1.addCategory });
exports.postCreateCategory = postCreateCategory;
const MenuController = Object.freeze({
    getMainMenu,
    postCreateCategory,
});
exports.default = MenuController;
