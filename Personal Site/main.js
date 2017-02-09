var newQoutes = [];
var backgroundPictures = [];
console.log('Hello');

var makeQoutes = function() {
  qoutes = [];
  qoutes.push('"Yesterday is not ours to recover, but tomorrow is ours to win or lose."');
  qoutes.push('"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do."');
  qoutes.push('"Whatever you do, you need courage. Whatever course you decide upon, there is always someone to tell you that you are wrong. There are always difficulties arising that tempt you to believe your critics are right."');
  qoutes.push('"No bad days- none"');
  return qoutes;
};

newQoutes = makeQoutes();
console.log(newQoutes);

function myQoute () {
  var x = Math.floor((Math.random() *2) +1);
  document.getElementById("qoute").innerHTML = x
}
document.getElementById("qoute").innerHTML = newQoutes[Math.floor((Math.random() * 4) + 1)];

var makePictures = function (){
  pictures = [];
  // pictures.push('<img src="Breckenridge.jpg" alt="Breckenridge" />');
  // // pictures.push('<img src="AustinAtNight.jpg" alt="Austin at night" />');
  // pictures.push('<img src="Blackdiamonds2.jpg" alt="Black diamond" />');
  pictures.push('<img src="Utah.jpeg" alt="Utah" />');
  pictures.push('<img src="images/ChurchillDowns.jpg" alt="ChurchillDowns" />');
  // pictures.push('<img src="images/driving.png" alt="driving" />');
  pictures.push('<img src="images/GrandCanyon.jpg" alt="GrandCanyon" />');
  pictures.push('<img src="images/Colorado.jpg" alt="Colorado" >');
  return pictures;
}

backgroundPictures = makePictures();

document.getElementById("body").innerHTML = backgroundPictures[Math.floor((Math.random() *3) +1)];
