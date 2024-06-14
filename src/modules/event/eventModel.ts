import { Schema, model } from "mongoose";
import { TEvent } from "./eventValidation";
import { errorMessage } from "../../constants";

const eventSchema = new Schema<TEvent>(
  {
    title: {
      type: String,
      required: [true, errorMessage.required],
    },
    description: {
      type: String,
      required: [true, errorMessage.required],
    },
    date: {
      type: Date,
      required: [true, errorMessage.required],
      validate: {
        validator: function (value: Date) {
          return value > new Date();
        },
        message: errorMessage.date,
      },
    },
    venue: {
      type: String,
      required: [true, errorMessage.required],
    },
    capacity: {
      type: Number,
      required: [true, errorMessage.required],
      min: [1, errorMessage.min.replace("{MIN}", "1")],
    },
    banner: {
      type: String,
      required: [true, errorMessage.required],
    },
    price: {
      type: Number,
      default: 0,
    },
    ticketsAvailable: {
      type: Number,
      required: [true, errorMessage.required],
    },
  },
  { timestamps: true },
);

const Event = model<TEvent>("Event", eventSchema);

export default Event;
