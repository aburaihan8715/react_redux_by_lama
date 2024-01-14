/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "John",
      email: "john@email.com",
    },
    pending: null,
    error: false,
  },

  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
      state.error = false;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
      state.userInfo = {};
    },
    // not related api calls
    deleteUser: (state) => {
      state.userInfo = {};
    },
  },
});

export const { updateStart, updateSuccess, updateError, deleteUser } = userSlice.actions;
export default userSlice.reducer;
