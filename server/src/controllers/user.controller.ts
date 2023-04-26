import { UserControllerInterface } from "@/interfaces/user.interface";
import UserService from "@/services/user.service";
import { Request, Response } from "express";

class UserController implements UserControllerInterface {
  constructor(private userService = new UserService()) {}

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    await this.userService.createUser({ name, email, password });

    return res.status(201).json({ message: "User created successfully" });
  }
}

export default UserController;
