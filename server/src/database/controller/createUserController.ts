import { Request, Response, response } from "express";
import { Users } from "../models/Users";
import bcrypt from "bcrypt";
import validator from "validator";
import PasswordValidator from "password-validator";

function passwordValidator(password: string) {
    const validation = new PasswordValidator();
    return validation.min(2).max(8).validate(password);
}

async function hashPassword(password: string): Promise<String> {
    const saltRounds = 10;

    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        return hashPassword;
    } catch (error) {
        throw new Error("There was an issue hashing your password: " + error);
    }
}

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
            return response.status(200).json({message: ""})
        } 
        
        const hashedPassword = await hashPassword(password);
        const user = new Users({ 
            username: username,
            emailaddress: emailaddress,
            password: hashedPassword,
            isLoggedIn: isLoggedIn
        });

        await user.save();
        return response.status(200).json({message: "User has been successfully created", data: user});
    } catch (error) {
        return response.status(400).json({message: "Error creating user", error: error});
    }
}