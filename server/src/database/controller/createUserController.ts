import { NextFunction, Request, Response } from "express";
import { Users } from "../models/Users";
import validator from "validator";
import { passwordValidator } from "../utils/passwordValidator";
import { hashPassword } from "../utils/hashPassword";

export const createUserController = async (request: Request, response: Response) => {
    try {
        const {username, emailaddress, password, isLoggedIn} = request.body;
        const currentUser = await Users.exists({username});

        if (validator.isEmpty(username) || validator.isEmpty(emailaddress) || validator.isEmpty(password)) {
            return response.status(400).json({message: "User input field should not be empty"});
        }

        if (currentUser) {
            return response.status(400).json({message: "username or emailaddress already in use"});
        }

        if (!validator.isEmail(emailaddress)) {
            return response.status(400).json({message: "User email address is not valid", data: {emailaddress}});
        }

        if (passwordValidator(password)) {
            return response.status(200).json({message: "Password must be 2-8 characters long"});
        }
        
        const hashedPassword = await hashPassword(password);

        let user = new Users({ 
            username: username,
            emailaddress: emailaddress,
            password: hashedPassword,
            isLoggedIn: isLoggedIn,
        });
        
        await user.save();
        return response.status(201).json({message: "Registration Successful"});     

    } catch (error) {
        return response.status(400).json({message: "Error creating user", error: error});
    }
}