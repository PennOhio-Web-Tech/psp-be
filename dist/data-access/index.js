"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuDb = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const menu_1 = __importDefault(require("./menu"));
const menuDb = (0, menu_1.default)({ prisma: prisma_1.default });
exports.menuDb = menuDb;
