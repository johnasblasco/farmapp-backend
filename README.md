# dynamic-setup-backend
Farmer Module Documentation
=======================

Overview

The Farmer module handles the management of farmer-related data, including fetching and updating orders and profiles. It includes functionality to mark orders as ready, picked up, or canceled, as well as deleting orders. Additionally, farmers can view and update their profiles.

This documentation provides the routes, services, and repositories involved in the Farmer module.

Routes

The Farmer module provides the following routes. All routes are protected by authentication middleware (authMiddleware).

Orders
Method	Route	Description	Controller Method
GET	/orders	Fetch all orders for the authenticated farmer.	getOrders
PATCH	/orders/:id/ready	Mark the order as "Ready".	markReady
PATCH	/orders/:id/picked-up	Mark the order as "Picked Up".	markPickedUp
PATCH	/orders/:id/cancel	Cancel the order.	cancelOrder
DELETE	/orders/:id	Delete the order.	deleteOrder
Profile
Method	Route	Description	Controller Method
GET	/profile	Fetch the profile of the authenticated farmer.	getProfile
PATCH	/profile	Update the profile of the authenticated farmer.	updateProfile
Controller

Farmer Controller Methods
The Farmer Controller handles all incoming requests related to farmer data and interacts with the Farmer Service to perform business logic.

text
import { Request, Response } from "express";
import { farmerService } from "./farmer.service";

export const farmerController = {
    // Fetch orders for the farmer
    getOrders: async (req: Request, res: Response) => { ... },

    // Mark order as ready
    markReady: async (req: Request, res: Response) => { ... },

    // Mark order as picked up
    markPickedUp: async (req: Request, res: Response) => { ... },

    // Cancel order
    cancelOrder: async (req: Request, res: Response) => { ... },

    // Delete order
    deleteOrder: async (req: Request, res: Response) => { ... },

    // Fetch farmer profile
    getProfile: async (req: Request, res: Response) => { ... },

    // Update farmer profile
    updateProfile: async (req: Request, res: Response) => { ... },
};
Each method corresponds to a route and handles the request-response cycle, calling the Farmer Service to perform the necessary actions.

Service

Farmer Service Methods
The Farmer Service abstracts the business logic. It interacts with the Farmer Repository to fetch and manipulate data related to orders and profiles.

text
import { farmerRepository } from "./farmer.repository";

export const farmerService = {
    getOrders: async (farmerId: string) => {
        return farmerRepository.getOrders(farmerId);  // Fetch orders for the farmer
    },

    markReady: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Ready");  // Mark order as "Ready"
    },

    markPickedUp: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Picked Up");  // Mark order as "Picked Up"
    },

    cancelOrder: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Cancelled");  // Cancel order
    },

    deleteOrder: async (id: string) => {
        return farmerRepository.deleteOrder(id);  // Delete order
    },

    getProfile: async (farmerId: string) => {
        return farmerRepository.getProfile(farmerId);  // Fetch farmer profile
    },

    updateProfile: async (farmerId: string, data: any) => {
        return farmerRepository.updateProfile(farmerId, data);  // Update farmer profile
    },
};
Repository

Farmer Repository Methods
The Farmer Repository directly interacts with the database to fetch and modify data for farmers and orders. It uses drizzle-orm to query the database.

text
import { db } from "../../db";
import { orders, farmers } from "../../db/schema";
import { eq } from "drizzle-orm";

export const farmerRepository = {
    getOrders: async (farmerId: string) => {
        return db.select().from(orders)
            .where(eq(orders.farmerId, farmerId));  // Fetch orders for the farmer
    },

    updateOrderStatus: async (id: string, status: string) => {
        return db.update(orders)
            .set({ status })
            .where(eq(orders.id, id))
            .returning();
    },

    deleteOrder: async (id: string) => {
        return db.delete(orders).where(eq(orders.id, id));
    },

    getProfile: async (farmerId: string) => {
        return db.select().from(farmers).where(eq(farmers.id, farmerId));  // Fetch farmer profile
    },

    updateProfile: async (farmerId: string, data: any) => {
        return db.update(farmers)
            .set(data)
            .where(eq(farmers.id, farmerId))
            .returning();
    },
};
Authentication Middleware

The authMiddleware ensures that routes are protected by checking the JWT token and attaching the authenticated user to the req.user object.

text
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];  // Assuming Bearer token

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        req.user = decoded;  // Attach user info to the request
        next();
    });
};
Summary of Routes

Method	Route	Description
GET	/orders	Fetch orders for the authenticated farmer
PATCH	/orders/:id/ready	Mark order as ready
PATCH	/orders/:id/picked-up	Mark order as picked up
PATCH	/orders/:id/cancel	Cancel the order
DELETE	/orders/:id	Delete the order
GET	/profile	Fetch farmer profile
PATCH	/profile	Update farmer profile