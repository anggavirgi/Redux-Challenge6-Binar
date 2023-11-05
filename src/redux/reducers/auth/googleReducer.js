import { createSlice } from "@reduxjs/toolkit";

const googleLoginSlice = createSlice({
  name: "authGoogle",
  initialState: {
    token: undefined,
    status: "",
  },
  reducers: {
    setTokenGoogle: (state, action) => {
      state.token = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setTokenGoogle, setStatus } = googleLoginSlice.actions;

export default googleLoginSlice.reducer;
