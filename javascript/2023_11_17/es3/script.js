/* 
Tramite un istruzione condizionale determinate
se un numero è positivo, negativo o zero
*/

let n = Math.random() * 100 - 50;

if (n > 0) {
  console.log(n + " è positivo");
} else if (n < 0) {
  console.log(n + "Il numero è negativo");
} else {
  console.log(n + "Il numero è zero");
}