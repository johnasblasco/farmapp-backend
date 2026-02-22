import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { notFoundHandler } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import authRoutes from "@/modules/auth/auth.routes";

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
app.use("/api/auth", authRoutes);

// 404 + error handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
