import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { clients } from "./client";  // Import the clients table

export const orders = pgTable("orders", {
    id: uuid("order_id").primaryKey().defaultRandom(),
    clientId: uuid("client_id")
        .references(() => clients.id, { onDelete: "cascade" })  // Correct foreign key reference with cascade on delete
        .notNull(),
    orderNumber: text("order_number").notNull(),
    status: text("status").$type<'Pending' | 'Ready' | 'Picked Up' | 'Cancelled'>().default("Pending"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});