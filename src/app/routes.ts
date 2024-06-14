import express from "express";
import userRoutes from "../modules/user/userRoutes";
import eventRoutes from "../modules/event/eventRoutes";

const router = express.Router();

router.use("/auth", userRoutes);
router.use("/events", eventRoutes);
export default router;
