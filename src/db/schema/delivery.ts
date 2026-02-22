import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const deliveries = pgTable("deliveries", {
    id: uuid("id").defaultRandom().primaryKey(),

    orderNumber: text("order_number").notNull(),
    customer: text("customer").notNull(),

    pickup: text("pickup").notNull(),
    dropoff: text("dropoff").notNull(),

    riderId: uuid("rider_id"),

    status: text("status").default("available"),
    // available | in-progress | completed

    earnings: text("earnings").notNull(),

    createdAt: timestamp("created_at").defaultNow(),
});