const editorsMsgPage = document.querySelector("#editors-msg-page");

const page = `
    <button class="back"><div class="line"></div><p>Back</p></button>
    <div class="content">
      <div class="header">
        <h1>Message from the Editors</h1>
        <h2>Sustaining Ateneo’s fabled legacy</h2>
        <p>
          by <b>ANTON E. MERCADO</b> and <b>Juris Salvanera</b>
        </p>
      </div>
      <div class="writeup-wrapper">
				<p class="writeup"><b>A TRIUMPHANT</b> First Semester for the Blue Eagles in the University Athletic Association of the Philippines’ (UAAP) 86th Season saw the Ateneo come home with three championships across the board. Now, the next wave of Ateneo teams looks to showcase mastered craft and bring more hardware back to Loyola Heights in the Second Semester, for what is sure to be an all-out spectacle.\n\nNeedless to say, however, this primer does not fully encapsulate the blood, sweat, and tears that our Atenean athletes have put into their craft, not only with their respective sporting battlegrounds, but in the four corners of the classroom as well. Thus, our hope is that through this primer, we can give justice to the Blue Eagles’ hardwork and perseverance leading up to these Second Semester sports.\n\nIn a time where sporting excellence and spirit of competition is thrusted forward more than ever, may we all remember the values our predecessors have conscientiously upheld over the years: respect for the opponent, humility in victory, and gracefulness in defeat. All these principles are embraced by our teams’ famous battle song–that win or lose, Ateneo is the school we choose.</p>
      </div>
    </div>`;

editorsMsgPage.innerHTML = page;

document
  .querySelector("#editors-msg-page .back")
  .addEventListener("click", () => {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("#editors-msg-page").style.display = "none";
  });

document.querySelector("#learn-more").addEventListener("click", () => {
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("#editors-msg-page").style.display = "block";
});
