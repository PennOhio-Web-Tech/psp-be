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
function makeAddCategory({ menuDb }) {
    return function addCategory(category, menuId) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield menuDb.findById(menuId);
            if (!menu) {
                throw new Error("Menu not found");
            }
            const newCategory = (0, entities_1.makeCategory)(category);
            const categoryCreated = {
                data: {
                    name: newCategory.getName(),
                    description: newCategory.getDescription(),
                    menu: { connect: { id: menuId } },
                },
                include: { products: true },
            };
            return yield menuDb.addCategory(categoryCreated);
        });
    };
}
exports.default = makeAddCategory;
