import { IUserRepository } from "../db/repository/types";
import { IUpdateUserPayload, IUserPayload } from "../entities/user.entity";
import { IUserService } from "./types";

export class UserService implements IUserService<IUserPayload> {
  constructor(private userRepository: IUserRepository) {}

  async getAll(): Promise<any> {
    try {
      const users = await this.userRepository.getAll();

      if (users.length) {
        return {
          status: 200,
          data: users,
        };
      }

      return {
        status: 404,
        message: "Ops! Dados não encontrados.",
      };
    } catch (error: any) {
      return {
        status: 500,
        message: "Ops! Algo aconteceu internamente.",
      };
    }
  }

  async create(data: IUserPayload): Promise<any> {
    try {
      const createdUser = await this.userRepository.create(data);

      return {
        status: 201,
        data: createdUser,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: "Ops! Algo aconteceu internamente.",
      };
    }
  }

  async update(id: number, data: IUpdateUserPayload): Promise<any> {
    try {
      const updatedUser = await this.userRepository.update(id, data);

      return {
        status: 200,
        data: updatedUser,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: "Ops! Algo aconteceu internamente.",
      };
    }
  }

  async delete(id: number): Promise<any> {
    try {
      const deletedUser = await this.userRepository.delete(id);

      if (!deletedUser) {
        return {
          status: 400,
          message: "Ops! Algo aconteceu.",
        };
      }

      return {
        status: 200,
        data: deletedUser,
      };
    } catch (error: any) {
      return {
        status: 500,
        message: "Ops! Algo aconteceu internamente.",
      };
    }
  }
}
