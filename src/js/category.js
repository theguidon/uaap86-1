import { data } from "../assets/data/data";

const categoryCardContainer = document.querySelector("#category-card");

const styleElement = document.createElement("style");
document.head.appendChild(styleElement);

for (let i = 0; i < data.categories.length; i++) {
  const card = `
    <div id="card" style="
      width: 100%;
      background: ${data.categories[i].card.gradient}, 
      url(${data.categories[i].card["background-image"]}); 
      background-size: cover;
    ">
      <div id="category-text">
        <div id="title" class="card-title">${data.categories[i].category}</div>
        <div id="desc">LAST SEASON, the Company of Ateneo Dancers (CADs) Streetdance team attempted to distinguish themselves from competitors by adding soft textures and urban choreography to their performance in...</div>
      </div>
      <div id="category-img">
        <div id="side"><img src=${data.categories[i].card["side-image"]} alt="Category Image"></div>
      </div>
    </div>`;

  categoryCardContainer.innerHTML += card;

  styleElement.innerHTML += `
    #card:nth-child(${i + 1}) {
      opacity: ${data.categories[i].card.opacity};
    }
    #card:nth-child(${i + 1}):hover {
      opacity: 1;
    }
    #card:nth-child(${i + 1}):hover #title {
      color: ${data.categories[i].card["title-color"]};
    }
  `;
}
