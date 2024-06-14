import { RequestHandler } from "express";
import { RetrieveAllEventService } from "./eventService";
import httpStatus from "http-status";
import APIResponse from "../../utils/APIresponse";
import AppError from "../../utils/app-error";

export const RetrieveAllEventController: RequestHandler = async (
  req,
  res,
  next
) => {
  const events = await RetrieveAllEventService();

  if (!events.length)
    return next(new AppError("No available event found", httpStatus.NOT_FOUND));
  res
    .status(httpStatus.OK)
    .json(new APIResponse("Available events retrieve successfully", events));
};
