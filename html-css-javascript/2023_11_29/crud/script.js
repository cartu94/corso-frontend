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
        <button onclick="removePost(${post.id})">Rimuovi</button>
        <button onclick="editPost(${post.id})">Modifica</button>
        <div id="edit-form-${post.id}" style="display: none;">
          <h4>Modifica il post</h4>
          <form onsubmit="saveEditedPost(event, ${post.id})">
            <label for="editedAuthor">Nuovo Autore</label>
            <input type="text" id="editedAuthor" value="${post.author}" required>
            <label for="editedTitle">Nuovo Titolo</label>
            <input type="text" id="editedTitle" value="${post.title}" required>
            <label for="editedText">Nuovo Testo</label>
            <textarea id="editedText" required>${post.text}</textarea>
            <button type="submit">Salva</button>
            <button onclick="cancelEdit(edit-form-${post.id})">Annulla</button>
          </form>
        </div>
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
      text: document.getElementById("text").value,
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

  window.removePost = function (id) {
    postsData.posts.splice(
      postsData.posts.findIndex((item) => item.id == id),
      1
    );
    // Aggiorno la pagina
    showPosts(postsData.posts);
    console.log(postsData.posts);
  };

  window.editPost = function (id) {
    const editForm = document.getElementById(`edit-form-${id}`);
    editForm.style.display = "block";
    saveEditedPost('click', id);
  }

  function saveEditedPost(event, id) {
    event.preventDefault();
    const editedAuthor = document.getElementById("editedAuthor").value;
    const editedTitle = document.getElementById("editedTitle").value;
    const editedText = document.getElementById("editedText").value;

    const editedPost = postsData.posts.find((post) => post.id === id);

    editedPost.author = editedAuthor.value;
    editedPost.title = editedTitle.value;
    editedPost.text = editedText.value;
    
    cancelEdit(id);

    showPosts(postsData.posts);
  }


  window.cancelEdit = function (id) {
    const editForm = document.getElementById(`edit-form-${id}`);
    editForm.style.display = "none";
  }
});
