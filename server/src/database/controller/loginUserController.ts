import { Request, Response } from "express";
import validator from "validator";
import { passwordComparison } from "../utils/passwordComparison";
import { Users } from "../models/Users";
import { passwordValidator } from "../utils/passwordValidator";

export const loginUserController = async (request: Request, response: Response) => {
    try {
        const {username, password} = request.body;
        const users = await Users.findOne({username});
        const passwordMatch = await passwordComparison(password, username);
        
        if (validator.isEmpty(username) || validator.isEmpty(password)) {
            return response.status(400).json({message: "User input field should not be empty"});
        }
        
        if (!users) {
            return response.status(400).json({message: "Invalid username or password combination"});
        }
        
        if (passwordValidator(password)) {
            return response.status(200).json({message: "Password must be 2-8 characters long"});
        }
        
        
        if (passwordMatch) {
            const user = {id: users._id, username: username};
            return response.status(200).json({message: "Login successful", data: {user}});
        } else {
            return response.status(400).json({message: "Invalid username or password combination"});
        }
    } catch (error) {
        return response.status(400).json({message: "User login went wrong", error: error});
    }
}