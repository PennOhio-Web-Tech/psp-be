"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = void 0;
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    info: {
        title: "Project PSP API docs",
        version: "1.0.0",
        description: "Documentation for all CRUD operations and routes in project PSP", // short description of the app
    },
    host: "localhost:4040",
    basePath: "/api/v1", // the basepath of your endpoint
};
const options = {
    swaggerDefinition,
    apis: ["./src/routes/*.yaml"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function parseError(err) {
    return (err instanceof SyntaxError && err.status === 400 && "body" in err);
}
const handleJsonError = (err, _req, res, next) => {
    if (parseError(err)) {
        return res.status(400).json({ err: err.message });
    }
    return next();
};
function applyMiddleware(app) {
    app.use((0, cors_1.default)({
        credentials: true,
        origin: [
            process.env.CLIENT_URL || "http://localhost:3000",
            /\.soldierengagement\.com$/,
        ],
    }));
    app.use((0, helmet_1.default)());
    app.use((0, express_1.json)());
    app.use(handleJsonError);
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
}
exports.applyMiddleware = applyMiddleware;
