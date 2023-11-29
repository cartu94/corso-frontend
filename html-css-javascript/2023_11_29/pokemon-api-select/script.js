
const pkmId = document.getElementById("pokemon-id");
const btn = document.getElementById("btn");
async function getPokemon() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pkmId.value}`
  );
  const data = await response.json();
    
  const container = document.getElementById("pokemon-container");
  container.innerHTML = "";
  
  // Carta del pokemon 
  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  const id = document.createElement("h3");
  id.textContent = `#${data.id}`;

  // Nome del pokemon
  const name = document.createElement("h2");
  name.textContent = data.name;

  // Fotografia del pokemon
  const frontImage = document.createElement("img");
  frontImage.src= data.sprites.front_default;
  frontImage.alt = data.name;
  frontImage.classList.add("pokemon-img");

  const backImage = document.createElement("img");
  backImage.src = data.sprites.back_default;
  backImage.alt = data.name;
  backImage.classList.add("pokemon-img");

  // Tipi del pokemon
  const pokemonTypes = document.createElement("ul");
  pokemonTypes.classList.add("pokemon-types");
  data.types.forEach((type) => {
    const pokemonType = document.createElement("li");
    pokemonType.classList.add("pokemon-type");
    pokemonType.textContent = type.type.name;
    pokemonTypes.appendChild(pokemonType);
  });

  // Abilità del pokemon
  const pokemonAbilities = document.createElement("ul");
  pokemonAbilities.classList.add("pokemon-abilities");
  data.abilities.forEach((ability) => {
    const pokemonAbility = document.createElement("li");
    pokemonAbility.classList.add("pokemon-ability");
    pokemonAbility.textContent = ability.ability.name;
    ability.is_hidden ? pokemonAbility.classList.add("hidden-ability") : null;
    pokemonAbilities.appendChild(pokemonAbility);
    
  });

  card.appendChild(id);
  card.appendChild(name);
  card.appendChild(frontImage); 
  card.appendChild(backImage); 
  card.appendChild(pokemonTypes);
  card.appendChild(pokemonAbilities);

  container.appendChild(card);
}

btn.addEventListener("click", getPokemon);
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    getPokemon();
  } else if (e.key === "ArrowUp" || e.key === "ArrowRight") {
    changeId(1);
  } else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
    changeId(-1);
  }
});

function changeId(num) {
  let tmp = parseInt(pkmId.value) + num;
  if (tmp >= 1 && tmp <= 151) {
    pkmId.value = tmp;
  }
}
