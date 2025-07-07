import { configureStore } from "@reduxjs/toolkit";

import displaysReducer from "@/features/displays/displaysSlice";

const store = configureStore({
  reducer: {
    displays: displaysReducer,
  },
});

export default store;
