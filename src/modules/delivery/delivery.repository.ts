import { db } from "../../db";
import { deliveries } from "../../db/schema/delivery";
import { eq } from "drizzle-orm";

export const deliveryRepository = {

    getAvailable: async () => {
        return db.select().from(deliveries)
            .where(eq(deliveries.status, "available"));
    },

    accept: async (id: string, riderId: string) => {
        return db.update(deliveries)
            .set({ status: "in-progress", riderId })
            .where(eq(deliveries.id, id))
            .returning();
    },

    complete: async (id: string) => {
        return db.update(deliveries)
            .set({ status: "completed" })
            .where(eq(deliveries.id, id))
            .returning();
    },

    history: async (riderId: string) => {
        return db.select().from(deliveries)
            .where(eq(deliveries.riderId, riderId));
    }
};