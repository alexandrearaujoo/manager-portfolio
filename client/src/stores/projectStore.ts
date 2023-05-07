import { Project, ProjectStore } from '@/interfaces';
import { fetchWrapper } from '@/utils/fetchWrapper';
import { create } from 'zustand';

export const projectStore = create<ProjectStore>(() => ({
  getUserProjects: async () => {
    const projects = await fetchWrapper<Project[]>('projects', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`
      }
    });

    if ('message' in projects) {
      return [];
    }

    return projects;
  }
}));
