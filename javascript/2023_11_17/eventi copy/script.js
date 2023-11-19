// creo delle variabili per i bottoni e recupero gli elementi dal DOM tramite id
let redBtn = document.getElementById("redBtn");
let greenBtn = document.getElementById("greenBtn");
let yellowBtn = document.getElementById("yellowBtn");

// creo una variabile per il box e recupero l'elemento dal DOM tramite id
let box = document.getElementById("box");

// aggiungo un event listener per ogni bottone
redBtn.addEventListener("click", () => changeBgColor("my-red"));
greenBtn.addEventListener("click", () => changeBgColor("my-green"));
yellowBtn.addEventListener("click", () => changeBgColor("my-yellow"));

// creo una funzione per cambiare il colore di sfondo del box
// la funzione riceve come parametro il colore da assegnare
function changeBgColor(colore) {
  // rimuovo le classi che potrebbero essere presenti
  box.classList.remove("my-red", "my-green", "my-yellow");
  // aggiungo la classe corrispondente al colore ricevuto come parametro
  box.classList.add(colore);
}