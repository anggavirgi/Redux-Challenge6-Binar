import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/loginReducer";
import popularSlice from "./movie/popularReducer";
import detailSlice from "./movie/detailReducer";

export default combineReducers({
  auth: authLoginSlice,
  popular: popularSlice,
  detail: detailSlice,
});
