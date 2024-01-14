/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk("users/update", async (user) => {
  const response = await axios.post("http://localhost:8800/api/users/1/update", user);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "john",
      email: "john@email.com",
    },
    pending: null,
    error: null,
  },
  reducers: {
    deleteUser: (state) => {
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
  },
});

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
