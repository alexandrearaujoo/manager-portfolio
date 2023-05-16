import { ProjectRequest } from '@/schemas/projectSchema';

export interface User {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
  emailVerified: string | null;
  image: string | null;
  createdAt: string;
  token: string;
}

export interface Project {
  id: string;
  title: string;
  type: string | null;
  slug: string | null;
  thumbnail: string | null;
  linkWebsite: string;
  linkRepository: string;
  description: string | null;
  userId: string;
}

export interface Session {
  name: string;
  email: string;
  image: string | null;
  token: string;
}

export interface UserStore {
  user: User | null;
  getSession: () => Promise<Session | null>;
  getCurrentUser: () => Promise<User | null>;
}

export interface ModalStore {
  project: Project | null;
  isOpenCreateModal: boolean;
  onOpenCreateModal: () => void;
  onCloseCreateModal: () => void;
  isOpenUpdateModal: boolean;
  onOpenUpdateModal: (project: Project) => void;
  onCloseUpdateModal: () => void;
}

export interface ProjectStore {
  getUserProjects: () => Promise<Project[] | undefined>;
  createProject: (
    data: ProjectRequest
  ) => Promise<{ message: string; status: number }>;
  updateProject: (
    projectId: string,
    data: ProjectRequest,
    token?: string
  ) => Promise<{ message: string; status: number }>;
}

export interface ProjectUpdatedRequest {
  id: string;
  title: string;
  type: string | null;
  slug: string | null;
  thumbnail: string | null;
  linkWebsite: string;
  linkRepository: string;
  description: string | null;
}

interface InfoProps {
  access_mode: string;
  asset_id: string;
  batchId: string;
  bytes: number;
  created_at: string;
  etag: string;
  folder: string;
  format: string;
  height: number;
  id: string;
  original_filename: string;
  path: string;
  placeholder: boolean;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: string[];
  thumbnail_url: string;
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}

export interface ResultImageUpload {
  event: string;
  info: InfoProps;
}
