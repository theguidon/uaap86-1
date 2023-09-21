import { data } from "../assets/data/data";

const categoryContainer = document.querySelector("#category");

const styleElement = document.createElement("style");
document.head.appendChild(styleElement);

for (let i = 0; i < data.categories.length; i++) {
  const card = `
    <div id="${data.categories[i].category}" class="card" style="
      background: ${data.categories[i].card.gradient}, 
      url(${data.categories[i].card["background-image"]}); 
    ">
      <div class="category-text">
        <div class="title" class="card-title">${data.categories[i].category}</div>
        <div class="desc"><b>${data.categories[i].article["first-two"]}</b>${data.categories[i].article.text}</div>
      </div>
      <img class="category-img" src=${data.categories[i].card["side-image"]} alt="" loading="lazy"/>
    </div>`;
  // <div class="category-img">
  //     <div class="side"><img src=${data.categories[i].card["side-image"]} alt="Category Image"></div>
  //   </div>

  categoryContainer.innerHTML += card;

  styleElement.innerHTML += `
    #category-card .card:nth-child(${i + 1}):hover {
      opacity: 1;
    }
    #category-card .card:nth-child(${i + 1}):hover .title {
      color: ${data.categories[i].card["title-color"]};
    }
  `;
}
