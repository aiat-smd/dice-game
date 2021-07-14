var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6 + 1);
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6 + 1);
console.log(randomNumber2);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

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