export interface IUserEntity {
  id: number;
  name: string;
  email: string;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserPayload
  extends Omit<IUserEntity, "id" | "createdAt" | "updatedAt"> {}

export type IUpdateUserPayload = Partial<IUserPayload>;
