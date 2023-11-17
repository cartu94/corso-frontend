/* 
Creare un programma che utilizzi un do-while per chiedere ad un 
utente un numero segreto fino a che non lo indovina
*/

let numeroSegreto = 5;

let found = false;
do{
    var numeroUtente = parseInt(prompt("Inserisci un numero: "));
    if(numeroUtente == numeroSegreto) {
        console.log("Hai indovinato!");
        found = true;
    } else {
      console.log("Ritenta!" + (numeroUtente > numeroSegreto ? " Il numero è più piccolo" : " Il numero è più grande"));
    }
} while(!found);