import AppError from "@/errors";

import { UserRequest, ModelInterface } from "@/interfaces/user.interface";
import bcrypt from "bcrypt";
import { prisma } from "prisma/prismaClient";

class UserModel implements ModelInterface {
  async createUser(data: UserRequest) {
    const emailExists = await this.getUserByEmail(data.email);

    if (emailExists) {
      throw new AppError(400, "This email already exists");
    }

    return await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        hashedPassword: await bcrypt.hash(data.password, 10),
      },
    });
  }
  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  }

  async getUserById(id: string) {
    return await prisma.user.findUnique({ where: { id } });
  }
}

export default UserModel;
