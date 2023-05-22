import {
  ProjectRequest,
  ProjectModelInterface,
} from "../interfaces/projects.interface";
import { prisma } from "../../prisma/prismaClient";
import AppError from "@/errors";

class ProjectModel implements ProjectModelInterface {
  async createProject(data: ProjectRequest) {
    return await prisma.projects.create({ data: { ...data } });
  }

  async getUserProjects(userId: string) {
    return await prisma.projects.findMany({ where: { userId } });
  }

  async getProjectById(id: string) {
    if (id.length !== 24) throw new AppError(404, "Project not found");

    const project = await prisma.projects.findUnique({ where: { id } });

    if (!project) throw new AppError(404, "Project not found");

    return project;
  }

  async updateProject(id: string, data: ProjectRequest) {
    const project = await prisma.projects.findUnique({ where: { id } });

    if (!project) throw new AppError(404, "Project not found");

    return await prisma.projects.update({ where: { id }, data: { ...data } });
  }

  async deleteProject(id: string) {
    const project = await prisma.projects.findUnique({ where: { id } });

    if (!project) throw new AppError(404, "Project not found");

    return await prisma.projects.delete({ where: { id: project.id } });
  }
}

export default ProjectModel;
