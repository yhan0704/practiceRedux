import Axios from "axios";
import {
  ADD_SUBSCRIBER,
  REMOVE_SUBSCRIBER,
  FETCHED_MOVIES,
} from "./actionType";

export const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};

export const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER,
  };
};

export const fetchedMovie = () => {
  return async (dispatch, getState) => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: FETCHED_MOVIES,
      payload: response.data,
    });
  };
};
