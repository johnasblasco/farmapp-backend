// /mnt/data/farmer.routes.ts
import { Router } from "express";
import { farmerController } from "./farmer.controller";  // Ensure farmerController is imported
import { authMiddleware } from "../../middlewares/auth";  // Ensure authMiddleware is imported

const router = Router();

// Orders
router.get("/orders", authMiddleware, farmerController.getOrders);  // Fetch orders for the farmer
router.patch("/orders/:id/ready", authMiddleware, farmerController.markReady);  // Mark order as ready
router.patch("/orders/:id/picked-up", authMiddleware, farmerController.markPickedUp);  // Mark order as picked up
router.patch("/orders/:id/cancel", authMiddleware, farmerController.cancelOrder);  // Cancel order
router.delete("/orders/:id", authMiddleware, farmerController.deleteOrder);  // Delete order

// Profile
router.get("/profile", authMiddleware, farmerController.getProfile);  // Fetch farmer profile
router.patch("/profile", authMiddleware, farmerController.updateProfile);  // Update farmer profile

export default router;