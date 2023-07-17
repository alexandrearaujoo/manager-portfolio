import { Project, ProjectStore } from '@/interfaces';
import { ProjectRequest } from '@/schemas/projectSchema';
import { api } from '@/services/api';
import { create } from 'zustand';

export const projectStore = create<ProjectStore>(() => ({
  getUserProjects: async (token: string) => {
    try {
      const { data } = await api.get<Project[]>('projects', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if ('message' in data) {
        return [];
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  },
  createProject: async (data: ProjectRequest, token: string) => {
    const { data: projectCreated } = await api.post<{
      message: string;
      status: number;
    }>('projects', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return projectCreated;
  },
  updateProject: async (
    projectId: string,
    data: ProjectRequest,
    token: string
  ) => {
    const res = await api.patch(`projects/${projectId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return { message: res.data.message, status: res.status };
  }
}));
