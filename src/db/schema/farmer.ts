// /mnt/data/farmer.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core";

export const farmers = pgTable("farmers", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name"),
    email: text("email"),
    phone: text("phone"),
    farmName: text("farm_name"),
    location: text("location"),
});