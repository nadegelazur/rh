import { configureStore } from "@reduxjs/toolkit";

import HomeReducer from "../features/HomeSlice";

const store = configureStore({
  reducer: {
    HOME: HomeReducer,
  },
});
export default store;
