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
function makeMenuDb({ prisma }) {
    return Object.freeze({
        getMenu,
        addCategory,
        findById,
        addProduct,
        findCategoryById,
    });
    function getMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield prisma.menu.findMany({
                include: {
                    categories: {
                        include: {
                            products: {
                                include: {
                                    topping: true,
                                    category: true,
                                },
                            },
                        },
                    },
                },
            });
            return menu;
        });
    }
    function addCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = yield prisma.category.create(category);
            return newCategory;
        });
    }
    function addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = yield prisma.product.create(product);
            return newProduct;
        });
    }
    function findById(menuId) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield prisma.menu.findUnique({
                where: { id: menuId },
            });
            return menu;
        });
    }
    function findCategoryById(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield prisma.category.findUnique({
                where: { id: categoryId },
            });
            return category;
        });
    }
}
exports.default = makeMenuDb;
