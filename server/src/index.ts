import express from "express";
import cors from "cors";
import { mongoConnection } from "./database/connection/mongoConnection";
import userRouter from "./database/routes/userRoutes";
import cookieParser from "cookie-parser";

const server = express();
require("dotenv").config();

server.use(cors({ origin: process.env.origin_link, credentials: true }))
server.use(express.json());
server.use(cookieParser());

//user controller routes
server.use(userRouter);

server.listen(process.env.PORT, async () => {
    await mongoConnection();
    return console.log(`Server is running on ${process.env.PORT}`);
});