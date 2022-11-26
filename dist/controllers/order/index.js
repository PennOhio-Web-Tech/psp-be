"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = exports.deleteOrder = exports.postOrder = void 0;
const orders_1 = require("../../use-cases/orders");
const post_order_1 = __importDefault(require("./post-order"));
const delete_order_1 = __importDefault(require("./delete-order"));
const get_orders_1 = __importDefault(require("./get-orders"));
const postOrder = (0, post_order_1.default)({ addOrder: orders_1.addOrder });
exports.postOrder = postOrder;
const deleteOrder = (0, delete_order_1.default)({ deleteOrderById: orders_1.deleteOrderById });
exports.deleteOrder = deleteOrder;
const getAllOrders = (0, get_orders_1.default)({ getOrders: orders_1.getOrders });
exports.getAllOrders = getAllOrders;
const OrdersController = Object.freeze({
    postOrder,
    deleteOrder,
    getAllOrders,
});
exports.default = OrdersController;
