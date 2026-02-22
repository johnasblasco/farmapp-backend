import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../config/env";
import * as schema from "./schema/"; // 👈 import everything

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: env.NODE_ENV === "production"
    ? { rejectUnauthorized: false }
    : false
});

export const db = drizzle(pool, { schema }); // 👈 PASS SCHEMA

export async function closeDb() {
  await pool.end();
}