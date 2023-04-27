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
