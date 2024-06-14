import httpStatus from "http-status";
import stripePackage from "stripe";
import AppError from "../../utils/app-error";
import { getABookingService } from "../booking/bookingService";
import { TPaymentBody } from "./paymentValidation";
import { retrieveAEventService } from "../event/eventService";
import Payment from "./paymentModel";
import envConfig from "../../config/env";

const stripe = new stripePackage(envConfig.get("STRIPE_PAYMENT_SECRET"));

export const processPaymentService = async (data: TPaymentBody) => {
  const { booking: bookingId, paymentMethodId } = data;

  const booking = await getABookingService(String(bookingId));

  if (!booking) throw new AppError("No booking found", httpStatus.NOT_FOUND);

  const event = await retrieveAEventService(String(booking.event._id));

  if (!event)
    throw new AppError("We can not find this event.", httpStatus.NOT_FOUND);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: event.price * 100 * booking.ticketsBooked,
    currency: "usd",
    payment_method: paymentMethodId,
    confirm: true,
    metadata: { bookingId: booking._id.toString() },
  });

  const payment = new Payment({
    paymentId: paymentIntent.id,
    user: data.user,
    booking: booking._id,
    amount: event.price * booking.ticketsBooked,
    status: "completed",
  });

  const createdPayment = await payment.save();
  return createdPayment;
};
