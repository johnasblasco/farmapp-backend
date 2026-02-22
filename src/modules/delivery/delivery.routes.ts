// /mnt/data/delivery.routes.ts
import { Router } from "express";
import { deliveryController } from "./delivery.controller";  // Ensure deliveryController is imported
import { authMiddleware } from "../../middlewares/auth";  // Ensure authMiddleware is imported

const router = Router();

// Define routes for deliveries and protect them with authMiddleware
router.get("/deliveries", authMiddleware, deliveryController.getDeliveries);  // Fetch deliveries for rider
router.get("/all-deliveries", authMiddleware, deliveryController.getAllDeliveries);  // Fetch all deliveries (admin)
router.put("/update-status", authMiddleware, deliveryController.updateStatus);  // Update delivery status
router.put("/assign-rider", authMiddleware, deliveryController.assignRider);  // Assign rider to delivery

export default router;