import { configureStore } from "@reduxjs/toolkit";

import displaysReducer from "@/features/displays/displaysSlice";
import userReducer from "@/features/user/userSlice";

const store = configureStore({
  reducer: {
    displays: displaysReducer,
    user: userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
