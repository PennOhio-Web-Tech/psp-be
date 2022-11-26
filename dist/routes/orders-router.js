"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_callback_1 = __importDefault(require("../controllers/express-callback"));
const order_1 = __importDefault(require("../controllers/order"));
exports.router = (0, express_1.Router)();
exports.router.post("/", (0, express_callback_1.default)(order_1.default.postOrder));
exports.router.delete("/:orderId", (0, express_callback_1.default)(order_1.default.deleteOrder));
exports.router.get("/all", (0, express_callback_1.default)(order_1.default.getAllOrders));
