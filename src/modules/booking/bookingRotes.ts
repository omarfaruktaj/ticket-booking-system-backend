import express from "express";
import authorizeWithRoles from "../../middlewares/authorizeWithRoles";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidationSchema } from "./bookingValidation";
import { createBookingController } from "./bookingController";

const router = express.Router();

router
  .route("/")
  .post(
    authorizeWithRoles("user", "admin"),
    validateRequest(BookingValidationSchema),
    createBookingController
  );

export default router;
