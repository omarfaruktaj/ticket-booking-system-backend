import express from "express";
import userRoutes from "../modules/user/userRoutes";
import eventRoutes from "../modules/event/eventRoutes";
import bookingRoutes from "../modules/booking/bookingRotes";

const router = express.Router();

router.use("/auth", userRoutes);
router.use("/events", eventRoutes);
router.use("/booking", bookingRoutes);

export default router;
