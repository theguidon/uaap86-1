const sideNav = document.querySelector("#side-nav");
const exitButton = document.querySelector("#side-nav .exit");
const openButton = document.querySelector("#landing .open");

exitButton.addEventListener("click", () => {
  sideNav.dataset.active = "false";
});

openButton.addEventListener("click", () => {
  sideNav.dataset.active = "true";
});
