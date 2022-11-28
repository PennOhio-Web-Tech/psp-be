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
function makePostCreateProduct({ addProduct }) {
    return function postCreateProduct(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryId } = httpRequest.params;
                const productFormInput = httpRequest.body;
                console.log(httpRequest);
                const product = yield addProduct(productFormInput, categoryId);
                return {
                    headers: { "Content-Type": "application/json" },
                    statusCode: 201,
                    body: { product },
                };
            }
            catch (error) {
                console.log({ error });
                if (error instanceof Error) {
                    return {
                        headers: { "Content-Type": "application/json" },
                        statusCode: 400,
                        body: { error: error.message },
                    };
                }
            }
        });
    };
}
exports.default = makePostCreateProduct;
