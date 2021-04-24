import { combineReducers } from "redux";
import countreducer from "./countreducer";
import addreducer from "./addreducer";

const rootReducer = combineReducers({
  countreducer,
  addreducer,
});

export default rootReducer;
