import * as Yup from "yup";
import { onlyTextRegex, addressRegex } from "./regex";

export const validationFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(
      onlyTextRegex,
      `- No numbers
    - No special characters`
    )
    .required("this is a required field"),

  lastName: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(
      onlyTextRegex,
      `- No numbers
    - No special characters`
    ),

  street: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(addressRegex, "No special characters"),

  city: Yup.string()
    .min(2, "too short !")
    .max(30, "too long !!")
    .matches(
      onlyTextRegex,
      `- No numbers
    - No special characters`
    )
    .required("this is a required field"),
  zipCode: Yup.number()
    .positive()
    .integer()
    .moreThan(9999, "Must have 5 numbers ex : 56210")
    .max(99999, "Too long !!")
    .required("this is a required field"),

  birthDate: Yup.date().required("this is a required field"),
  startDate: Yup.date(),
  states: Yup.string().nullable(false).required("this is a required field"),
  department: Yup.string().nullable(false).required("this is a required field"),
});
