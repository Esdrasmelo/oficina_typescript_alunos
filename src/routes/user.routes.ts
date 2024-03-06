import { Router } from "express";
import { UserService } from "../services/user.service";
import { UserRepository } from "../db/repository/user.repository";
import { IUserPayload } from "../entities/user.entity";

export const userRouter = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

userRouter.get("/", async (request, response) => {
  const { status, ...returnData } = await userService.getAll();

  return response.status(status).json(returnData);
});

userRouter.post("/", async (request, response) => {
  const userPayload: IUserPayload = request.body;

  const { status, ...returnData } = await userService.create(userPayload);

  return response.status(status).json(returnData);
});

userRouter.put("/:id", async (request, response) => {
  const id = Number(request.params.id);
  const userPayload = request.body;

  const { status, ...returnData } = await userService.update(id, userPayload);

  return response.status(status).json(returnData);
});

userRouter.delete("/:id", async (request, response) => {
  const id = Number(request.params.id);

  const { status, ...returnData } = await userService.delete(id);

  return response.status(status).json(returnData);
});
