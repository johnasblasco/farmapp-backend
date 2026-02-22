import { Request, Response } from "express";
import { authService } from "./auth.service";

export const authController = {

    register: async (req: Request, res: Response) => {
        try {
            const result = await authService.register(req.body);
            res.json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    },

    login: async (req: Request, res: Response) => {
        try {
            const result = await authService.login(req.body);
            res.json(result);
        } catch (err: any) {
            res.status(401).json({ message: err.message });
        }
    }

};