import AppError from "@/errors";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const Auth = (req: Request, _: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError(401, "Token not provided");
  }

  try {
    const [, token] = authHeader.split(" ");
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret);

    const { sub } = decoded;

    req.user = {
      id: sub as string,
    };

    return next();
  } catch (error) {
    throw new AppError(401, "Invalid token");
  }
};
