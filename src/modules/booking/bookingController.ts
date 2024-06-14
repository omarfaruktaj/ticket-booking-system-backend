import { Request, Response } from "express";
import { createBookingService, getBookingsService } from "./bookingService";
import httpStatus from "http-status";
import APIResponse from "../../utils/APIresponse";
import "../../interfaces";

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
    .status(httpStatus.CREATED)
    .json(new APIResponse("Booking fetch successfully", bookings));
};
