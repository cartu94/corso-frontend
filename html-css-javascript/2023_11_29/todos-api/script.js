
let hideCompleted = false;

function get() {
  fetch(api)
  .then((response) => response.json())
  .then((dataResponse) =>
  !hideCompleted
  ? dataResponse
  : dataResponse.filter((todo) => !todo.completed)
  ).then((data) => render(data))
  .catch((error) => {
    console.error(error);
  });
}

const api = "https://jsonplaceholder.typicode.com/todos";
async function test() {
  let f = await fetch(api);
  return await f.json();
}
(async () => console.log(await test()))();


function render(data) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  data.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");
    todoElement.innerHTML = `
      <div class="todo-head">
        <p class="todo-userId">user: ${todo.userId}</p>
        <p class="todo-id">n° ${todo.id}</p>
      </div>
      <h2 class="todo-title">${todo.title}</h2>
      <div class="todo-completed">Completed: ${todo.completed}</div>
    `;
    container.appendChild(todoElement);
  });
}

const hideCompletedButton = document.getElementById("btnCompleted");
hideCompletedButton.addEventListener("click", () => {
  hideCompleted = !hideCompleted;
  if (hideCompleted) {
    hideCompletedButton.innerText = "Show completed";
  } else {
    hideCompletedButton.innerText = "Hide completed";
  }
  get();
});

// Immediately invoked function expression
// get();
