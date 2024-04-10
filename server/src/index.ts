import express, { Request, Response } from "express";
import cors from "cors";
import { mongoConnection } from "./database/connection/mongoConnection";
import { createUserController } from "./database/controller/createUserController";
const server = express();
require("dotenv").config();

server.use(cors());
server.use(express.json());

//user controller routes
server.post("/users/register", createUserController);

server.get('/', (request: Request, response: Response) => {
    return response.send("hello world");
})

server.listen(process.env.PORT, async () => {
    await mongoConnection();
    return console.log(`Server is running on ${process.env.PORT}`);
});