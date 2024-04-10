import { Request, Response } from "express";
import { Users } from "../models/Users";
import bcrypt from "bcrypt";

export const createUserController = async (request: Request, response: Response) => {
    try {
        const saltRounds = 10;
        bcrypt.hash(request.body.password, saltRounds, async function(error, hashedPassword) {
            const user = new Users({ 
                username: request.body.username,
                emailaddress: request.body.emailaddress,
                password: hashedPassword,
                isLoggedIn: request.body.isLoggedIn
            });

            if (error) {
                return response.status(400).json({message: "There was an issue hashing your password", error: error});
            }

            await user.save();
            return response.status(200).json({message: "User has been successfully created", data: user});
        });

    } catch (error) {
        return response.status(400).json({message: "Error creating user", error: error});
    }
}