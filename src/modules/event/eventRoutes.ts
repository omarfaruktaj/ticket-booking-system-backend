import express from "express";
import {
  retrieveAllEventController,
  retrieveAEventController,
  createEventController,
} from "./eventController";
import authorizeWithRoles from "../../middlewares/authorizeWithRoles";
import validateRequest from "../../middlewares/validateRequest";
import { eventValidationSchema } from "./eventValidation";

const router = express.Router();

router
  .route("/")
  .get(retrieveAllEventController)
  .post(
    authorizeWithRoles("admin"),
    validateRequest(eventValidationSchema),
    createEventController
  );
router.get("/:eventId", retrieveAEventController);

export default router;
