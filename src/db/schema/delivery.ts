// /mnt/data/delivery.ts
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";  // Assuming users table is already defined
import { orders } from "./order"; // Assuming orders table is already defined

export const deliveries = pgTable("deliveries", {
    id: uuid("id").defaultRandom().primaryKey(),
    orderId: uuid("order_id").references(() => orders.id).notNull(),  // Correct foreign key reference to order's id column
    riderId: uuid("rider_id").references(() => users.id),  // Correct foreign key reference to users' id column
    orderNumber: text("order_number").notNull(),
    customer: text("customer").notNull(),
    pickup: text("pickup").notNull(),
    dropoff: text("dropoff").notNull(),
    status: text("status").default("available"),  // available | in-progress | completed
    earnings: text("earnings").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});