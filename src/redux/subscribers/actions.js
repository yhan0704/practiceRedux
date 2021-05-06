import { Add_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./actionType";

export const addSubscriber = () => {
  return {
    type: Add_SUBSCRIBER,
  };
};

export const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER,
  };
};
