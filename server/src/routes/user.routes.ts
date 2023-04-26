import { Router } from "express";

const router = Router();

export const userRouter = () => {
  router.get("/users", (req, res) => res.json({ message: "Hello from server!" }));

  return router;
};
