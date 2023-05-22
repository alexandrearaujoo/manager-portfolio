import { Project, ProjectStore } from '@/interfaces';
import { ProjectRequest } from '@/schemas/projectSchema';
import { fetchWrapper } from '@/utils/fetchWrapper';
import { create } from 'zustand';

export const projectStore = create<ProjectStore>(() => ({
  getUserProjects: async (token: string) => {
    const projects = await fetchWrapper<Project[]>('projects', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      cache: 'no-cache'
    });

    if ('message' in projects) {
      return [];
    }

    return projects;
  },
  createProject: async (data: ProjectRequest, token: string) => {
    const projectCreated = await fetchWrapper<{
      message: string;
      status: number;
    }>('projects', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body: JSON.stringify({ ...data }),
      cache: 'no-cache'
    });

    return projectCreated;
  },
  updateProject: async (
    projectId: string,
    data: ProjectRequest,
    token: string
  ) => {
    const projectUpdated = await fetchWrapper<{
      message: string;
      status: number;
    }>(`projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      method: 'PATCH',
      body: JSON.stringify({ ...data }),
      cache: 'no-cache'
    });

    return projectUpdated;
  }
}));
