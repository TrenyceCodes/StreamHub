import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<String> {
    const saltRounds = 10;

    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        return hashPassword;
    } catch (error) {
        throw new Error("There was an issue hashing your password: " + error);
    }
}