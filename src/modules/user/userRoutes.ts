import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./userValidation";
import { registerUserController } from "./userController";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidationSchema),
  registerUserController
);

export default router;
