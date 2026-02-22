import { pgTable, uuid, text, timestamp, numeric } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
    id: uuid("id").defaultRandom().primaryKey(),
    orderNumber: text("order_number").notNull(),
    clientName: text("client_name").notNull(),
    total: numeric("total").notNull(),
    status: text("status").$type<'Pending' | 'Ready' | 'Picked Up' | 'Cancelled'>().default("Pending"),
    createdAt: timestamp("created_at").defaultNow(),
});