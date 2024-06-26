import { RequestHandler } from "express";
import { RegisterUserService, loginService } from "./userService";
import httpStatus from "http-status";
import APIResponse from "../../utils/APIresponse";
import generateJWT from "../../utils/generateJWT";
import envConfig from "../../config/env";

export const registerUserController: RequestHandler = async (req, res) => {
  const user = await RegisterUserService(req.body);

  const token = generateJWT(
    { userId: user._id },
    envConfig.get("ACCESS_TOKEN_SECRET"),
    envConfig.get("ACCESS_TOKEN_EXPIRE_IN")
  );

  res
    .status(httpStatus.CREATED)
    .json(new APIResponse("User created successfully", user, token));
};

export const loginController: RequestHandler = async (req, res) => {
  const user = await loginService(req.body);

  const token = generateJWT(
    { userId: user._id },
    envConfig.get("ACCESS_TOKEN_SECRET"),
    envConfig.get("ACCESS_TOKEN_EXPIRE_IN")
  );

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    token: token,
    data: user,
  });
};
