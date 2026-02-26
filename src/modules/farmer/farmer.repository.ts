// /mnt/data/farmer.repository.ts
import { db } from "../../db";
import { orders, farmers } from "../../db/schema";  // Make sure to import the farmers schema
import { eq } from "drizzle-orm";

export const farmerRepository = {
    // Fetch orders for the farmer (linked to farmerId)
    getOrders: async (farmerId: string) => {
        return db.select().from(orders)
            .where(eq(orders.clientId, farmerId));  // Ensure orders are linked to the farmer
    },

    // Update order status (used in markReady, markPickedUp, cancelOrder)
    updateOrderStatus: async (id: string, status: "Pending" | "Ready" | "Picked Up" | "Cancelled") => {
        return db.update(orders)
            .set({ status })
            .where(eq(orders.id, id))
            .returning();
    },

    // Delete order from orders table
    deleteOrder: async (id: string) => {
        return db.delete(orders).where(eq(orders.id, id));
    },

    // Fetch farmer's profile
    getProfile: async (farmerId: string) => {
        return db.select().from(farmers).where(eq(farmers.id, farmerId));  // Fetch farmer by ID
    },

    // Update farmer profile
    updateProfile: async (farmerId: string, data: any) => {
        return db.update(farmers)
            .set(data)
            .where(eq(farmers.id, farmerId))
            .returning();
    },
};