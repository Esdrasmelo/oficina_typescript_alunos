import { IUserPayload, IUserEntity } from "../../../entities/user.entity";
import { IDefaultRepository } from "./defaultRepository.interface";

export interface IUserRepository
  extends IDefaultRepository<IUserEntity, IUserPayload> {}
