import express from "express";
import { RetrieveAllEventController } from "./eventController";

const router = express.Router();

router.route("/").get(RetrieveAllEventController);

export default router;
