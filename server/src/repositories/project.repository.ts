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
}

export default ProjectRepository;
