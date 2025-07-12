import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainMenu: false,
  deletePopup: false,
};

const displaySlice = createSlice({
  name: "displays",
  initialState,
  reducers: {
    toggleMainMenu: (state) => {
      state.mainMenu = !state.mainMenu;
    },
    closeMainMenu: (state) => {
      state.mainMenu = false;
    },
    toggleDeletePopup: (state) => {
      state.deletePopup = !state.deletePopup;
    },
    closeDeletePopup: (state) => {
      state.deletePopup = false;
    },
  },
});

export default displaySlice.reducer;
export const {
  toggleMainMenu,
  closeMainMenu,
  toggleDeletePopup,
  closeDeletePopup,
} = displaySlice.actions;
