document.querySelector(".filter").addEventListener("click", () => {
  document.querySelector("#side-nav").setAttribute("data-active", "false");
  console.log(document.querySelector("#side-nav").attributes);
});
