import { data } from "../assets/data/data";

const articleElement = document.querySelector("#article");

export function showArticle(i) {
  const captains = data.categories[i].captains.map((name, index) => {
    return `
            <div class="pic-wrapper">
                <img class="captain-pic" style="background: ${data.categories[i].card.gradient}" src="${data.categories[i]["captains-images"][index]}" ="" loading="lazy" />
                <p>${name}</p>
            </div>`;
  });

  const article = `
            <button class="back"><div class="line"></div><p>Back</p></button>
            <div class="content">
              <div class="header" style="background: ${data.categories[i].card.gradient}">
                <h1 style="color: ${data.categories[i].card["title-color"]}">${data.categories[i].category}</h1>
                <h2>${data.categories[i].article.title}</h2>
                <p>By <b>${data.categories[i].article.writer}</b></p>
                <div class="images-container">
                    <img src="${data.categories[i].article["image-middle"]}" alt="" loading="lazy"/>
                    <img src="${data.categories[i].article["image-left"]}" alt="" loading="lazy"/>
                    <img src="${data.categories[i].article["image-right"]}" alt="" loading="lazy"/>
                </div>
              </div>
              <div class="writeup-wrapper">
                <p class="writeup"><b>${data.categories[i].article["first-two"]}</b>${data.categories[i].article.text} </p>
              </div>
              </div>
              </div>
            </div>`;

  articleElement.innerHTML = article;

  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("#editors-msg-page").style.display = "hidden";
  document.querySelector("#article").style.display = "block";

  document.querySelector("#article .back").addEventListener("click", () => {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("#article").style.display = "none";
    window.history.pushState({ page: "home" }, "home", "/");
  });
}

window.onload = () => {
  const cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      // push to history
      window.history.pushState(
        { page: "article" },
        "article",
        `/article/${data.categories[i].category}`
      );

      showArticle(i);
    });
  }
};
