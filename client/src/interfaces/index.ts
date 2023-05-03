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
