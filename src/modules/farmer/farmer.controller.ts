// /mnt/data/farmer.controller.ts
import { Response } from "express";
import { farmerService } from "./farmer.service";  // Ensure farmerService is imported

export const farmerController = {
    // Fetch orders for the farmer (filtered by farmerId)
    getOrders: async (req: any, res: Response) => {
        try {
            const farmerId = req.user.id;  // Ensure req.user.id is set by authMiddleware
            const orders = await farmerService.getOrders(farmerId);
            res.json(orders);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch orders" });
        }
    },

    // Mark order as ready
    markReady: async (req: any, res: Response) => {
        try {
            const { id } = req.params;
            const order = await farmerService.markReady(id);
            res.json(order);
        } catch (error) {
            res.status(500).json({ error: "Failed to mark order as ready" });
        }
    },

    // Mark order as picked up
    markPickedUp: async (req: any, res: Response) => {
        try {
            const { id } = req.params;
            const order = await farmerService.markPickedUp(id);
            res.json(order);
        } catch (error) {
            res.status(500).json({ error: "Failed to mark order as picked up" });
        }
    },

    // Cancel order
    cancelOrder: async (req: any, res: Response) => {
        try {
            const { id } = req.params;
            const order = await farmerService.cancelOrder(id);
            res.json(order);
        } catch (error) {
            res.status(500).json({ error: "Failed to cancel order" });
        }
    },

    // Delete order
    deleteOrder: async (req: any, res: Response) => {
        try {
            const { id } = req.params;
            await farmerService.deleteOrder(id);
            res.json({ success: true });
        } catch (error) {
            res.status(500).json({ error: "Failed to delete order" });
        }
    },

    // Fetch farmer profile
    getProfile: async (req: any, res: Response) => {
        try {
            const farmerId = req.user.id;  // Ensure req.user.id is set by authMiddleware
            const profile = await farmerService.getProfile(farmerId);
            res.json(profile);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch profile" });
        }
    },

    // Update farmer profile
    updateProfile: async (req: any, res: Response) => {
        try {
            const farmerId = req.user.id;  // Ensure req.user.id is set by authMiddleware
            const updated = await farmerService.updateProfile(farmerId, req.body);
            res.json(updated);
        } catch (error) {
            res.status(500).json({ error: "Failed to update profile" });
        }
    },
};