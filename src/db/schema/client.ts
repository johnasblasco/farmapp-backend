// /mnt/data/client.ts
import { pgTable, text, uuid, serial } from "drizzle-orm/pg-core";

export const clients = pgTable("clients", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    phone: text("phone"),
    address: text("address"),
    // Additional client profile fields
});