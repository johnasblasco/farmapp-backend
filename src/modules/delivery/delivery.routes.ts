import { Router } from "express";
import { deliveryController } from "./delivery.controller";
import { authMiddleware } from "../../middlewares/auth";

const router = Router();

router.get("/available", authMiddleware, deliveryController.available);
router.post("/accept", authMiddleware, deliveryController.accept);
router.post("/complete", authMiddleware, deliveryController.complete);
router.get("/history", authMiddleware, deliveryController.history);

export default router;