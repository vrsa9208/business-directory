import { combineReducers } from "redux";
import businessReducer from "./businessReducer";
import personsReducer from "./personsReducer";

const rootReducer = combineReducers({
  business: businessReducer,
  persons: personsReducer,
});

export default rootReducer;
