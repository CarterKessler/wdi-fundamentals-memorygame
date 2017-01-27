// function myFunction(){
//   document.getElementById("card1").innerHTML = '<img src="my_king.png" alt="King  />'
// };


//created array to house the cards that are clicked on
var cardsInPlay = [ ];
//created array to house all the cards in play
var cards = ["king", "queen", "king", "queen"];
//
// cardOne = "queen";
// cardTwo = "king";
// cardThree = "queen";
// cardFour = "king";


// wrote function
// var isMatch = function (e) {
//
//   if (e.target.id === cardsInPlay[0]) {
//     return "ITS A MATCH"
//   } else {
//     return "It's a match!!"
//   }
//   console.log('isMatch');
// };

var isMatch = function (e) {
  console.log(cardsInPlay[0]);
  console.log(cardsInPlay[1]);
  console.log(cardsInPlay[0] === cardsInPlay[1]);
  if (cardsInPlay[1] === cardsInPlay[0]) {
    alert ("ITS A MATCH")
  } else {
    alert ("keep trying!")
  }

};




 //wrote another function


var createBoard = function(cards){
   for (i=0; i<cards.length; i++){
    //  cardsInPlay[i] = i * i;
     //made a new elemet- div
     var board = document.getElementById("game-board")
     var div = document.createElement("div");
     //make a text node
     var t = document.createTextNode("Memory");
     //gave a class to teh new div elements
     div.className = "card";
     //put textnode inside the div
     div.setAttribute('data-card', cards[i]);
     //added the new text to the new divs(cards)
     div.appendChild(t);
     //matched the new div element to the index with an id
     div.setAttribute('id', i);
     //add the div to the body, the game-board id
     document.getElementById("game-board").appendChild(div);

     var turnCard = function(e){
       console.log(e.target.id);
       // document.getElementbyId(e.target.id).src = "my_queen.png";
        if (e.target.id == "0" || e.target.id == "2") {
          e.target.innerHTML= '<img src="my_king.png" alt="King "   />'
        } else {
          e.target.innerHTML='<img src="my_queen.png" alt="Queen " />'
        }
       };



     var isTwoCards = function (e){

        cardsInPlay.push(this.getAttribute('data-card'));
        console.log(cardsInPlay);

        if (cardsInPlay.length === 2){
          isMatch(cardsInPlay);
        }
       //  else if (cardsInPlay.length === 1){
       //    return "Find the match"
       //  }
       //    cardsInPlay= [];
       //  }
        console.log('isTwoCards');

       };



    //  div.addEventListener('click', isMatch);
     div.addEventListener('click', turnCard);
     div.addEventListener('click', isTwoCards);
  };

};

createBoard (cards);




      // var today = new Date();
      // var hourNow = today.getHours();
      // var greeting;
      //
      // if (hourNow >18) {
      //   greeting = 'Good evening!';
      // } else if (hourNow >12) {
      //   greeting = 'Good Afternoon!';
      // } else if (hourNow >0) {
      //   greeting = 'Good morning!';
      // } else {
      //   greeting = 'Welcome!';
      // }
      //
      // document.write('<h3>' + greeting + '</h3>');

      //  div.setAttribute('id', cards[i]);
