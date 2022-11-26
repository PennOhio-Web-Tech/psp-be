"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const order_1 = require("../validators/order");
function buildMakeOrder() {
    return function makeOrder(orderCreateInput) {
        try {
            order_1.orderCreateDTOValidator.parse(orderCreateInput);
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                console.log({ error });
                throw new Error(error.issues[0].message);
            }
        }
        return Object.freeze({
            getSubtotal: () => orderCreateInput.subtotal,
            getTax: () => orderCreateInput.tax,
            getTotal: () => orderCreateInput.total,
            getPaymentMethod: () => orderCreateInput.paidWith,
            getProducts: () => orderCreateInput.products,
        });
    };
}
exports.default = buildMakeOrder;
