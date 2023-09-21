const editorsMsgPage = document.querySelector("#editors-msg-page");

const page = `
    <button class="back"><div class="line"></div><p>Back</p></button>
    <div class="content">
      <div class="header">
        <h1>Message from the Editors</h1>
        <h2>Blazing the Atenean Trail</h2>
        <p>
          by <b>Anton E. Mercado</b> and <b>Juris Salvanera Anthony Bautista</b>
        </p>
      </div>
      <div class="writeup-wrapper">
      <p class="writeup"><b>REJUVENATED FOR</b> the next fight ahead of them, the new wave of Ateneo student-athletes, coaches, and personnel look to put their stamp on the University Athletic Association of Philippines (UAAP) Season 86 stage. From the fields to the hardcourts, the very best of the Ateneo is ready to showcase what they have to offer on and off the floor, serving as the quintessential role models in a new age of sports. With this in mind, we can expect a variety of stories along the way, as a new spectacle awaits us in the coming months.\n\nThe GUIDON Sports stays ready to accept the challenge of bringing these athletic developments for the general public to bask in. After a few years of adjusting to the new normal, we continue striving to chronicle well-written and timely pieces to share how each individual Blue Eagle will spread their wings this year.\n\nHowever, sports is not just about awe-striking, larger-than-life moments. It is also about standing for the truth. It is about using a platform graced by Filipino greats to not only inflict social change, but to demand excellence in their respective fields as well. Galvanized by the passion and guile our Blue Eagles exemplify, the publication also remains steadfast on their path of accurate and fair reportage.\n\nWe dedicate this year’s primer to those who blazed the trail for our athletes to succeed—<i>their coaches, families, student-managers, and the whole Ateneo community</i>. May they continue to serve as the constant fuel to the inner torches of our Blue Eagles as they carry with them the fiery Atenean spirit into the new season.\n\nThis year’s primer not only champions the narratives of last year, but also chronicles the dawn of a new light. Whether on their respective playing fields or within the four corners of the classroom, our student-athletes are ready to put their best foot forward to bring honor to the Blue and White.</p>
      </div>
    </div>`;

editorsMsgPage.innerHTML += page;

document
  .querySelector("#editors-msg-page .back")
  .addEventListener("click", () => {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("#editors-msg-page").style.display = "none";
  });
