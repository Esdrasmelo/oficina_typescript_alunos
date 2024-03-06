import {
  IUpdateUserPayload,
  IUserEntity,
  IUserPayload,
} from "../../entities/user.entity";
import { prismaClient } from "../prisma";
import { IUserRepository } from "./types";

export class UserRepository implements IUserRepository {
  async create(data: IUserPayload): Promise<IUserEntity> {
    try {
      const createdUser = await prismaClient.user.create({
        data,
      });

      return createdUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getAll(): Promise<IUserEntity[]> {
    try {
      const users = await prismaClient.user.findMany();

      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async update(id: number, data: IUpdateUserPayload): Promise<IUserEntity> {
    try {
      const updatedUser = await prismaClient.user.update({
        where: {
          id,
        },
        data,
      });

      return updatedUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete(id: number): Promise<IUserEntity> {
    try {
      const deletedUser = await prismaClient.user.delete({
        where: {
          id,
        },
      });

      return deletedUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
