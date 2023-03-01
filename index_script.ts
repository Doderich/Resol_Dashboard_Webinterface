window.addEventListener("load", () => main.init());

const main = {
  init() {
    this.generatecards();
  },
  generatecards() {
    for (let i = 0; i < 4; i++) {
      generateCard("card11", i);
    }
    for (let i = 0; i < 2; i++) {
      generateCard("card21", i);
    }
  },
};

function generateCard(cardTyp, inhalt) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add(cardTyp);
  card.innerHTML = inhalt;
  document.getElementById("canvas").appendChild(card);
  return card;
}
