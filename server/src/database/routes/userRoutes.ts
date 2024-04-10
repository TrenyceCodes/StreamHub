import express from "express";
import { createUserController } from "../controller/createUserController";
import { deleteUserController } from "../controller/deleteUserController";
import { updateUserController } from "../controller/updateUserController";
import { loginUserController } from "../controller/loginUserController";
import { resetUsersPasswordController } from "../controller/resetUserPasswordController";

const userRouter = express.Router();

userRouter.post("/users/register", createUserController);
userRouter.delete("/users/:userId", deleteUserController);
userRouter.put("/users/:userId", updateUserController);
userRouter.post("/users/login", loginUserController);
userRouter.post("/users/reset_password", resetUsersPasswordController);

export default userRouter;