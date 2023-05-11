import {
  ProjectRequest,
  ProjectModelInterface,
} from "../interfaces/projects.interface";
import { prisma } from "../../prisma/prismaClient";

class ProjectModel implements ProjectModelInterface {
  async createProject(data: ProjectRequest) {
    return await prisma.projects.create({ data: { ...data } });
  }

  async getUserProjects(userId: string) {
    return await prisma.projects.findMany({ where: { userId } });
  }

  async getProjectById(id: string) {
    return await prisma.projects.findUnique({ where: { id } });
  }

  async updateProject(id: string, data: ProjectRequest) {
    return await prisma.projects.update({ where: { id }, data });
  }

  async deleteProject(id: string) {
    return await prisma.projects.delete({ where: { id } });
  }
}

export default ProjectModel;
