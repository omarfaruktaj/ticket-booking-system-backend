import { retrieveAEventService } from "./../event/eventService";
import httpStatus from "http-status";
import AppError from "../../utils/app-error";
import Booking from "./bookingMode";
import { TBooking } from "./bookingValidation";

export const createBookingService = async (data: TBooking) => {
  const { event: eventId, ticketsBooked } = data;
  const event = await retrieveAEventService(String(eventId));
  if (!event) throw new AppError("No event found", httpStatus.NOT_FOUND);

  if (event.ticketsAvailable < ticketsBooked)
    throw new AppError("Not enough tickets available", httpStatus.BAD_REQUEST);

  event.ticketsAvailable -= ticketsBooked;
  await event.save();

  const booking = new Booking(data);

  const createdBooking = await booking.save();

  return createdBooking;
};
