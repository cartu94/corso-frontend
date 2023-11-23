// Definire una funzione
/* function nomeFunzione() {
    // istruzioni
} */

// Hello world!
/* function printHelloWorld() {
    console.log('Hello world!');
} */

// Invocare / Chiamare una funzione
////nomeFunzione();

//printHelloWorld();

// Passare dei parametri ad una funzione
/* function printToConsole(a) {
    console.log(a);
}
printToConsole('ciao'); */

// Ritornare un valore dopo l'esecuzione di una funzione (kw 'return')
/* function somma(a, b) {
    let pippo = a + b;
    return pippo;
} */

// Assegnare il valore di ritorno di una funzione ad una variabile
/* let result = somma(4, 8);
console.log(result); // 12 */

// Possiamo utilizzare il valore di ritorno di una funzione in un espressione
/* let result = somma(4, 8) + 5;
console.log(result); // 17 */

// I parametri di una funzione sono opzionali
/* function printParameters(a, b, c) {
    console.log(a, b, c);
}
printParameters('Mario');
printParameters(); */

// passare solo parametri successivi al primo
/* printParameters(undefined, 'Mario'); */

// Parametri con valore di default
/* function withParameters(a = 'Rossi', b) {
    console.log(a, b);
}
withParameters(undefined, 'Mario'); */

// Inner functions e Outer functions
/* function outerFunction() {
    console.log('Questa è l\'outer function');
    function innerFunction() {
        console.log('Questa è l\'inner function');
    }

    innerFunction();
} */
//innerFunction(); // innerFunction is not defined
//outerFunction();


// Scope (ambito di visibilità)
/* let x = 0; // scope globale
console.log('prima della definizione:', x);
function somma(a, b) {
    x = 5;
    console.log('all\'interno della function dopo aver assegnato un nuovo valore a x:', x);
    return x + a + b;
}
console.log('dopo la definizione:', x);
console.log('risultato della function somma:', somma(4, 8));
console.log('dopo aver chiamato somma():', x); */


// let e var
/* function printNumbers() {
    if (true) {
        let x = 10;
        // let x = 20; // let non può essere ridichiarata
        var y = 20;
        // var y = 50; // var può essere ridichiarata
    }
    console.log(x); // x is not defined -> visibile solo nel blocco di codice if
    console.log(y); // 20 -> visibile anche all'esterno
} */

// Destructuring
/* const mario = { firstName: 'Mario', lastName: 'Rossi', id: 10 };
const giovanni = { firstName: 'Giovanni', lastName: 'Bianchi', id: 11 };

function sayHelloToUser(user1, user2) {
    // vado a estrarre le props dall'oggetto in questione come 'const {prop1, prop2} = oggetto'
    const { firstName: marioFirstName, lastName: marioLastName } = user1; // per rinominare utilizziamo la sintassi "nomeProp: nuovoNome"
    const { firstName: giovanniFirstName, lastName: giovanniLastName } = user2;
    //const firstName = user.firstName;
    //const lastName = user.lastName;
    //const id = user.id;
    console.log(`Ciao ${marioFirstName} e ${giovanniFirstName}!`);
}

sayHelloToUser(mario, giovanni); */


// Rest operator
/* function sumNumbers(...numbers) { // non conosciamo il numero di argomenti passati
    console.log(typeof numbers);
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumNumbers(1, 2, 3, 4, 5));
console.log(sumNumbers(3, 9, 6)); */

// IIFE - Immediately Invoked Function Expression

/* (function () { // function anonima
    console.log('Questa è una IIFE');
})(); */

// Callback function
/* function helloAndGoodbye(name, callbackFn) { // questa funzione accetta come parametro un'altra funzione (callback)
    console.log(`Hello, ${name}!`);
    callbackFn();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

function sayWelcome() {
    console.log('Welcome!');
}

helloAndGoodbye('Mario', sayGoodbye);
helloAndGoodbye('Mario', sayWelcome); */





// classic function
/* function sayHello() {
    console.log('ciao');
} */

// arrow function
/* const sayHello = () => { // con freccia
    console.log('ciao');
}
sayHello(); */

// Passare un solo parametro ad una arrow function
/* const sayHello = name => {
    console.log(name);
} */

// Passando un solo parametro e avendo necessità di eseguire una singola istruzione
// una sola riga!
/* const sayHello = name => console.log(name);
sayHello('Name'); */

// Passando più di un argomento le parentesi sono necessarie
/* const sayHelloTo = (name1, name2) => {
    console.log(name1);
    console.log(name2);
}
sayHelloTo('Mario', 'Giovanni'); */


// con corpo ridotto (senza l'utilizzo delle graffe e inline) questa arrow function effettua il return dell'istruzione
/* const sumResult = (a, b, c) => a + b + c;
console.log(sumResult(3, 4, 5)); // 12 */

// scrittura classica
// function sumResult(a, b, c) { return a + b + c; }