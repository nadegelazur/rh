import { etats, departments } from "./SelectDatas";

export const selectState = {
  idName: "states",
  labelName: "State",
  toUpperCase: true,
  options: etats,
  group: false,
  optValue: true,
  fieldRequired: true,
};
export const selectDepartment = {
  idName: "department",
  labelName: "Department",
  toUpperCase: true,
  options: departments,
  group: false,
  optValue: true,
  fieldRequired: true,
};
export const inputFirstName = {
  idName: "firstName",
  labelName: "First name",
  myClass: "input_text",
  toUpperCase: true,
  fieldRequired: true,
};
export const inputLastName = {
  idName: "lastName",
  labelName: "Last name",
  myClass: "input_text",
  toUpperCase: true,
  fieldRequired: false,
}
export const inputStreet = {
  idName: "street",
  labelName: "Street",
  myClass: "input_text",
  toUpperCase: true,
  fieldRequired: false,
};
export const inputCity = {
  idName: "city",
  labelName: "city",
  myClass: "input_text",
  toUpperCase: true,
  fieldRequired: true,
};
export const inputZipCode = {
  idName: "zipCode",
  labelName: "zip code",
  myClass: "input_number",
  toUpperCase: true,
  mini: 10000,
  maxi: 99999,
  fieldRequired: true,
};
export const inputBirthDate = {
  idName: "birthDate",
  labelName: "Birth Date",
  toUpperCase: true,
  placeh: "click here",
  lang: "en",
  fieldRequired: true,
};
export const inputStartDate = {
  idName: "startDate",
  labelName: "Start Date",
  toUpperCase: true,
  placeh: "click here",
  lang: "en",
  fieldRequired: false,
};
