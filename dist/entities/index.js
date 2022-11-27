"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCategory = exports.makeOrder = void 0;
const order_1 = __importDefault(require("./order"));
const category_1 = __importDefault(require("./category"));
exports.makeOrder = (0, order_1.default)();
exports.makeCategory = (0, category_1.default)();
