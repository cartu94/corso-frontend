/* 
Creare un programma che utilizzi un do-while per chiedere ad un 
utente un numero segreto fino a che non lo indovina
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let numeroSegreto = getRandomInt(1, 100);

let found = false;
do{
    var numeroUtente = prompt("Inserisci un numero: ");
    if(numeroUtente == numeroSegreto) {
        console.log("Hai indovinato!");
        found = true;
    } else {
      console.log("Ritenta!" + (numeroUtente > numeroSegreto ? " Il numero è più piccolo" : " Il numero è più grande"));
    }
} while(!found);