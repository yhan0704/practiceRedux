import { TYPE_VALUE } from "./actionType";

export const typeText = (text) => {
  return {
    type: TYPE_VALUE,
    payload: text,
  };
};
