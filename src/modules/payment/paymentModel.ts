import { Schema, model } from "mongoose";
import { errorMessage } from "../../constants";
import { TPayment } from "./paymentValidation";

const paymentSchema = new Schema<TPayment>(
  {
    paymentId: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, errorMessage.required],
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: "Booking",
      required: [true, errorMessage.required],
    },
    amount: {
      type: Number,
      required: [true, errorMessage.required],
    },
    status: {
      type: String,
      required: [true, errorMessage.required],
      enum: ["pending", "completed", "failed"],
    },
  },
  { timestamps: true },
);

const Payment = model<TPayment>("Payment", paymentSchema);

export default Payment;
