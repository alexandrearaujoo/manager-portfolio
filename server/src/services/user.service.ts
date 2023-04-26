import { UserRequest, UserServiceInterface } from "@/interfaces/user.interface";
import UserRepository from "@/repositories/user.repository";

class UserService implements UserServiceInterface {
  constructor(private userRepository = new UserRepository()) {}

  async createUser(data: UserRequest) {
    return await this.userRepository.createUser(data);
  }

  async createUserSession({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    return await this.userRepository.createUserSession({ email, password });
  }
  async getUserById(id: string) {
    return await this.userRepository.getUserById(id);
  }
}

export default UserService;
