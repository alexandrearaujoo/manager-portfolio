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

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const project = await this.projectService.getProjectById(id);

    return res.json(project)
  }

  async index(req: Request, res: Response) {
    const { id: userId } = req.user;
    const projects = await this.projectService.getUserProjects(userId);

    return res.status(200).json(projects);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const {
      title,
      type,
      slug,
      thumbnail,
      linkWebsite,
      linkRepository,
      description,
      userId,
    } = req.body;

    await this.projectService.updateProject(id, {
      title,
      type,
      slug,
      thumbnail,
      linkWebsite,
      linkRepository,
      description,
      userId,
    });

    return res.status(200).json({ message: "Project updated" });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await this.projectService.deleteProject(id);

    return res.status(200).json({ message: "Project deleted" });
  }
}

export default ProjectController;
