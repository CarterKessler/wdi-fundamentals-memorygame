// function myFunction(){
//   document.getElementById("card1").innerHTML = '<img src="my_king.png" alt="King  />'
// };


//created array to house the cards that are clicked on
var cardsInPlay = [];
//created array to house all the cards in play
var cards = ["king", "queen", "king", "queen"];

var turnCard = function(e){
  console.log(e.target.id);
  // document.getElementbyId(e.target.id).src = "my_queen.png";
   if (e.target.id == "0" || e.target.id == "2") {
     e.target.innerHTML= '<img src="my_king.png" alt="King "   />'
   } else {
     e.target.innerHTML='<img src="my_queen.png" alt="Queen " />'
   }
  };
//wrote function
var isTwoCards = function (e){
   cardsInPlay.push(this.getAttribute('data-card'));
   console.log('isTwoCards');

  //  if(cardsInPlay.length===1){
  //    isMatch(cardsInPlay);
  //    cardsInPlay = [];

 };
 //wrote another function
 // var isMatch = function (cardsInPlay) {
 //   console.log('isMatch');
 //   if () {
 //     return "keep trying"
 //   } else {
 //     return "Awesome bruh"
 //   }
 // };

var createBoard = function(cards){
   for (i=0; i<cards.length; i++){

     //made a new elemet- div
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

     div.addEventListener('click', turnCard);
     div.addEventListener('click', isTwoCards);
    //  div.addEventListener('click', isMatch);


  };
};

createBoard (cards);

// if (cards[i]==="queen") {
//   document.getElementbyId(cards[i]).setAttribute("img","my_queen.png" );}
// //   document.getElementbyId("e.target.id").src = "my_queen.png";
// // }
// else if (e.target.id ==="king" ){
//   document.getElementById("e.target.id").src = "my_king.png";
//  }

// if (card[i] === "queen") {
//   div.innerHTML = '<img src="my_queen.png" alt="Queen " />';
// }
// else if (card[i] === "king"){
//   div.innerHTML = '<img src="my_king.png" alt="King " />';
//  }

// document.getElementsByClassName(".card").style.background-color = "blue";
// var x = document.querySelector(".card img");
// x.style.visibilty = "visible";
// a[target]{
//   visiblilty: "visible"
// };
 // div.style.visibilty = visible;
//  document.getElementById(e.target.id).style.visiblity = "visible";
 //  e.target.style.visibility = "visible";

 //  div.innerHTML = '<img src="my_queen.png" alt="Queen " />';
  // console.log(e);
  // console.log(e.target);

      //  document.getElementsByClassName("card").onclick = turnCard;
      //  cards[i].addEventListener('click', turnCard);


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
      //  fish.setAttribute('id', cards[1]);
