import { Add_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./actionType";

const initialState = {
  count: 370,
};

const subscribersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_SUBSCRIBER:
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

export default subscribersReducer;
