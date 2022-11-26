"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_callback_1 = __importDefault(require("../controllers/express-callback"));
const menu_1 = __importDefault(require("../controllers/menu"));
exports.router = (0, express_1.Router)();
exports.router.get("/getMainMenu", (0, express_callback_1.default)(menu_1.default.getMainMenu));
