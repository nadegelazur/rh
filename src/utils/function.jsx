import { zipCodeRegex, capitalizeRegex, camelCaseRegex } from "./regex";

/**
 * Il prend une chaîne, la convertit en minuscules, puis met en majuscule la première lettre de chaque
 * mot
 * @param {String} - Chaîne à convertir.
 * @returns La fonction prend une chaîne et renvoie la même chaîne avec la première lettre de chaque
 * mot en majuscule.
 */
export const fromLowerToUpperCase = (_string) => {
  return _string
    .toLowerCase()
    .replace(capitalizeRegex, (str) => str.toUpperCase());
};

/**
 * Il prend une chaîne, remplace tous les traits d'union, traits de soulignement et espaces par une
 * chaîne vide, puis met en majuscule la première lettre du mot suivant
 * @param {String} string - Chaîne à convertir en casse camel.
 * @returns Une fonction qui prend une chaîne et renvoie une chaîne avec la première lettre de chaque
 * mot en majuscule.
 */
export const toCamelCase = (_string) => {
  return _string.replace(camelCaseRegex, (str, char) => {
    return char ? char.toUpperCase() : "";
  });
};

/**
 * Il prend un objet événement comme argument, parcourt la propriété cible de l'objet événement et
 * renvoie un objet avec les propriétés de nom et de valeur de la cible en tant que clés et valeurs.
 * @param {Event} evt - l'objet événement
 * @returns Un objet avec les propriétés et les valeurs du formulaire.
 */
export const formValue = (evt) => {
  const props = [];
  const values = [];
  const oneEmployee = {};

  /* Boucler dans le formulaire et pousser le nom et la valeur de chaque entrée dans les tableaux
  de propriétés et de valeurs. */
  for (let i = 0; i < evt.target.length - 1; i++) {
    if (evt.target[i].value !== "" && evt.target[i].name !== "") {
      props.push(toCamelCase(evt.target[i].name));
      values.push(evt.target[i].value);
    }
  }

  /* Création d'un objet avec les propriétés et les valeurs du formulaire. */
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== undefined && props[i].length !== 0) {
      oneEmployee[props[i]] = values[i];
    }
  }

  return oneEmployee;
};

/**
 * Il supprime l'attribut disabled du bouton et supprime la classe disabled du bouton.
 */
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
 * Si le paramètre requis est vrai, ajoutez une étoile à la fin du paramètre d'étiquette. Sinon, renvoyez simplement le paramètre label
 *
 * @param {String} label - L'étiquette du champ
 * @param {Boolean} required - vrai faux
 * @returns le libellé et l'* si le paramètre requis est vrai.
 */
export function addStar(label, required) {
  const star = `${label} *`;
  return required ? star : label;
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
