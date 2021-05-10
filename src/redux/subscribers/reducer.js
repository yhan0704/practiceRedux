import {
  ADD_SUBSCRIBER,
  REMOVE_SUBSCRIBER,
  FETCHED_MOVIES,
} from "./actionType";

const initial = {
  count: 300,
};
export const subscriberReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        count: state.count + 1,
      };
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const fetchedMovieReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHED_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
