"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCreateDTOValidator = void 0;
const zod_1 = require("zod");
exports.orderCreateDTOValidator = zod_1.z.object({
    subtotal: zod_1.z.number().positive(),
    tax: zod_1.z.number().positive(),
    total: zod_1.z.number().positive(),
    paidWith: zod_1.z.string(),
    products: zod_1.z.array(zod_1.z.object({
        productName: zod_1.z.string(),
        toppings: zod_1.z.array(zod_1.z.string()),
    })),
});
