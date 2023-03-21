import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: [
    // fake datas
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
    },
  ],
};

export const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    submitForm: (draft, action) => {
      draft.employee.push(action.payload);
    },
  },
});

export const { submitForm } = HomeSlice.actions;


export const sendEmployees = (state) => {
  return state.HOME.employee;
};

export default HomeSlice.reducer;
