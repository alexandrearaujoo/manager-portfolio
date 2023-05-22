import { Projects } from "@prisma/client";
import {
  ProjectRepositoryInterface,
  ProjectRequest,
} from "../interfaces/projects.interface";
import ProjectModel from "../models/projectsModel";

class ProjectRepository implements ProjectRepositoryInterface {
  constructor(private projectModel = new ProjectModel()) {}

  async createProject(data: ProjectRequest) {
    return this.projectModel.createProject(data);
  }

  async getUserProjects(userId: string) {
    return this.projectModel.getUserProjects(userId);
  }

  async getProjectById(id: string) {
    return this.projectModel.getProjectById(id);
  }

  async updateProject(id: string, data: ProjectRequest) {
    return this.projectModel.updateProject(id, data);
  }

  async deleteProject(id: string): Promise<Projects> {
    return this.projectModel.deleteProject(id);
  }
}

export default ProjectRepository;
