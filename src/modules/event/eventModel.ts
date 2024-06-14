import { Schema, model } from "mongoose";
import { TEvent } from "./eventValidation";

const errorMessage = {
  required: "The '{PATH}' field is required.",
  min: "The value of '{PATH}' field must be at least {MIN}.",
  date: "The '{PATH}' field must be a valid date and in the future.",
};

const eventSchema = new Schema<TEvent>({
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
  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

const Event = model<TEvent>("Event", eventSchema);

export default Event;
