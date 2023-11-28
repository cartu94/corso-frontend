// Parte 1 --------------------------------------------------
let btn = document.getElementById('btn');
let div = document.getElementById('my-div');

btn.innerText = "Cambia Colore";
let bgColor = div.style.backgroundColor;
var randomColor = () => '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
console.log(Math.random() * 0xFFFFFF << 0);
btn.addEventListener('click', function() {
  bgColor = randomColor();
  div.style.backgroundColor = bgColor;
});

// Parte 2 --------------------------------------------------

div.addEventListener('mouseover', function() {
  div.style.backgroundColor = randomColor();
});
div.addEventListener('mouseout', function() {
  div.style.backgroundColor = bgColor;
});

setTimeout(function() {
  div.style.transition = "width 1s, height 1s";  
  div.style.width = "300px";
  div.style.height = "300px";
}, 1000);

// Parte 3 --------------------------------------------------

div.addEventListener('transitionend', function() {
  div.style.removeProperty("width");
  div.style.removeProperty("height");
  div.classList.add("grande");
}, { once: true });

let hasBeenClicked = false;
btn.addEventListener('click', function() {
  console.log(hasBeenClicked);
  if(hasBeenClicked) {
    div.classList.remove("grande");
  }
  hasBeenClicked = true;
});

// Conclusione -----------------------------------------------

console.log("Esercizio completato con successo!");
