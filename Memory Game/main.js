
var suit

var size

var location

var visibility

var cardOne ="queen";
var cardTwo ="king";
var cardThree ="queen";
var cardFour ="king";

// if (cardTwo === cardFour) {
//   alert("You found a match!")
// };

var node = document.createTextNode("This is a new card.");

var element = document.getElementById("game-board");

element.appendChild(node);


function createCard(i){
  for (i = 0; i<4; i++){
    // var createCard = document.createElement('div');
    // var gameBoard = document.getElementById('game-board');
    function card() {
       element.appendChild('game-board');
    };

    // .className('card').appendChild('game-board')
  }
};

createCard(4);
