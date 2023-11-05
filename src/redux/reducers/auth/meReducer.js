import { createSlice } from "@reduxjs/toolkit";

const meSlice = createSlice({
  name: "dataMe",
  initialState: {
    name: "",
    email: ""
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    }
  },
});

export const { setName, setEmail } = meSlice.actions;

export default meSlice.reducer;
