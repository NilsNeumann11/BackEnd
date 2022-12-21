import { names, numbers } from "./data.js";

// export const firstArrayName = () => {
//   return names[0];
// };

// hier geben wir Eric raus und ist damit gelöscht weil er ein neues array rausgibt
// let x = names.pop();
// export const notLastElement = () => {
//   return names;
// };

// export const onlyLastElement = () => {
// mit .length -1 kriegt man das letzte element raus!!!
//   return names[names.length - 1];
// };

// export const allButNotFirst = () => {
//slice schneidet das element vor der eingegebenen Zahl
//   return names.slice(1);
// };

export const reduceDoubleCharacter = () => {
  // damit der ursprüngliche Array nicht verändert wird,speichern wir numbers in newArray und bearbeiten dann new Array
  let newArray = [...new Set(numbers)];
  return newArray;
};

export const allNumbersTogether = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    // console.log(numbers[index]);
  }
  return sum;
};

// ==================================================

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
};
