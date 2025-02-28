import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth";
import articleReduser from "../slice/article";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    article: articleReduser,
  },
});
