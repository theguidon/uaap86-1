const sideNav = document.querySelector("#side-nav");
const exitButton = document.querySelector("#side-nav .exit");

exitButton.addEventListener("click", () => {
  sideNav.dataset.active = "false";
});
