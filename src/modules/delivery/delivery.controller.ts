import { Request, Response } from "express";
import { deliveryService } from "./delivery.service";

export const deliveryController = {

    available: async (_req: Request, res: Response) => {
        const data = await deliveryService.getAvailable();
        res.json(data);
    },

    accept: async (req: Request, res: Response) => {
        const { taskId } = req.body;
        const riderId = req.user.id;

        const task = await deliveryService.acceptTask(taskId, riderId);
        res.json(task);
    },

    complete: async (req: Request, res: Response) => {
        const { taskId } = req.body;

        const task = await deliveryService.completeTask(taskId);
        res.json(task);
    },

    history: async (req: Request, res: Response) => {
        const riderId = req.user.id;

        const data = await deliveryService.getHistory(riderId);
        res.json(data);
    }
};