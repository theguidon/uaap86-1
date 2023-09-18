import { data } from "../assets/data/data";

const card = `
<div id="card" style="width: 100%;
background: ${data.categories[6].card.gradient}, 
url(${data.categories[6].card["background-image"]}); 
background-size: cover;">
    <div id="category-text">
        <div id="title"></div>
        <div id="desc"></div>
    </div>
    <div id="category-img">
        <div id="side"></div>
    </div>
</div>`;

const title = `<h1>${data.categories[6].category}</h1>`;
const desc = `<p>LAST SEASON, the Company of Ateneo Dancers (CADs) Streetdance team attempted to distinguish themselves from competitiors by adding soft textures and urban choreography to their performance in...</p>`;
const sideImg = `<img src=${data.categories[6].card["side-image"]}></img>`;
document.querySelector("#category-card").innerHTML = card;
document.querySelector("#title").innerHTML = title;
document.querySelector("#desc").innerHTML = desc;
document.querySelector("#side").innerHTML = sideImg;
