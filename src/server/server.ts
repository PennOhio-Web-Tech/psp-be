import express from "express";

import { applyMiddleware } from "../middlewares";
import { routes } from "../routes";

const app = express();
applyMiddleware(app);
app.use("/api/v1", routes);

export default app;
