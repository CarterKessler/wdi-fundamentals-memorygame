//Make the Memomry game work, user visits the site and sees 4 purple cards.  User clicks on any of the four cards and it changes to 1 of 2 images.  The exposed card remains exposed as the user then clicks on another purple card.  It turns over. Now showing two cards up and the remaining two cards down. If they, the cards up, match an alert pops up to notify victory, if they don't match an alert pops up to notify failure. After failure/success alert the cards are then reset back to purple.  user play until there is a victory, then reset.

//Step 1.  create the board for the cards to land, using html tag to have the board step 2. create the four cards with unique ids and a class of image(King or queen), use a loop in the createBoard function step 3. create a function to turnover the card once its clicked on for each card. 4. run function for success after two cards are turned.  5. reset the cards

//First problem, looping through and giving the cards IDs and classes and KNOWING that it happened properly

//Card 1, a new div created by the function createBoard, id="queen1" class="queen"
//Card 2, a new div created by the function createBoard, id="king1" class="king"
//Card 3, a new div created by the function createBoard, id="queen2" class="queen"
//Card 4, a new div created by the function createBoard, id="king2" class="king"


//card1.addEventListener('click', turnCard);
//card2.addEventListener('click', turnCard);
//card3.addEventListener('click', turnCard);
//card4.addEventListener('click', turnCard);

//function turnCard(){

//function createBoard(){};
var cards = ["card1", class="queen", id="queen1"
 "card2", class="king", id="king1"
  "card3", class="king", id="king2"
   "card4" class="queen", id="queen2"];

var cardsInPlay = [];

var isMatch = function () {
  if (cardsInPlay[0]===cardsInPlay[1]){
    alert "You did it!!"
  } else {
    alert "Try again"
  }
}
class queen = '<img src="my_queen.png" alt="Queen " />';

class king = '<img src="my_king.png" alt="King " />'

var turnCard = function(){
  //change the card clicked on from purple to its image
  document.getElementById("xxx").style.visibility = "visible";
}
var createBoard = function(cards){
for (i=0; i<cards.length; i++){
  var card = document.createElement("div");

   document.getElementById("game-board").appendChild(card);
};
};

createBoard(cards);

//function isMatch(){};

//cards array [1, 2, 3, 4];


//cardsInPlay array [];
