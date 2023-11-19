let box = document.getElementById("box");

function changeBgColor(colore) {
  box.classList.forEach(element => {
    if (element.includes("bg-") && element.includes("-500")) {
      box.classList.remove(element);
    }
  });
  box.classList.add("bg-"+colore+"-500");
  box.innerHTML = colore;
}