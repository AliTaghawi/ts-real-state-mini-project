import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainMenu: false,
};

const displaySlice = createSlice({
  name: "displays",
  initialState,
  reducers: {
    handleMainMenu: (state) => {
      state.mainMenu = !state.mainMenu;
    },
  },
});

export default displaySlice.reducer;
export const { handleMainMenu } = displaySlice.actions;
