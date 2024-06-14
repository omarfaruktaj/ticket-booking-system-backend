import express from "express";
import authorizeWithRoles from "../../middlewares/authorizeWithRoles";
import { processPaymentController } from "./paymentController";
import validateRequest from "../../middlewares/validateRequest";
import { paymentProcessValidationSchema } from "./paymentValidation";

const router = express.Router();

router.post(
  "/",
  authorizeWithRoles("user", "admin"),
  validateRequest(paymentProcessValidationSchema),
  processPaymentController,
);

export default router;
