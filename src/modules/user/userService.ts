import httpStatus from "http-status";
import AppError from "../../utils/app-error";
import User from "./userModel";
import { TLoginSchema, TUser } from "./userValidation";

export const RegisterUserService = async (data: TUser) => {
  const existedUser = await User.findOne({ email: data.email });

  if (existedUser)
    throw new AppError("User already Exist", httpStatus.CONFLICT);

  const user = await User.create(data);

  return user;
};

export const loginService = async (data: TLoginSchema) => {
  const user = await User.findOne({ email: data.email }).select("+password");

  if (!user) throw new AppError("No user found", httpStatus.NOT_FOUND);

  if (!(await User.correctPassword(data.password, user.password)))
    throw new AppError("Password do not match", httpStatus.FORBIDDEN);

  return user;
};
