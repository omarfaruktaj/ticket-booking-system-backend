import { Request, Response } from "express";
import { createBookingService } from "./bookingService";
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
