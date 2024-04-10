import { Request, Response } from "express";
import { Users } from "../models/Users";

export const createUserController = async (request: Request, response: Response) => {
    try {
        const user = new Users({ 
            username: request.body.username,
            emailaddress: request.body.emailaddress,
            password: request.body.password,
            isLoggedIn: request.body.isLoggedIn
        });

        await user.save();
        return response.status(200).json({message: "User has been successfully created", data: user});
    } catch (error) {
        return response.status(400).json({message: "Error creating user", error: error});
    }
}