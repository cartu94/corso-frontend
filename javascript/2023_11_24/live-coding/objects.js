// Gli oggetti in JavaScript sono contenitori flessibili di dati (strutture dati),
// al loro interno troviamo coppie di chiave e valore -> proprietà (attributi e metodi)
// Le proprietà di un oggetto possono assumere qualsiasi tipo di valore valido in JavaScript

// Creare un oggetto
let person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 30
}
//console.log(person);


// Creiamo un metodo all'interno di un oggetto
let book = {
    title: "Il Signore degli Anelli",
    author: "J.R.R. Tolkien",
    description: function () {
        // Metodo
        // this è il contesto di esecuzione della funzione -> in questo caso l'oggetto book
        console.log(`${this.title} by ${this.author}`);
    }
}

// Invochiamo il metodo
// book.description();

// Contesto di esecuzione

// let getDescription = book.description;
// getDescription(); errore 'undefined by undefiined'

let getDescription = book.description.bind(book); // ridefinisco il contesto di esecuzione del metodo
// getDescription(); //Il Signore degli Anelli by J.R.R. Tolkien

// Funzione che mi descrive un animale e il suo verso

let cane = {
    tipo: "Cane",
    verso: "Bau"
}

let gatto = {
    tipo: "Gatto",
    verso: "Miao"
}

let uccello = {
    tipo: "Uccello",
    verso: "Cip"
}

function descriviAnimale() {
    console.log("Descrizione");
    console.log(`Tipo: ${this.tipo}, Verso: ${this.verso}`)
}

let descriviCane = descriviAnimale.bind(cane);
let descriviGatto = descriviAnimale.bind(gatto);

//descriviCane();
//descriviGatto();


const arrowFn = () => {
    console.log(this.prop);
}

function classicFn() {
    console.log(this.prop);
}

let prop = "Mario";

// arrow functions e this
let obj = {
    prop,
    arrowFn,
    classicFn
}

//obj.arrowFn(); // undefined
//obj.classicFn(); // Mario

// Iterazione sugli oggetti

// Iteriamo sulle proprietà dell'oggetto 'person'
for (let prop in person) {
    console.log(prop + ':' + person[prop]);
}

// Object Methods

// Ottenere l'array delle chiavi dell'oggetto
/* let keys = [];
for (let prop in person) {
    keys.push(prop);
} */
let keys = Object.keys(person);
//console.log(keys);

// Ottenere l'array dei valori dell'oggetto
let values = Object.values(person);
//console.log(values);

// Ottenere l'array delle coppie chiave-valore dell'oggetto
let entries = Object.entries(person);
//console.log(entries);