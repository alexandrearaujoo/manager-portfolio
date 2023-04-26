import { User } from "@prisma/client";
import { Request, Response } from "express";

export interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export interface ModelInterface {
  createUser(data: UserRequest): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
}

export interface UserServiceInterface {
  createUser(data: UserRequest): Promise<User>;
}

export interface UserRepositoryInterface {
  createUser(data: UserRequest): Promise<User>;
  getUserById(id: string): Promise<User | null>;
}

export interface UserControllerInterface {
  create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  // findOne(email: string): Promise<User>;
  // findById(id: string): Promise<User>;
  // delete(id: string): Promise<void>;
  // update(id: string, user: User): Promise<User>;
}
