// Funzione iniziale che si attiva quando il DOM è pronto
document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("posts-container");
  const addPostForm = document.getElementById("add-post-form");

  // INITIAL JSON
  let postsData = {
    posts: [
      {
        id: 1,
        author: "John",
        title: "My first post",
        text: "This is my first post",
      },
      {
        id: 2,
        author: "Jane",
        title: "Cats are awesome",
        text: "Cats are the best",
      },
      {
        id: 3,
        author: "Mary",
        title: "Dogs are better than cats",
        text: "Dogs are the best",
      },
    ],
  };
  // Funzione per visualizzare i primi 3 post nella pagina
  function showPosts(posts) {
    // Pulisco il container
    postContainer.innerHTML = "";
    posts.forEach((post) => {
      // Creo un nuovo elemento div
      const postDiv = document.createElement("div");
      // Aggiungo la classe singolo-post
      postDiv.classList.add("single-post");
      // Aggiungo il contenuto HTML
      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>Autore: ${post.author}</p>
        <p>${post.text}</p>
        <button>Rimuovi</button>
        <button>Modifica</button>
      `;
      // Aggiungo il div al container
      postContainer.appendChild(postDiv);
    });
  }

  showPosts(postsData.posts);

  // Funzione per aggiungere un post
  addPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addPost();
  });
  function addPost() {
    // Creo un nuovo post
    const newPost = {
      id: postsData.posts.length + 1,
      author: document.getElementById("author").value,
      title: document.getElementById("title").value,
      text: document.getElementById("text").value
    };
    // Aggiungo il nuovo post all'array dei post
    postsData.posts.push(newPost);
    // Pulisco i campi del form
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("text").value = "";
    // Aggiorno la pagina
    showPosts(postsData.posts);
  }
});
