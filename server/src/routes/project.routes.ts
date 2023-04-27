import ProjectController from "../controllers/project.controller";
import { Auth } from "../middlewares/auth";
import { validate } from "../middlewares/schemaValidator";
import { projectSchema } from "../schemas/projectSchema";
import { Router } from "express";

const router = Router();
const projectController = new ProjectController();

export const projectRouter = () => {
  router.post(
    "/projects",
    Auth,
    validate(projectSchema),
    projectController.create.bind(projectController)
  );
  router.get(
    "/projects",
    Auth,
    projectController.index.bind(projectController)
  );

  return router;
};
