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
  createUserSession({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ message: string; token: string }>;
}

export interface UserServiceInterface {
  createUser(data: UserRequest): Promise<User>;
  createUserSession({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ message: string; token: string }>;
}

export interface UserRepositoryInterface {
  createUser(data: UserRequest): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  createUserSession({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ message: string; token: string }>;
}

export interface UserControllerInterface {
  create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  login(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
}
