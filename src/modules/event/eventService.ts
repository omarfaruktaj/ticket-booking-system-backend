import Event from "./eventModel";
import { TEvent } from "./eventValidation";

export const retrieveAllEventService = () => {
  return Event.find({});
};
export const retrieveAEventService = (eventId: string) => {
  return Event.findById(eventId);
};
export const createEventService = (data: TEvent) => {
  return Event.create(data);
};
