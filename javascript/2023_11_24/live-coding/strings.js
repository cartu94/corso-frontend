// Strings

let testoOriginale = "Javascript è un linguaggio di programmazione versatile.";
//console.log(testoOriginale);

// Metodo charAt: restituisce il primo carattere della stringa
let primoCarattere = testoOriginale.charAt(0);
//console.log(primoCarattere);

// Metodo indexOf: restituisce l'indice della prima occorrenza di una sottostringa
let indexOfVersatile = testoOriginale.indexOf("versatile");
//console.log(indexOfVersatile);

// Metodo slice: restituisce una porzione della stringa
let porzioneStringa = testoOriginale.slice(0, 10);
//console.log(porzioneStringa);

// Metodo replace: sostituisce una sottostringa ad un'altra
let testoModificato = testoOriginale.replace("versatile", "potente");
//console.log(testoModificato);

// Metodo toUpperCase: rende tutto il testo maiuscolo
let testoMaiuscolo = testoOriginale.toUpperCase();
//console.log("Testo in maiuscolo:", testoMaiuscolo);

// Metodo toLowerCase: rende tutto il testo minuscolo
let testoMinuscolo = testoOriginale.toLowerCase();
//console.log("Testo in minuscolo:", testoMinuscolo);

// Metodo split()

// split(' '): divide la stringa in array di parole
let arrayParole = testoMinuscolo.split(' ');
//console.log(arrayParole);

// split(''): divide la stringa in array di lettere
let arrayLettere = testoMinuscolo.split('');
//console.log(arrayLettere);

// Metodo join: unisce più elementi stringa all'interno di un array in una nuova stringa
let testoRiassemblato = arrayParole.join('-');
//console.log("Testo riassemblato:", testoRiassemblato);