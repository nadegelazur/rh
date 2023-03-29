import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/UserSlice'

const store = configureStore({
  reducer: {
    users: usersReducer
  },
})

export default store