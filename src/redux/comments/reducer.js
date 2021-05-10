import { TYPE_VALUE } from "./actionType";

const searchReducer = (state = "", action) => {
  switch (action.type) {
    case TYPE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
