
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

// var node = document.createTextNode("This is a new card.");
//
// var element = document.getElementById("game-board");
//
// element.appendChild(node);

for (i=0; i<4; i++){
  //make a div
  var div = document.createElement("div");
  //make a text node
  var t = document.createTextNode("Hello");
  //give a class
  div.className = "card";
  //put textnode inside the div
  div.appendChild(t);

  //add the div to the body
  document.getElementById("game-board").appendChild(div);


};

// function createCard(){
//   for (i = 0; i<4; i++){
//     // var createCard = document.createElement('div');
//     // var gameBoard = document.getElementById('game-board');
//     // function card() {
//     //    element.appendChild('game-board');
//     };
//
//     // .className('card').appendChild('game-board')
//   }
// };

// createCard(4);
