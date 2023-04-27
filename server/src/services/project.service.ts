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
}

export default ProjectService;
