import { Router } from "express";
import { farmerController } from "./farmer.controller";

const router = Router();

// Orders
router.get("/orders", farmerController.getOrders);
router.patch("/orders/:id/ready", farmerController.markReady);
router.patch("/orders/:id/picked-up", farmerController.markPickedUp);
router.patch("/orders/:id/cancel", farmerController.cancelOrder);
router.delete("/orders/:id", farmerController.deleteOrder);

// Profile
router.get("/profile/:id", farmerController.getProfile);
router.patch("/profile/:id", farmerController.updateProfile);

export default router;