import { Request, Response } from "express";
import { Users } from "../models/Users";

export const deleteUserController = async (request: Request, response: Response) => {
    try {
        const userId = request.params.userId;

        // Validate userId (optional, depending on your requirements)
        if (!userId) {
            return response.status(400).json({ message: "User ID is required" });
        }

        const currentUser = await Users.findByIdAndDelete(userId);

        if (!currentUser) {
            return response.status(404).json({ message: "User not found" });
        }

        return response.status(200).json({ message: "User has been successfully deleted", currentUser });
    } catch(error) {
        console.error("An error occurred while deleting the user:", error);
        return response.status(500).json({ message: "An error has occurred while deleting the user" });
    }
}
