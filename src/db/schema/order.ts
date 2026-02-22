// /mnt/data/order.ts
import { pgTable, uuid, text, timestamp, numeric } from "drizzle-orm/pg-core";
import { clients } from "./client"; // Assuming clients table is already defined

export const orders = pgTable("orders", {
    id: uuid("id").defaultRandom().primaryKey(),
    orderNumber: text("order_number").notNull(),
    clientId: uuid("client_id").references(clients, "id").notNull(), // Link to clients
    total: numeric("total").notNull(),
    status: text("status").$type<'Pending' | 'Ready' | 'Picked Up' | 'Cancelled'>().default("Pending"),
    createdAt: timestamp("created_at").defaultNow(),
});