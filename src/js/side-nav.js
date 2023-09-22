const sideNav = document.querySelector("#side-nav");
const exitButton = document.querySelector("#side-nav .exit");
const openButton = document.querySelector("#landing .open");

exitButton.addEventListener("click", () => {
  sideNav.dataset.active = "false";
  document.querySelector("body").style.overflow = "auto";
});

openButton.addEventListener("click", () => {
  sideNav.dataset.active = "true";
  document.querySelector("body").style.overflow = "hidden";
});

[...document.querySelectorAll(".side-nav-link")].map((ele) => {
  ele.addEventListener("click", () => {
    sideNav.dataset.active = "false";
    document.querySelector("body").style.overflow = "auto";
  });
});
