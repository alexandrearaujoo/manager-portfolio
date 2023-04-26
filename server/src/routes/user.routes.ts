import UserController from "@/controllers/user.controller";
import { Auth } from "@/middlewares/auth";
import { validate } from "@/middlewares/schemaValidator";
import { loginSchema, userSchema } from "@/schemas/userSchema";
import { Router } from "express";

const router = Router();

const userController = new UserController();

export const userRouter = () => {
  router.post(
    "/users",
    validate(userSchema),
    userController.create.bind(userController)
  );
  router.post(
    "/users/login",
    validate(loginSchema),
    userController.login.bind(userController)
  );

  router.get("/users", Auth, userController.show.bind(userController));

  return router;
};
