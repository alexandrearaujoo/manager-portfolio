import { ProjectControllerInterface } from "../interfaces/projects.interface";
import ProjectService from "../services/project.service";
import { Request, Response } from "express";

class ProjectController implements ProjectControllerInterface {
  constructor(private projectService = new ProjectService()) {}

  async create(req: Request, res: Response) {
    const {
      title,
      type,
      slug,
      thumbnail,
      linkWebsite,
      linkRepository,
      description,
    } = req.body;

    const { id: userId } = req.user;

    await this.projectService.createProject({
      title,
      type,
      slug,
      thumbnail,
      linkWebsite,
      linkRepository,
      description,
      userId,
    });

    return res.status(201).json({ message: "Project created" });
  }

  async index(req: Request, res: Response) {
    const { id: userId } = req.user;
    const projects = await this.projectService.getUserProjects(userId);

    return res.status(200).json(projects);
  }
}

export default ProjectController;
