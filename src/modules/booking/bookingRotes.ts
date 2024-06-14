import express from "express";
import authorizeWithRoles from "../../middlewares/authorizeWithRoles";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidationSchema } from "./bookingValidation";
import {
  createBookingController,
  getABookingController,
  getBookingsController,
} from "./bookingController";

const router = express.Router();

router.use(authorizeWithRoles("user", "admin"));
router
  .route("/")
  .post(validateRequest(BookingValidationSchema), createBookingController)
  .get(getBookingsController);

router.get("/:id", getABookingController);

export default router;
