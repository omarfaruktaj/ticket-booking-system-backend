import { Request, Response } from "express";
import { processPaymentService } from "./paymentService";
import httpStatus from "http-status";
import APIResponse from "../../utils/APIresponse";

export const processPaymentController = async (req: Request, res: Response) => {
  req.body.user = req.user?._id;

  const payment = await processPaymentService(req.body);

  res
    .status(httpStatus.OK)
    .json(new APIResponse("Booking fetch successfully", payment));
};
