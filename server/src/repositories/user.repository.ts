import {
  UserRepositoryInterface,
  UserRequest,
} from "@/interfaces/user.interface";
import UserModel from "@/models/userModel";

class UserRepository implements UserRepositoryInterface {
  constructor(private userModel = new UserModel()) {}

  async createUser(data: UserRequest) {
    return this.userModel.createUser(data);
  }

  async getUserById(id: string) {
    return this.userModel.getUserById(id);
  }
}

export default UserRepository;
