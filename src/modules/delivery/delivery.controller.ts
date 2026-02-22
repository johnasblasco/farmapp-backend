// /mnt/data/delivery.controller.ts
import { Response } from "express";
import { deliveryService } from "./delivery.service";  // Ensure deliveryService is imported

export const deliveryController = {
    // Fetch deliveries for a rider
    getDeliveries: async (req: any, res: Response) => {
        try {
            const riderId = req.user.id;  // Ensure req.user.id is set by authMiddleware
            const deliveries = await deliveryService.getDeliveries(riderId);
            res.json(deliveries);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch deliveries" });
        }
    },

    // Fetch all deliveries (admin)
    getAllDeliveries: async (req: any, res: Response) => {
        try {
            const deliveries = await deliveryService.getAllDeliveries();
            res.json(deliveries);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch all deliveries" });
        }
    },

    // Update delivery status
    updateStatus: async (req: any, res: Response) => {
        try {
            const { deliveryId, status } = req.body;  // Get deliveryId and status from request body
            const updatedDelivery = await deliveryService.updateStatus(deliveryId, status);
            res.json(updatedDelivery);
        } catch (error) {
            res.status(500).json({ error: "Failed to update delivery status" });
        }
    },

    // Assign rider to delivery
    assignRider: async (req: any, res: Response) => {
        try {
            const { deliveryId, riderId } = req.body;
            const assignedDelivery = await deliveryService.assignRider(deliveryId, riderId);
            res.json(assignedDelivery);
        } catch (error) {
            res.status(500).json({ error: "Failed to assign rider" });
        }
    }
};