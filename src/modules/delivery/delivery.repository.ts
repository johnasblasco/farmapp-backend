// /mnt/data/delivery.repository.ts
import { db } from "../../db";
import { deliveries, orders, users } from "../../db/schema";  // Make sure orders and users are imported
import { eq, and } from "drizzle-orm";

export const deliveryRepository = {
    // Fetch deliveries for a rider
    getDeliveries: async (riderId: string) => {
        return db.select().from(deliveries)
            .where(eq(deliveries.riderId, riderId));  // Link deliveries to the rider (user)
    },

    // Fetch all deliveries (with filtering capabilities)
    getAllDeliveries: async () => {
        return db.select().from(deliveries);
    },

    // Update delivery status
    updateStatus: async (deliveryId: string, status: string) => {
        return db.update(deliveries)
            .set({ status })
            .where(eq(deliveries.id, deliveryId))
            .returning();
    },

    // Assign rider to delivery
    assignRider: async (deliveryId: string, riderId: string) => {
        return db.update(deliveries)
            .set({ riderId })
            .where(eq(deliveries.id, deliveryId))
            .returning();
    }
};