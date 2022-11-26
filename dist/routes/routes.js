"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_router_1 = require("./menu-router");
const orders_router_1 = require("./orders-router");
const routes = (0, express_1.Router)();
routes.use("/menu", menu_router_1.router);
routes.use("/orders", orders_router_1.router);
exports.default = routes;
