import { Projects } from "@prisma/client";
import { Request, Response } from "express";

export interface ProjectRequest {
  title: string;
  type?: string;
  slug?: string;
  thumbnail?: string;
  linkWebsite: string;
  linkRepository: string;
  description?: string;
  userId: string;
}

export interface ProjectModelInterface {
  createProject(data: ProjectRequest): Promise<Projects>;
  getUserProjects(userId: string): Promise<Projects[]>;
  getProjectById(id: string): Promise<Projects | null>;
}

export interface ProjectRepositoryInterface {
  createProject(data: ProjectRequest): Promise<Projects>;
  getUserProjects(userId: string): Promise<Projects[]>;
}

export interface ProjectServiceInterface {
  createProject(data: ProjectRequest): Promise<Projects>;
  getUserProjects(userId: string): Promise<Projects[]>;
}

export interface ProjectControllerInterface {
  create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
}
