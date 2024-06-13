import httpStatus from "http-status";
import AppError from "../../utils/app-error";
import User from "./userModel";
import { TUser } from "./userValidation";

export const RegisterUserService = async (data: TUser) => {
  const existedUser = await User.findOne({ email: data.email });

  if (existedUser)
    throw new AppError("User already Exist", httpStatus.CONFLICT);

  const user = await User.create(data);

  return user;
};
