import express from "express";
import userRoutes from "../modules/user/userRoutes";
import eventRoutes from "../modules/event/eventRoutes";
import bookingRoutes from "../modules/booking/bookingRotes";
import paymentRoutes from "../modules/payment/paymentRoutes";

const router = express.Router();

router.use("/auth", userRoutes);
router.use("/events", eventRoutes);
router.use("/bookings", bookingRoutes);
router.use("/payments", paymentRoutes);

export default router;
