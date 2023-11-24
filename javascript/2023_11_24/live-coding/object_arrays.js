// Metodi per lavorare con Object Arrays
let users = [
    { name: "Mario", age: 30 },
    { name: "Luigi", age: 25 },
    { name: "Maria", age: 28 },
    { name: "Anna", age: 35 },
    { name: "Giovanni", age: 28 },
]

// Metodo filter: filtra gli elementi di un array in base ad una condizone e ne ritorna uno nuovo filtrato
let userOver30 = users.filter(user => {
    // ritorniamo il risultato di un espressione (true/false)
    return user.age > 30;
})
// console.log("Over 30:", userOver30);

// Metodo find: restituisce il primo elemento che soddisfa una condizione
// let user28YearsOld = users.filter(user => user.age === 28)[0];// find utilizzando filter
let user28YearsOld = users.find(user => user.age === 28);
// console.log("Ha 28 anni:", user28YearsOld);

// Metodo findIndex: restituisce l'indice del primo elemento che soddisfa una condizione
let marioIndex = users.findIndex(user => user.name === 'Mario');
//console.log("Mario ha indice:", marioIndex);

// Iterazione su un array di oggetti

// Metodo forEach: esegue una funzione per ciascun elemento dell'array
users.forEach((user, i) => {
    console.log(i); // index corrente del loop
    console.log(`${user.name} ha ${user.age} anni.`);
})

// Metodo map: crea un nuovo array applica una trasformazione a ciascun elemento
let uppercaseNames = users.map(user => {
    return user.name.toUpperCase()
});

console.log(uppercaseNames);