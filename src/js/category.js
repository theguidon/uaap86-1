import { data } from "../assets/data/data";

const categoryCardContainer = document.querySelector("#category-card");

const styleElement = document.createElement("style");
document.head.appendChild(styleElement);

for (let i = 0; i < data.categories.length; i++) {
  const card = `
    <div class="card" style="
      width: 100%;
      background: ${data.categories[i].card.gradient}, 
      url(${data.categories[i].card["background-image"]}); 
      background-size: cover;
    ">
      <div class="category-text">
        <div class="title" class="card-title">${data.categories[i].category}</div>
        <div class="desc">LAST SEASON, the Company of Ateneo Dancers (CADs) Streetdance team attempted to distinguish themselves from competitors by adding soft textures and urban choreography to their performance in...</div>
      </div>
      <div class="category-img">
        <div class="side"><img src=${data.categories[i].card["side-image"]} alt="Category Image"></div>
      </div>
    </div>`;

  categoryCardContainer.innerHTML += card;

  styleElement.innerHTML += `
    #category-card .card:nth-child(${i + 1}):hover {
      opacity: 1;
    }
    #category-card .card:nth-child(${i + 1}):hover .title {
      color: ${data.categories[i].card["title-color"]};
    }
  `;
}
