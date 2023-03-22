import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/UserSlice'


import HomeReducer from "../features/HomeSlice";

// const store = configureStore({
//   reducer: {
//     HOME: HomeReducer,
//   },
// });
// export default store;

const store = configureStore({
  reducer: {
    users: usersReducer
  },
})

export default store