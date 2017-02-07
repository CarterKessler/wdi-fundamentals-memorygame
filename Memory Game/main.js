// var cards = ["jack", "king", "jack", "queen", "king", "queen"];
var cardsInPlay = [];
var cards = [];
// // // var HBO = cards.length;
// // // var face = "div";
var makeCardsArray = function(){
  var taco = [];

      taco.push('jack');
      taco.push('jack');
      taco.push('king');
      taco.push('king');
      taco.push('queen');
      taco.push('queen');
      taco.push('joker');
      taco.push('joker');

      return taco;

};
//
cards = makeCardsArray();
// [1, 7].fill("king");
// cards.forEach(makeCardsArray(0, [0])"queen");

console.log(cards);

var randomCards= function() {
  cards.sort(function(a, b){return 0.5 - Math.random()});
  createBoard(cards);
  console.log(cards);
  };



var turnCard = function(e){
  console.log(e.target.id);
  console.log(e.target.className);
  // console.log(cards);
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
   //isTwoCards;
   // isTwoCards(e);
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
           cardsInPlay = [];
         } else if (cardsInPlay[0]==="queen"){
           $("div").remove(".queen");
           cardsInPlay = [];
         } else if (cardsInPlay[0]==="king"){
           $("div").remove(".king");
           cardsInPlay = [];
         } else if (cardsInPlay[0]==="joker"){
           $("div").remove(".joker");
          //  console.log("french fries");
           cardsInPlay = [];
         }

       };
      //  document.getElementById("game-text").innerHTML= "It's a match, find another one";

     } else {

       var turnOver;

       turnOver = setTimeout(resetCards, 500)
       function resetCards(e) {
        //  console.log(cardsInPlay[0], cardsInPlay[1])
         var el = document.querySelectorAll('.card img');
         for (var i=0; i<el.length; i++){
             el[i].style.visibility='hidden'
           }
           cardsInPlay = [];
       };
      //  resetCards(e);
      //  cardsInPlay = [1];
      //  var myReset;
       //
      //  myReset = setTimeout(resetCards, 1100)
      //  var resetCards = function (e){
      //     //  console.log('reset the cards please');
      //    var el = document.querySelectorAll('.card img');
      //    for (var i=0; i<cardsInPlay.length; i++){
      //        el[i].style.visibility='hidden'
      //      };
      //    };

      //  document.getElementById("game-text").innerHTML= "Keep going";
      //  var myTar;
       //
      //  myTar= setTimeout(resetCards, 1200)
      //  function resetCards(e) {
      //    console.log('reset the cards please');
       //
      //     for (var i=0; i<cardsInPlay.length; i++) {
      //      var el = document.querySelectorAll('.card img');
      //      el[i].style.visibility='hidden';
      //    };
      //  };

      //  isTwoCards();
      // cardsInPlay = [0];
     }
        // cardsInPlay = [];
     };

var isTwoCards = function (e){
    cardsInPlay.push(this.getAttribute('data-card'));
    console.log(cardsInPlay);
    if (cardsInPlay.length === 2){
      isMatch(cardsInPlay);
    } else {
      console.log('click one more')
      // isMatch(cardsInPlay);
      // cardsInPlay = [3];
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

  //  var resetCards = function (e){
  //          console.log('reset the cards please');
  //        var el = document.querySelectorAll('.card img');
  //        for (var i=0; i<cardsInPlay.length; i++){
  //            el[i].style.visibility='hidden'
  //          };
  //        };

    div.addEventListener('click', turnCard);
    div.addEventListener('click', isTwoCards);
  };

};


createBoard (cards);
