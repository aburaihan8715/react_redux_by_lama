/* eslint-disable no-unused-vars */

/*
// TODO: =======this is just for understanding======
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "John",
    email: "john@email.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
  },
});

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
*/

/*
// TODO: =======this is custom way to fetch data======
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
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
*/

// TODO: =======this is redux way======
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser2.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(updateUser2.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    });
    builder.addCase(updateUser2.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
  },
});

export default userSlice.reducer;
