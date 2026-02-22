// /mnt/data/example.routes.ts
import { Router } from "express";
import { clientController } from "./client.controller";  // Ensure clientController is imported correctly
import { authMiddleware } from "../../middlewares/auth";  // Ensure authMiddleware is imported

const router = Router();

// Define routes and ensure they are protected by authMiddleware
router.get("/orders", authMiddleware, clientController.getOrders);  // Protected route to get orders
router.put("/profile", authMiddleware, clientController.updateProfile);  // Protected route to update profile
router.get("/dashboard", authMiddleware, clientController.getDashboardData);  // Protected route to get dashboard data

export default router;