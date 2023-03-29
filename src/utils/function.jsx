import { zipCodeRegex, capitalizeRegex, camelCaseRegex } from "./regex";


export const fromLowerToUpperCase = (_string) => {
  return _string
    .toLowerCase()
    .replace(capitalizeRegex, (str) => str.toUpperCase());
};


export const toCamelCase = (_string) => {
  return _string.replace(camelCaseRegex, (str, char) => {
    return char ? char.toUpperCase() : "";
  });
};


export const formValue = (evt) => {
  const props = [];
  const values = [];
  const oneEmployee = {};

  for (let i = 0; i < evt.target.length - 1; i++) {
    if (evt.target[i].value !== "" && evt.target[i].name !== "") {
      props.push(toCamelCase(evt.target[i].name));
      values.push(evt.target[i].value);
    }
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== undefined && props[i].length !== 0) {
      oneEmployee[props[i]] = values[i];
    }
  }

  return oneEmployee;
};

export function enableButton() {
  const button = document.querySelector("button[type='submit']");
  button?.removeAttribute("disabled");
  button?.classList?.remove("disabled");
}

/**
 * Il désactive le bouton d'envoi.
 */
export function disableButton() {
  const button = document.querySelector("button[type='submit']");
  button?.setAttribute("disabled", true);
  button?.classList.add("disabled");
}


/**
 * Si la valeur du champ de saisie du code postal correspond à l'expression régulière du code postal,
 * activez le bouton, sinon désactivez-le.
 * @returns Une valeur booléenne.
 */
export function checkZipCode(value) {
  if (zipCodeRegex.test(value)) {
    enableButton();
    return true;
  }
  disableButton();
  return false;
}
