
var cards = [

	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

function checkForMatch() {

	if (cardsInPlay.length>1) {

		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry try again");
		}
	}
}

var flipcard = function(cardId) {

	cardId = this.getAttribute("data-id");

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src", cards[cardId].cardImage);

	checkForMatch();
}


function createBoard(){

	for (let i=0; i < cards.length; i++){
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i)
		cardElement.addEventListener('click', flipcard);

		document.getElementById("game-board").appendChild(cardElement);
	}

}

createBoard();



/* OLD UNUSED CODE HERE

	//console.log("User flipped " + cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);


flipcard(0);
flipcard(2);

	var cardOne = cards[0];
	var cardTwo = cards[1];

	cardsInPlay.push(cardOne);
	cardsInPlay.push(cardTwo);



if (cardsInPlay.length === 2)
{

	

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

} */