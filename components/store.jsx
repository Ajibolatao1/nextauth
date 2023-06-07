"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice.jsx";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
