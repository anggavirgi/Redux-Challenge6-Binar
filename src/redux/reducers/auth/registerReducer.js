import { createSlice } from "@reduxjs/toolkit";

const authRegisterSlice = createSlice({
  name: "authRegister",
  initialState: {
    token: undefined,
    status: "",
    user: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setStatus, setUser } = authRegisterSlice.actions;

export default authRegisterSlice.reducer;
