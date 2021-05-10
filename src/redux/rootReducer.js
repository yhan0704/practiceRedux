import { combineReducers } from "redux";
import { subscriberReducer } from "../redux/subscribers/reducer";
import searchReducer from "../redux/comments/reducer";
import { fetchedMovieReducer } from "../redux/subscribers/reducer";
const rootReducer = combineReducers({
  subscribers: subscriberReducer,
  searchInput: searchReducer,
  fetchedMovie: fetchedMovieReducer,
});

export default rootReducer;
