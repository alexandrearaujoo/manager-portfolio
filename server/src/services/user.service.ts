import { UserRequest, UserServiceInterface } from "@/interfaces/user.interface";
import UserRepository from "@/repositories/user.repository";

class UserService implements UserServiceInterface {
  constructor(private userRepository = new UserRepository()) {}

  async createUser(data: UserRequest) {
    return await this.userRepository.createUser(data);
  }
}

export default UserService;
