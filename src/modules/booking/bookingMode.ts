import { Schema, model } from "mongoose";
import { TBooking } from "./bookingValidation";

const bookingSchema = new Schema<TBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    ticketsBooked: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = model<TBooking>("Booking", bookingSchema);

export default Booking;
