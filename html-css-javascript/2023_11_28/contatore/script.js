let i = 0;
const text = "Counter: "
let btn = document.getElementById('btn');
let counter = document.getElementById('counter');

let count = function() {
  i++;
  console.log(i);
  counter.innerHTML = `${text}${i}`;
}

btn.addEventListener('click', count);