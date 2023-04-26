import UserController from "@/controllers/user.controller";
import { validate } from "@/middlewares/schemaValidator";
import { userSchema } from "@/schemas/userSchema";
import { Router } from "express";

const router = Router();

const userController = new UserController();

export const userRouter = () => {
  router.post(
    "/users",
    validate(userSchema),
    userController.create.bind(userController)
  );

  return router;
};
