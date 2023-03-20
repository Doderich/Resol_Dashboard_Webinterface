window.addEventListener("load", function () { return main.init(); });
var main = {
    init: function () {
        this.generatecards();
    },
    generatecards: function () {
        for (var i = 0; i < 4; i++) {
            generateCard("card11", i);
        }
        for (var i = 0; i < 2; i++) {
            generateCard("card21", i);
        }
    },
};
function generateCard(cardTyp, inhalt) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(cardTyp);
    card.innerHTML = inhalt;
    document.getElementById("canvas").appendChild(card);
    return card;
}
