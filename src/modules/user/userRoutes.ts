import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { loginValidationSchema, userValidationSchema } from "./userValidation";
import { loginController, registerUserController } from "./userController";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidationSchema),
  registerUserController
);

router.post("/login", validateRequest(loginValidationSchema), loginController);

export default router;
