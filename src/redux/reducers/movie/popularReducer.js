import { createSlice } from "@reduxjs/toolkit";

const popularSlice = createSlice({
  name: "moviePopular",
  initialState: {
    popular: [],
    page: 1,
  },
  reducers: {
    setPopular: (state, action) => {
      state.popular = { ...state, popular: action.payload}
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPopular, setPage } = popularSlice.actions;

export default popularSlice.reducer;
