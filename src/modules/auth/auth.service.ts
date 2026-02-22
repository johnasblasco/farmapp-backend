import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authRepository } from "./auth.repository";

const JWT_SECRET = process.env.JWT_SECRET!;

export const authService = {

    register: async ({ name, email, password, role }: any) => {

        const existing = await authRepository.findByEmail(email);
        if (existing) throw new Error("Email already exists");

        const hashed = await bcrypt.hash(password, 10);

        const user = await authRepository.createUser({
            name,
            email,
            password: hashed,
            role
        });

        const token = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        return { user, token };
    },

    login: async ({ email, password }: any) => {

        const user = await authRepository.findByEmail(email);
        if (!user) throw new Error("Invalid credentials");

        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new Error("Invalid credentials");

        const token = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        return { user, token };
    }

};