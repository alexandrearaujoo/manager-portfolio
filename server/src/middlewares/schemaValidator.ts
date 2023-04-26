import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import errorHandler from "./errorHandler";

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);

      return next();
    } catch (error) {
      return errorHandler(error, req, res, next);
    }
  };
