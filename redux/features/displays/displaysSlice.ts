import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainMenu: false,
};

const displaySlice = createSlice({
  name: "displays",
  initialState,
  reducers: {
    toggleMainMenu: (state) => {
      state.mainMenu = !state.mainMenu;
    },
    closeMainMenu: (state) => {
      state.mainMenu = false
    }
  },
});

export default displaySlice.reducer;
export const { toggleMainMenu, closeMainMenu } = displaySlice.actions;
