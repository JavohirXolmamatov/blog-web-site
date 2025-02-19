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
    },
    userRegisterFailure: (state, action) => {
      state.isLoading = false;
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
