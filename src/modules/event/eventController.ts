import { RequestHandler } from "express";
import {
  createEventService,
  retrieveAEventService,
  retrieveAllEventService,
} from "./eventService";
import httpStatus from "http-status";
import APIResponse from "../../utils/APIresponse";
import AppError from "../../utils/app-error";

export const createEventController: RequestHandler = async (req, res) => {
  const event = await createEventService(req.body);

  res
    .status(httpStatus.CREATED)
    .json(new APIResponse("Events create successfully", event));
};

export const retrieveAllEventController: RequestHandler = async (
  _req,
  res,
  next
) => {
  const events = await retrieveAllEventService();

  if (!events.length)
    return next(new AppError("No available event found", httpStatus.NOT_FOUND));
  res
    .status(httpStatus.OK)
    .json(new APIResponse("Available events retrieve successfully", events));
};

export const retrieveAEventController: RequestHandler = async (
  req,
  res,
  next
) => {
  const eventId = req.params.eventId;
  const events = await retrieveAEventService(eventId);

  if (!eventId)
    return next(new AppError("No event found", httpStatus.NOT_FOUND));
  res
    .status(httpStatus.OK)
    .json(new APIResponse("Retrieve details fetch successfully", events));
};
