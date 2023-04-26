import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import AppError from "@/errors";

export default function (
  error: any,
  req: Request,
  res: Response,
  _: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: error.issues[0].message,
    });
  }

  return res
    .status(500)
    .json({ message: "Internal server error. Try again", error });
}
