// /mnt/data/client.controller.ts
import { Response } from "express";
import { clientService } from "./client.service";  // Make sure clientService is imported correctly

export const clientController = {
    // Fetch client orders
    getOrders: async (req: any, res: Response) => {
        try {
            const clientId = req.user.id;  // Ensure req.user.id is set by authMiddleware
            const orders = await clientService.getOrders(clientId);
            res.json(orders);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch orders" });
        }
    },

    // Update client profile
    updateProfile: async (req: any, res: Response) => {
        try {
            const clientId = req.user.id;  // Ensure req.user.id is set by authMiddleware
            const profileData = req.body;
            const updatedProfile = await clientService.updateProfile(clientId, profileData);
            res.json(updatedProfile);
        } catch (error) {
            res.status(500).json({ error: "Failed to update profile" });
        }
    },

    // View client dashboard data
    getDashboardData: async (req: any, res: Response) => {
        try {
            const clientId = req.user.id;  // Ensure req.user.id is set by authMiddleware
            const dashboardData = await clientService.getDashboardData(clientId);
            res.json(dashboardData);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch dashboard data" });
        }
    }
};