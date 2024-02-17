import { data } from "../assets/data/data";
import { showArticle } from "./article";
import { EDITOR_MSG_PAGE_KEY } from "./editors-msg-page";

export function showCurrentPage() {
  const path = window.location.pathname;
  const decodedPath = decodeURI(path);
  let hasArticle = false;

  if (decodedPath === `/${EDITOR_MSG_PAGE_KEY}`) {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#article").style.display = "none";
    document.querySelector("#editors-msg-page").style.display = "block";
    return;
  }

  data.categories.forEach((category, i) => {
    if (decodedPath === `/article/${category.category}`) {
      hasArticle = true;
      showArticle(i);
    }
  });

  if (!hasArticle) {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("#article").style.display = "none";
    document.querySelector("#editors-msg-page").style.display = "none";
  }
}

window.onpopstate = () => {
  showCurrentPage();
};

showCurrentPage();
