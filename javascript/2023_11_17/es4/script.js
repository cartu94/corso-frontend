/* 
Creare un programma che utilizzi un do-while per chiedere ad un 
utente un numero segreto fino a che non lo indovina
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let numeroSegreto = getRandomInt(1, 10);
let testo = "Inserisci un numero";
do{
    var numeroUtente = prompt(testo);
    testo = "Ritenta!" + (numeroUtente > numeroSegreto ? " Il numero è più piccolo" : " Il numero è più grande")
} while(numeroSegreto != numeroUtente);
console.log("Hai indovinato! Il numero segreto era " + numeroSegreto);
document.write("Hai indovinato! Il numero segreto era " + numeroSegreto);