"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.deleteOrderById = exports.addOrder = void 0;
const addOrder_1 = __importDefault(require("./addOrder"));
const data_access_1 = require("../../data-access");
const deleteOrderById_1 = __importDefault(require("./deleteOrderById"));
const getOrders_1 = __importDefault(require("./getOrders"));
const addOrder = (0, addOrder_1.default)({ orderDb: data_access_1.orderDb });
exports.addOrder = addOrder;
const deleteOrderById = (0, deleteOrderById_1.default)({ orderDb: data_access_1.orderDb });
exports.deleteOrderById = deleteOrderById;
const getOrders = (0, getOrders_1.default)({ orderDb: data_access_1.orderDb });
exports.getOrders = getOrders;
const OrderService = Object.freeze({
    addOrder,
    deleteOrderById,
    getOrders,
});
exports.default = OrderService;
