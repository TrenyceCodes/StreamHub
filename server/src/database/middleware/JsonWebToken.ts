import { config } from "dotenv";
import { Response } from "express";
import jwt from "jsonwebtoken";
require("dotenv").config();

export function generateJsonWebToken(user: any, response: Response) {
    const token = jwt.sign(user, process.env.JSON_KEY!);

    const cookie = response.cookie("token", token, {
        httpOnly: true, //allows it to be accessible to web side
        maxAge: 60 * 60 * 24 * 30 * 1000, //accessible to 30 days
    });

    return cookie
}