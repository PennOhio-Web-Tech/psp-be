"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainMenu = void 0;
const menu_1 = require("../../use-cases/menu");
const get_menu_1 = __importDefault(require("./get-menu"));
const getMainMenu = (0, get_menu_1.default)({ getMenu: menu_1.getMenu });
exports.getMainMenu = getMainMenu;
const MenuController = Object.freeze({
    getMainMenu,
});
exports.default = MenuController;
