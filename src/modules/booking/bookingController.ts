import { NextFunction, Request, Response } from "express";
import {
  createBookingService,
  getABookingService,
  getBookingsService,
} from "./bookingService";
import httpStatus from "http-status";
import APIResponse from "../../utils/APIresponse";
import "../../interfaces";
import AppError from "../../utils/app-error";

export const createBookingController = async (req: Request, res: Response) => {
  req.body.user = req.user?._id;
  const booking = await createBookingService(req.body);

  res
    .status(httpStatus.CREATED)
    .json(new APIResponse("Ticket booked successfully", booking));
};

export const getBookingsController = async (req: Request, res: Response) => {
  const user = req.user?._id;
  const bookings = await getBookingsService(String(user));

  res
    .status(httpStatus.OK)
    .json(new APIResponse("Bookings fetch successfully", bookings));
};
export const getABookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const booking = await getABookingService(id);

  if (!booking)
    return next(new AppError("Booking not found", httpStatus.NOT_FOUND));

  res
    .status(httpStatus.OK)
    .json(new APIResponse("Booking fetch successfully", booking));
};
