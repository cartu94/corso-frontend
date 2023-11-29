/*
Dichiaro una funzione asincrona
per eseguire operazione asincrona (chimata di rete)
usando await per gestire le promesse 
nel miglior modo possibile.
*/

async function getRandomPokemon() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + getRandomNumber(1, 151)
  );

  /* 
  Usando Await, aspettiamo che la promessa restituita 
  sia "risolta".

  Fetch è una funzione che essenzialmente
  fa una richiesta HTTP, la quale risposta è 
  salvata nella nostra "response"
  */



  const data = await response.json();
  /*
  Usiamo await un'altra volta per aspettare 
  il risultato di response.json(). 
  In pratica stiamo estraendo i dati JSON 
  dalla risposta per memorizzarli nella nostra "data"
  */

  
  const pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML = "";
  /* 
  Queste operazioni mi permettono di puntare 
  il container dove andrò a mostrare il pokemon casuale
  e a pulire eventuali altri dati precedenti al suo interno.
  */

  
  // Carta del pokemon 
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");

  // Nome del pokemon
  const pokemonName = document.createElement("h2");
  pokemonName.textContent = data.name;

  // Fotografia del pokemon
  const pokemonFrontImage = document.createElement("img");
  pokemonFrontImage.src= data.sprites.front_default;
  pokemonFrontImage.alt = data.name;
  pokemonFrontImage.classList.add("pokemon-img");

  // Fotografia del "back" del pokemon
  const pokemonBackImage = document.createElement("img");
  pokemonBackImage.src = data.sprites.back_default;
  pokemonBackImage.alt = data.name;
  pokemonBackImage.classList.add("pokemon-img");

  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonFrontImage); 
  pokemonCard.appendChild(pokemonBackImage); 

  pokemonContainer.appendChild(pokemonCard);
}

// 1 - 151
function getRandomNumber(min, max) {
  let range = max - min + 1
  return Math.floor(Math.random() * (range)) + min;
}