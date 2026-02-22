import { Request, Response } from "express";
import { farmerService } from "./farmer.service";

export const farmerController = {
    getOrders: async (_req: Request, res: Response) => {
        const orders = await farmerService.getOrders();
        res.json(orders);
    },

    markReady: async (req: Request, res: Response) => {
        const { id } = req.params;
        const order = await farmerService.markReady(id);
        res.json(order);
    },

    markPickedUp: async (req: Request, res: Response) => {
        const { id } = req.params;
        const order = await farmerService.markPickedUp(id);
        res.json(order);
    },

    cancelOrder: async (req: Request, res: Response) => {
        const { id } = req.params;
        const order = await farmerService.cancelOrder(id);
        res.json(order);
    },

    deleteOrder: async (req: Request, res: Response) => {
        const { id } = req.params;
        await farmerService.deleteOrder(id);
        res.json({ success: true });
    },

    getProfile: async (req: Request, res: Response) => {
        const { id } = req.params;
        const profile = await farmerService.getProfile(id);
        res.json(profile);
    },

    updateProfile: async (req: Request, res: Response) => {
        const { id } = req.params;
        const updated = await farmerService.updateProfile(id, req.body);
        res.json(updated);
    },
};