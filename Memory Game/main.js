var cards = ["jack", "king", "jack", "queen", "king", "queen"];
var cardsInPlay = [ ];

var deletePair = function(e) {
  console.log(cardsInPlay[0]);
  if (cardsInPlay[0]==="jack"){
    $("div").remove(".jack");
  } else if (cardsInPlay[0]==="queen"){
    $("div").remove(".queen");
  } else if (cardsInPlay[0]==="king"){
    $("div").remove(".king");
  } else {
    console.log("french fries");
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
     //added the new text to the new divs(cards)
    //  div.appendChild(t);
     //matched the new div element to the index with an id
     div.setAttribute('id', i);
     //add the div to the body, the game-board id
     document.getElementById("game-board").appendChild(div);

     var turnCard = function(e){
       console.log(e.target.id);
       console.log(e.target.className);
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
           // add "ITS A MATCH" into the text of the page
           document.getElementById("game-text").innerHTML= "ITS A MATCH";
           deletePair(e);
         } else {
           document.getElementById("game-text").innerHTML= "Keep going", resetCards(e)
         }
         cardsInPlay = [];
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

    var resetCards = function (e){
        console.log('reset the cards please');
      var el = document.querySelectorAll('.card img');
      for (var i=0; i<cardsInPlay.length; i++){
          el[i].style.visibility='hidden'
        };
      };

    div.addEventListener('click', turnCard);
    div.addEventListener('click', isTwoCards);
  };
};


createBoard (cards);
