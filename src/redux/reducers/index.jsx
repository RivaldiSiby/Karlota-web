import { combineReducers } from "redux";
// reducers
import loading from "./loading";
import auth from "./auth";

const reducers = combineReducers({
  loading: loading,
  auth: auth,
});

export default reducers;
