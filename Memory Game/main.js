
var cardsInPlay = [];


var cards = [
  "queen",
  "queen",
  "king",
  "king"
 ];
 var createBoard = function(cards){
   for (i=0; i<cards.length; i++){

     //make a div
     var div = document.createElement("div");
     //make a text node
     var t = document.createTextNode("Memory");
     //give a class
     div.className = "card";
     //put textnode inside the div
     div.appendChild(t);

     //add the div to the body
     document.getElementById("game-board").appendChild(div);
     //added an attribute to the newly made element(the "div") with the array index
     div.setAttribute('data-card', cards[i]);
     //added an event handler to the new element (divs) to run the function 'isTwoCards' to see is they are in play
     div.addEventListener('click', isTwoCards);
   };
 };

 createBoard(cards);
// var cardElement = [];
var isTwoCards = function (){
  cardsInPlay.push()
  if(cardsInPlay.length===2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
};
//
// var isMatch = function (){
//   if (cardsInPlay[1] != cardsInPlay{0} ) {
//     return ("keep trying");
// } else {return "Niice"};
