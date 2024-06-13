import jwt from "jsonwebtoken";
import { Types } from "mongoose";

interface Payload {
  userId: Types.ObjectId;
}

const generateJWT = (data: Payload, secret: string, expireIn: string) => {
  return jwt.sign(data, secret, {
    expiresIn: expireIn,
  });
};

export default generateJWT;
