import { Request, Response } from "express";
import { sendEmailReset } from "../utils/sendEmailReset";

export const resetUsersPasswordController = async (request: Request, response: Response) => {
    sendEmailReset(request, response);
};
