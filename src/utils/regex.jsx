export const onlyTextRegex = /(^[A-Zéèîïëêöô\s-]{1,30})\D$/gim;
export const addressRegex = /^[0-9A-Zéèîïëêöô\s,'-]*$/gim;
export const zipCodeRegex = /^[0-9]{5}(-[0-9]{4})?$/;
export const capitalizeRegex = /(?:^|\s+)\w/g;
export const camelCaseRegex = /[-_\s]+(.)?/g;
