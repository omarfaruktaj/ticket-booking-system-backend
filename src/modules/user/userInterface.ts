import { Model } from "mongoose";
import { TUser } from "./userValidation";

export interface UserModel extends Model<TUser> {
  correctPassword(
    candidatePassword: string,
    userPassword: string
  ): Promise<boolean>;
}

export const USER_ROLE = {
  admin: "admin",
  user: "user",
} as const;

export type TUserRole = keyof typeof USER_ROLE;
