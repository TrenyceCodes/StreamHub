import bcrypt from "bcrypt";
import { Users } from "../models/Users";

export async function passwordComparison(password: string, username: string): Promise<boolean> {
    try {
        const user = await Users.findOne({username});
    
        if (!user) {
            throw new Error("User not found");
        }
    
        const passwordMatch = await bcrypt.compare(password, user.password);
        return passwordMatch;
    } catch (error) {
        throw new Error("Comparing password failed: " + error);
    }
}
