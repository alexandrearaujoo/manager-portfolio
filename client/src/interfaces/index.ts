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

export interface Session {
  name: string;
  email: string;
  image: string | null;
  token: string;
}

export interface UserStore {
  getSession: () => Promise<Session | null>;
  getCurrentUser: () => Promise<User | undefined>;
}

export interface ModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
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
