"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function makeOrderDb({ prisma }) {
    return Object.freeze({
        getOrders,
        addOrder,
        deleteOrder,
        findById,
    });
    function getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.order.findMany({
                where: { isDeleted: false },
                include: { orderProducts: { include: { orderToppings: true } } },
            });
        });
    }
    function addOrder(orderCreateInput) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ orderCreateInput });
            return yield prisma.order.create(orderCreateInput);
        });
    }
    function deleteOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.order.update({
                where: { id: orderId },
                data: { isDeleted: true },
            });
        });
    }
    function findById(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.order.findUnique({
                where: { id: orderId },
            });
        });
    }
}
exports.default = makeOrderDb;
