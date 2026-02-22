// /mnt/data/example.repository.ts
import { db } from "../../db";
import { orders, clients } from "../../db/schema";  // Make sure to import the clients schema
import { eq } from "drizzle-orm";

export const clientRepository = {
    // Fetch orders for the client
    getOrders: async (clientId: string) => {
        return db.select().from(orders)
            .where(eq(orders.clientId, clientId)); // Ensure orders are linked to clients via clientId
    },

    // Update client profile (as before)
    updateProfile: async (clientId: string, profileData: any) => {
        return db.update(clients)
            .set(profileData)
            .where(eq(clients.id, clientId))
            .returning();
    },

    // Fetch the client dashboard data (example)
    getDashboardData: async (clientId: string) => {
        return db.select().from(orders)
            .where(eq(orders.clientId, clientId))  // Ensure orders are linked to clients via clientId
            .groupBy(orders.status) // Modify as needed
            .count();
    }
};