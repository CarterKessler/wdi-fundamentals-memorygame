//created array to house the cards that are clicked on
var cardsInPlay = [ ];
//created array to house all the cards in play
var cards = ["jack", "king", "jack", "queen", "king", "queen"];



// resetCards(e);

var createBoard = function(cards){
   for (i=0; i<cards.length; i++){
     //made a new elemet- div
     var board = document.getElementById("game-board")
     var div = document.createElement("div");
     //make a text node
    //  var t = document.createTextNode("Memory");
     //gave a class to teh new div elements
     div.className = "card";
     //put textnode inside the div
     div.setAttribute('data-card', cards[i]);
     //added the new text to the new divs(cards)
    //  div.appendChild(t);
     //matched the new div element to the index with an id
     div.setAttribute('id', i);
     //add the div to the body, the game-board id
     document.getElementById("game-board").appendChild(div);



     var turnCard = function(e){
       console.log(e.target.id);
        if (e.target.id == "1" || e.target.id == "4") {
          e.target.innerHTML= '<img src="my_king.png" alt="King "   />'
        } else if (e.target.id == "3" || e.target.id == "5") {
          e.target.innerHTML='<img src="my_queen.png" alt="Queen " />'
        } else {
          e.target.innerHTML='<img src="jack.images.png" alt="Jack" />'
        }
       };
      var isMatch = function (e) {

         console.log(cardsInPlay[0]);
         console.log(cardsInPlay[1]);
         console.log(cardsInPlay[0] === cardsInPlay[1]);

         if (cardsInPlay[0] === cardsInPlay[1]) {
           alert ("ITS A MATCH")
         } else {
           alert ("try again"), resetCards(e)
         }
         cardsInPlay = [];
       };
      //    } else if (cardsInPlay[1] ===cardsInPlay[2]){
      //      alert ("Now it's a match")
      //    } else if(cardsInPlay[1] != cardsInPlay[2]){
      //      alert ("keep trying"), resetCards(e)
      //    } else if (cardsInPlay[2] === cardsInPlay[3] || cardsInPlay[0] === cardsInPlay[2]){
      //      alert ("You got it, now it's a match")
      //    } else {
      //      alert ("try again"), resetCards(e)
      //    }
      //  };

    var isTwoCards = function (e){

        cardsInPlay.push(this.getAttribute('data-card'));
        console.log(cardsInPlay);

        if (cardsInPlay.length === 2){
          isMatch(cardsInPlay);
        } else {
          console.log('click one more')
        }
        };

    var resetCards = function (e){
        console.log('reset the cards please');
      var el = document.querySelectorAll('.card img');
      for (var i=0; i<cardsInPlay.length; i++){
          el[i].style.visibility='hidden'
        };
    };



    // var resetBoard = function (e){
    //
    // };

    // var resetCards = function (){
    //         console.log("Reset cards please");
    //
    //       };




    //  div.addEventListener('click', isMatch);
     div.addEventListener('click', turnCard);
     div.addEventListener('click', isTwoCards);
  };

};


createBoard (cards);

// var resetBoard = function (e) {
//   console.log('start over');
//   alert ("Let's start over")
//   var puppy = document.querySelectorAll('.card img');
//   for (var i= 0; i<cards.length; i++){
//     puppy[i].style.visiblity= "hidden"
//   };
// };

$("button").click(function(){
  $("div").math.random("card img")
});
