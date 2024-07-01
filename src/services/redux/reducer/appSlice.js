import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    darkMode: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleTheme: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleMenu, toggleTheme } = appSlice.actions;

export default appSlice.reducer;
