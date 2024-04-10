import express from "express";
import { createUserController } from "../controller/createUserController";
import { deleteUserController } from "../controller/deleteUserController";
import { updateUserController } from "../controller/updateUserController";
import { loginUserController } from "../controller/loginUserController";

const userRouter = express.Router();

userRouter.post("/users/register", createUserController);
userRouter.delete("/users/:userId", deleteUserController);
userRouter.put("/users/:userId", updateUserController);
userRouter.post("/users/login", loginUserController);

export default userRouter;