import {  createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        firstName: "John",
        lastName: "Doe",
        birthDate: "1976-10-18",
        startDate: "2022-12-17",
        street: "35, selfy road",
        city: "Clearwater",
        states: "Minnesota",
        zipCode: "56450",
        department: "Engineering",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "1979-01-23",
        startDate: "2022-12-17",
        street: "35, long street",
        city: "Chicago",
        states: "Illinois",
        zipCode: "56450",
        department: "Manager",
      }
]
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            // console.log(action)
            state.push(action.payload);
        }
    }
});

export const { addUser } = userSlice.actions
export default userSlice.reducer