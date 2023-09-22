document.querySelector(".filter").addEventListener("click", () => {
  document.querySelector("#side-nav").setAttribute("data-active", "false");
  document.querySelector("body").style.overflow = "auto";
});
