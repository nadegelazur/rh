import { departments, etats } from "./SelectDatas";

import {
  fromLowerToUpperCase,
  toCamelCase,
  formValue,
  enableButton,
  disableButton,
  addStar,
  checkZipCode,
} from "./function";

// import {
//   selectState,
//   selectDepartment,
//   inputBirthDate,
//   inputCity,
//   inputFirstName,
//   inputLastName,
//   inputStartDate,
//   inputStreet,
//   inputZipCode,
// } from "./homeCompoProp";

import {
  onlyTextRegex,
  addressRegex,
  zipCodeRegex,
  capitalizeRegex,
  camelCaseRegex,
} from "./regex";

export {
  fromLowerToUpperCase,
  toCamelCase,
  formValue,
  enableButton,
  disableButton,
  addStar,
  checkZipCode,
  selectState,
  selectDepartment,
  inputBirthDate,
  inputCity,
  inputFirstName,
  inputLastName,
  inputStartDate,
  inputStreet,
  inputZipCode,
  onlyTextRegex,
  addressRegex,
  zipCodeRegex,
  capitalizeRegex,
  camelCaseRegex,
  departments,
  etats,
};
