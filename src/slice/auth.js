import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "../helpers Storage/localStorage";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload;
      LocalStorage.setItemToken("token", action.payload.user.token);
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
