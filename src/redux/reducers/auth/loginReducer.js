import { createSlice } from "@reduxjs/toolkit";

const authLoginSlice = createSlice({
  name: "authLogin",
  initialState: {
    token: undefined,
    isLogin: "",
    user: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setLoggedIn, setUser } = authLoginSlice.actions;

export default authLoginSlice.reducer;
