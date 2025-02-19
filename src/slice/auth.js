import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoginStart: (state, action) => {
      state.isLoading = true;
    },
    userLoginSuccess: (state, action) => {
      state.isLoading = false;
    },
    userLoginFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { userLoginStart, userLoginSuccess, userLoginFailure } =
  authSlice.actions;
export default authSlice.reducer;
