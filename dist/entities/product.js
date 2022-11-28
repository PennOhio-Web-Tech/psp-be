"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const menu_1 = require("../validators/menu");
function buildMakeProduct() {
    return function makeProduct(productCreateInput) {
        try {
            menu_1.productCreateDTOValidator.parse(productCreateInput);
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                console.log({ error });
                throw new Error(error.issues[0].message);
            }
        }
        return Object.freeze({
            getName: () => productCreateInput.name,
            getDescription: () => productCreateInput.description || "",
            getPrice: () => productCreateInput.price,
        });
    };
}
exports.default = buildMakeProduct;
