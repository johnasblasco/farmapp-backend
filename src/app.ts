import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { notFoundHandler } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// Core middlewares
app.use(
  cors({
    origin: env.CORS_ORIGIN || "*",
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// 404 + error handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
