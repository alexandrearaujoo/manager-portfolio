import { date } from "zod";
import { UserControllerInterface } from "../interfaces/user.interface";
import UserService from "../services/user.service";
import { Request, Response, CookieOptions } from "express";

class UserController implements UserControllerInterface {
  constructor(private userService = new UserService()) {}

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    await this.userService.createUser({ name, email, password });

    return res.status(201).json({ message: "User created successfully" });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await this.userService.createUserSession({
      email,
      password,
    });

    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    return res.cookie('isLoggedin', "true", {
      secure: true,
      httpOnly: false,
      sameSite: 'none',
      path: '/'
  }).json(user);
  }

  async show(req: Request, res: Response) {
    const { id } = req.user;

    const user = await this.userService.getUserById(id);

    return res.status(200).json(user);
  }
}

export default UserController;
