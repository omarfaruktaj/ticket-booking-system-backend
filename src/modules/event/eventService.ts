import Event from "./eventModel";

export const RetrieveAllEventService = () => {
  return Event.find({});
};
