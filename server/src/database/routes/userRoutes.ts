import { createUserController } from "../controller/createUserController";
import { deleteUserController } from "../controller/deleteUserController";
import express from "express";

const userRouter = express.Router();

userRouter.post("/users/register", createUserController);
userRouter.delete("/users/:userId", deleteUserController);

export default userRouter;