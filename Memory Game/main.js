
var cardsInPlay = [];
var cards = [];
var jerk = [];
var makeCardsArray = function(){
  var taco = [];
      taco.push('king');
      taco.push('jack');
      taco.push('joker');
      taco.push('king');
      taco.push('queen');
      taco.push('jack');
      taco.push('queen');
      taco.push('joker');
      return taco;
    };

cards = makeCardsArray();

console.log(cards);

var randomCards = function() {
  if (jerk.length==4) {cards.sort(function(a, b){return 0.5 - Math.random()});
  createBoard(cards);
  console.log(cards);
  jerk= [];
  } else {
    alert ("Finish this one first")
  }

  };

var turnCard = function(e){
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(cards);
  // console.log(e.target.card[i]);

   if (e.target.className === "card king") {
     e.target.innerHTML= '<img src="my_king.png" alt="King "   />'
   } else if (e.target.className === "card queen") {
     e.target.innerHTML='<img src="my_queen.png" alt="Queen " />'
   } else if (e.target.className === "card jack") {
     e.target.innerHTML='<img src="jack.images.png" alt="Jack" />'
   }
   else if (e.target.className === "card joker"){
     e.target.innerHTML='<img src="joker.jpg" alt="Joker" />'
   }

  };

var isMatch = function (e) {
     console.log(cardsInPlay[0]);
     console.log(cardsInPlay[1]);
     console.log(cardsInPlay[0] === cardsInPlay[1]);

     if (cardsInPlay[0] === cardsInPlay[1]) {
       // add "ITS A MATCH" into the text of the page
      //  document.getElementById("game-text").innerHTML= "It's a match, find another one";
       var myVar;

       myVar = setTimeout(deletePair, 300)
       function deletePair(e) {
         console.log(cardsInPlay[0]);
         if (cardsInPlay[0]==="jack"){
           $("div").remove(".jack");
           jerk.push("jack");
           cardsInPlay = [];
         } else if (cardsInPlay[0]==="queen"){
           $("div").remove(".queen");
           jerk.push("queen");
           cardsInPlay = [];
         } else if (cardsInPlay[0]==="king"){
           $("div").remove(".king");
           jerk.push("king");
           cardsInPlay = [];
         } else if (cardsInPlay[0]==="joker"){
           $("div").remove(".joker");
           jerk.push("joker");
           cardsInPlay = [];
         }
         console.log(jerk);
       };
      //  document.getElementById("game-text").innerHTML= "It's a match, find another one";

     } else {

       var turnOver;

       turnOver = setTimeout(resetCards, 500)
       function resetCards(e) {
         var el = document.querySelectorAll('.card img');
         for (var i=0; i<el.length; i++){
             el[i].style.visibility='hidden'
           }
           cardsInPlay = [];
       };
     }
     };

var isTwoCards = function (e){
    cardsInPlay.push(this.getAttribute('data-card'));
    console.log(cardsInPlay);
    if (cardsInPlay.length === 2){
      isMatch(cardsInPlay);
    } else {
      console.log('click one more')
    }
    };


var createBoard = function(cards){
   for (i=0; i<cards.length; i++){
     //made a new elemet- div
     var board = document.getElementById("game-board")
     var div = document.createElement("div");
     div.className = "card "+ cards[i] ;
     //put textnode inside the div
     div.setAttribute('data-card', cards[i]);

     //matched the new div element to the index with an id
     div.setAttribute('id', i);
     //add the div to the body, the game-board id
     document.getElementById("game-board").appendChild(div);

    div.addEventListener('click', turnCard);
    div.addEventListener('click', isTwoCards);
  };

};


createBoard (cards);
