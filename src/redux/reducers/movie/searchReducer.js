import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "movieSlice",
  initialState: {
    search: [],
    keyword: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = { ...state.search, search: action.payload };
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { setSearch, setKeyword } = searchSlice.actions;

export default searchSlice.reducer;
