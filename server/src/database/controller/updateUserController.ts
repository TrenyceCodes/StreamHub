import { Request, Response } from "express";
import { Users } from "../models/Users";

interface UpdatedUserInformation {
    username?: string,
    emailaddress?: string,
    password?: string,
}

export const updateUserController = async(request: Request, response: Response) => {
    try {
        const userId = request.params.userId;

        const {username, emailaddress, password } = request.body;

        const updatedFields: UpdatedUserInformation = {};
        
        if (emailaddress) updatedFields.emailaddress = emailaddress;
        if (password) updatedFields.password = password;
        if (username) updatedFields.username = username;

        const updatedUser = await Users.findByIdAndUpdate(userId, updatedFields);
        return response.status(200).json({message: "User is updated", data: updatedUser});
    } catch (error) {
        return response.status(400).json({message: "Cannot update user", error: error});
    }
}