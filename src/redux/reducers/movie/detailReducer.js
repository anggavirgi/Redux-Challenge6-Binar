import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    detail: [],
    id: ""
  },
  reducers: {
    setDetail: (state, action) => {
      state.detail = { ...state, detail: action.payload}
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setDetail, setId } = detailSlice.actions;

export default detailSlice.reducer;
