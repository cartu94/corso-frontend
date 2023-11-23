// Copiare un array
/* const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // [1, 2, 3] */

// Unire due array con spread operator
/* const arr3 = [1, 2];
const arr4 = [3, 4];
const mergedArray = [...arr3, ...arr4];
console.log(mergedArray); // [1, 2, 3, 4] */

// Aggiungere un elemento ad un array (e crea una copia aggiornata) con spread operator
/* const myArr = [1, 2];
const newArrPlusElement = [...myArr, 3];
console.log(newArrPlusElement); */

// Copiare un oggetto
/* const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1 };
console.log(obj2); //{ a: 1, b: 2, c: 3 } */

// Unire due oggetti
/* const obj3 = { a: 1, b: 2 };
const obj4 = { c: 3, d: 4 };
const mergedObj = { ...obj3, ...obj4 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 } */

// Sovrascrivere una prop
/* const obj5 = { a: 1, b: 2 };
const newObj = { ...obj5, b: 8 };

const user = { firstName: 'Mario', lastName: 'Rossi', age: 26 };
const updUser = {...user, firstName: 'Giovanni'}; */