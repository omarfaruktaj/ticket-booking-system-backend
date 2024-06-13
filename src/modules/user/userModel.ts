import mongoose, { Schema } from "mongoose";
import { TUser } from "./userValidation";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    minlength: 2,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value: string) => isEmail(value),
      message: "Invalid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Password must be at least 6 characters long"],
    maxLength: [50, "Password can't be more then 50 characters long"],
    select: false,
  },
  profile: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model<TUser>("User", userSchema);

export default User;
