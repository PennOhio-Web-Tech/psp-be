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
const entities_1 = require("../../entities");
function makeAddOrder({ orderDb }) {
    return function addOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const newOrder = (0, entities_1.makeOrder)(order);
            const orderCreated = {
                data: {
                    subtotal: newOrder.getSubtotal(),
                    tax: newOrder.getTax(),
                    total: newOrder.getTotal(),
                    paidWith: newOrder.getPaymentMethod(),
                    orderProducts: {
                        create: newOrder.getProducts().map((product) => {
                            return {
                                productName: product.productName,
                                productPrice: product.productPrice,
                                orderToppings: {
                                    create: product.toppings.map((topping) => {
                                        return {
                                            toppingName: topping,
                                        };
                                    }),
                                },
                            };
                        }),
                    },
                },
                include: { orderProducts: { include: { orderToppings: true } } },
            };
            return yield orderDb.addOrder(orderCreated);
        });
    };
}
exports.default = makeAddOrder;
