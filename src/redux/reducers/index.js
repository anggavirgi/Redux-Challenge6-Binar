import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/loginReducer";
import authRegisterSlice from "./auth/registerReducer";
import popularSlice from "./movie/popularReducer";
import detailSlice from "./movie/detailReducer";
import searchSlice from "./movie/searchReducer";
import meSlice from "./auth/meReducer";

export default combineReducers({
  auth: authLoginSlice,
  popular: popularSlice,
  detail: detailSlice,
  search: searchSlice,
  getme: meSlice,
  register: authRegisterSlice
});
