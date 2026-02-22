import { db } from "@/db";
import { users } from "@/db/schema/user";
import { eq } from "drizzle-orm";

export const authRepository = {

    createUser: async (data: any) => {
        const [user] = await db.insert(users).values(data).returning();
        return user;
    },

    findByEmail: async (email: string) => {
        return db.query.users.findFirst({
            where: eq(users.email, email)
        });
    }

};