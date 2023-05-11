import {
  ProjectRequest,
  ProjectServiceInterface,
} from "../interfaces/projects.interface";
import ProjectRepository from "../repositories/project.repository";

class ProjectService implements ProjectServiceInterface {
  constructor(private projectRepository = new ProjectRepository()) {}

  async createProject(data: ProjectRequest) {
    return this.projectRepository.createProject(data);
  }

  async getUserProjects(userId: string) {
    return this.projectRepository.getUserProjects(userId);
  }

  async updateProject(id: string, data: ProjectRequest) {
    return this.projectRepository.updateProject(id, data);
  }

  async deleteProject(id: string) {
    return this.projectRepository.deleteProject(id);
  }
}

export default ProjectService;
