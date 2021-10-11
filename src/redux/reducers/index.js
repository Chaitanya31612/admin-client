import { combineReducers } from "redux";
import adminInfo from "./adminInfo";
import siteInfo from "./siteInfo";

const rootReducers = combineReducers({
  adminInfo,
  siteInfo,
});

export default rootReducers;
