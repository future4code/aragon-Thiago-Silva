import { Router } from "express";
import  { UserBusiness }  from "../business/UserBusiness";
import { UserController } from "../controller/UserController";

export const userRouter = Router();

const userController = new UserController (new UserBusiness())

userRouter.get('/users/:user', userController.get)