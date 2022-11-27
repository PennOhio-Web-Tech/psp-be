"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const menu_1 = require("../validators/menu");
function buildMakeCategory() {
    return function makeCategory(categoryCreateInput) {
        try {
            menu_1.categoryCreateDTOValidator.parse(categoryCreateInput);
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                console.log({ error });
                throw new Error(error.issues[0].message);
            }
        }
        return Object.freeze({
            getName: () => categoryCreateInput.name,
            getDescription: () => categoryCreateInput.description,
        });
    };
}
exports.default = buildMakeCategory;
