/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John",
    email: "john@email.com",
  },
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    deleteUser: (state) => (state = {}),
  },
});

export const { updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
