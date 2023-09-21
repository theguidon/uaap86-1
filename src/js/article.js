import { data } from "../assets/data/data";

const articleElement = document.querySelector("#article");
window.onload = () => {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      const article = `
            <button class="back"><div class="line"></div><p>Back</p></button>
            <div class="content">
              <div class="header" style="background: ${data.categories[i].card.gradient}">
                <h1 style="color: ${data.categories[i].card["title-color"]}">${data.categories[i].category}</h1>
                <h2>${data.categories[i].article.title}</h2>
                <p>By ${data.categories[i].article.writer}</p>
                <div class="images-container">
                    <img src="${data.categories[i].article["image-middle"]}" alt="" loading="lazy"/>
                    <img src="${data.categories[i].article["image-left"]}" alt="" loading="lazy"/>
                    <img src="${data.categories[i].article["image-right"]}" alt="" loading="lazy"/>
                </div>
              </div>
              <div class="writeup-wrapper">
                <p class="writeup"><b>${data.categories[i].article["first-two"]}</b>${data.categories[i].article.text}</p>
              </div>
            </div>`;

      articleElement.innerHTML = article;

      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("#article").style.display = "block";

      document.querySelector("#article .back").addEventListener("click", () => {
        document.querySelector("body").style.overflow = "auto";
        document.querySelector("#article").style.display = "none";
      });
    });
  }
};

// <img src=${data.categories[i].article["image-middle"]} alt="" />
