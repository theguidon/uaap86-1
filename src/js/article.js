import { data } from "../assets/data/data";

const articleElement = document.querySelector("#article");
window.onload = () => {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {});
  }
};
const i = 0;

const article = `
    <div class="content">
        <div class="header" style="background: ${data.categories[i].card.gradient}">
            <h1 style="color: ${data.categories[i].card["title-color"]}">${data.categories[i].category}</h1>
            <h2>${data.categories[i].article.title}</h2>
            <h3>By ${data.categories[i].article.writer}</h3>
        </div>
        <p><b>${data.categories[i].article["first-two"]}</b>${data.categories[i].article.text}</p>
    </div>
    `;

// articleElement.innerHTML += article;
