import { Request, Response } from "express";
import nodemailer from "nodemailer";
require("dotenv").config();

export const sendEmailReset = async (request: Request, response: Response) => {
    try {
        const { emailaddress } = request.body;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: process.env.EMAIL_ADDRESS!,
                pass: process.env.EMAIL_PASSWORD!,
            },
        });
    
        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: emailaddress,
            subject: "Password Reset Request",
            text: `You are receiving this email because you (or someone else) has requested a password reset for your account.\n\n`
                + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
                + `If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };
    
        await transporter.sendMail(mailOptions);
    
        return response.status(200).json({ message: "Password reset email has been sent" });
    } catch (error) {
        console.error("Error resetting password:", error);
        return response.status(500).json({ message: "An error occurred while processing your request" });
    }
};
