var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumberSrc1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomNumberSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumberSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomNumberSrc2);



var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2 ) {
  title.innerHTML = "🚩 Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
  title.innerHTML = "Player 2 wins! 🚩";
}
else {
  title.innerHTML = "Draw!"
}
