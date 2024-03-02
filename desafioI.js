let boton = document.getElementById("traer-posts");
let postContainer = document.getElementById("post-data");
boton.addEventListener("click", function () {
  getPosts();
});
async function getPosts() {
  try {
    let answer = await fetch("https://jsonplaceholder.typicode.com/posts");
    let informacion = await answer.json();
    mostrarPosts(informacion);
  } catch (error) {
    console.log(error);
  }
}
function mostrarPosts(posts) {
  postContainer.innerHTML = "";
  let lista = document.createElement("ul");
  posts.forEach(function (post) {
    let listItem = document.createElement("li");
    let tituloElemento = document.createElement("h6");
    tituloElemento.textContent = post.title;
    tituloElemento.style.fontWeight = "bold";
    listItem.append(tituloElemento);
    let cuerpoElemento = document.createElement("p");
    cuerpoElemento.textContent = post.body;
    listItem.append(cuerpoElemento);
    lista.append(listItem);
  });
  postContainer.append(lista);
}
