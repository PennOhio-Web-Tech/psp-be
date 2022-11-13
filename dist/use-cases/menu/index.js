"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenu = void 0;
const data_access_1 = require("../../data-access");
const getMenu_1 = __importDefault(require("./getMenu"));
const getMenu = (0, getMenu_1.default)({ menuDb: data_access_1.menuDb });
exports.getMenu = getMenu;
const MenuService = Object.freeze({
    getMenu,
});
exports.default = MenuService;
