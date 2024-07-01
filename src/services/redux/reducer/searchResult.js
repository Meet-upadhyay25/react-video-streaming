import { createSlice } from "@reduxjs/toolkit";

const searchResult = createSlice({
  name: "searchresult",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    addSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addSearchQuery } = searchResult.actions;

export default searchResult.reducer;
