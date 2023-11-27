const DISCOUNT = "Nino20";

const page1 = document.getElementById("pg1");
const page2 = document.getElementById("pg2");
// page 1 ---------------------------------------------------

// alert(`Inserisci il codice sconto ${Nino20} per avere il 20% di sconto`);
const input = document.getElementById("sub");
input.addEventListener("click", addPanino);
const nome = document.getElementById("nome");
const tavolo = document.getElementById("tavolo");

// page 2 ---------------------------------------------------
const BASE_COST = 5.00;

const burgerName = document.getElementById("burger-name");
const ingredients = document.getElementsByClassName("ingredient");
const discountInput = document.getElementById("discount");
const price = document.getElementById("price");
const calcBtn = document.getElementById("calc-btn");
const discountOutcome = document.getElementById("discount-outcome");
console.log(ingredients);
// ----------------------------------------------------------

function addPanino() {
   console.log(nome.value, tavolo.value);
   burgerName.innerHTML = `The ${nome.value} Burger`;
   page1.style.display = "none";
   page2.style.display = "block";
}

const calcPrice = () => {
   let total = BASE_COST;
   for (let el of ingredients) {
      total += el.checked ? parseFloat(el.value) : 0;
      // console.log(`${el.value} checked - total: ${total}`);
   }
   if (discountInput.value === DISCOUNT) {
      total *= 0.8;
      discountOutcome.style.color = "green";
      discountOutcome.innerHTML = "Sconto del 20% applicato";
   } else if (discountInput.value !== "") {
      discountOutcome.style.color = "red";
      discountOutcome.innerHTML = "Codice sconto non valido";
   } else {
      discountOutcome.innerHTML = "";
   }
   price.innerHTML = `${total.toFixed(2)}€`;
};

calcBtn.addEventListener("click", calcPrice);