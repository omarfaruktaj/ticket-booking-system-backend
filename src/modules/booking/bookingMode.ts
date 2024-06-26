import { Schema, model } from "mongoose";
import { TBooking } from "./bookingValidation";
import { errorMessage } from "../../constants";

const bookingSchema = new Schema<TBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, errorMessage.required],
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, errorMessage.required],
    },
    ticketsBooked: {
      type: Number,
      required: [true, errorMessage.required],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
  },
  { timestamps: true },
);

const Booking = model<TBooking>("Booking", bookingSchema);

export default Booking;
