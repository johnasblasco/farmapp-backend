import { db } from "../../db";
import { orders, farmers } from "../../db/schema";
import { eq } from "drizzle-orm";

export const farmerRepository = {
    getOrders: async () => {
        return db.select().from(orders);
    },

    updateOrderStatus: async (id: string, status: string) => {
        return db
            .update(orders)
            .set({ status })
            .where(eq(orders.id, id))
            .returning();
    },

    deleteOrder: async (id: string) => {
        return db.delete(orders).where(eq(orders.id, id));
    },

    getProfile: async (id: string) => {
        return db.select().from(farmers).where(eq(farmers.id, id));
    },

    updateProfile: async (id: string, data: any) => {
        return db
            .update(farmers)
            .set(data)
            .where(eq(farmers.id, id))
            .returning();
    },
};