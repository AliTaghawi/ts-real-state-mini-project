import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserType } from "@/types/types";

const initialState: fetchUserType = {
  loading: false,
  user: {},
  error: "",
};

const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await fetch("/api/user");
  const data = await res.json();
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export { fetchUser };
