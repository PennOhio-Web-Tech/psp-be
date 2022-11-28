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
function makeAddProduct({ menuDb }) {
    return function addProduct(product, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield menuDb.findCategoryById(categoryId);
            if (!category) {
                throw new Error("Category not found");
            }
            const newProduct = (0, entities_1.makeProduct)(product);
            const productCreated = {
                data: {
                    name: newProduct.getName(),
                    description: newProduct.getDescription(),
                    price: newProduct.getPrice(),
                    category: {
                        connect: {
                            id: categoryId,
                        },
                    },
                },
                include: { topping: true, category: true },
            };
            return yield menuDb.addProduct(productCreated);
        });
    };
}
exports.default = makeAddProduct;
