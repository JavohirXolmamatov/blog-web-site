import { createSlice } from "@reduxjs/toolkit";

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
    // LOGIN
    userLoginStart: (state, action) => {
      state.isLoading = true;
    },
    userLoginSuccess: (state, action) => {
      state.isLoading = false;
    },
    userLoginFailure: (state, action) => {
      state.isLoading = false;
    },

    // REGISTER
    userRegisterStart: (state, action) => {
      state.isLoading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
    },
    userRegisterFailure: (state, action) => {
      state.isLoading = false;
      state.error = "error";
    },
  },
});

export const {
  userLoginStart,
  userLoginSuccess,
  userLoginFailure,
  userRegisterStart,
  userRegisterSuccess,
  userRegisterFailure,
} = authSlice.actions;
export default authSlice.reducer;
