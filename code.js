var randomNum1 = Math.floor(Math.random() * 6 + 1);
var randomImage1 = "dice" + randomNum1 + ".png";
var randomImageNumber1 = document.querySelectorAll("img")[0];
randomImageNumber1.setAttribute("src", "./images/" + randomImage1);

var randomNum2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = "dice" + randomNum2 + ".png";
var randomImageNumber2 = document.querySelectorAll("img")[1];
randomImageNumber2.setAttribute("src", "./images/" + randomImage2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player1 Wins !";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player2 Wins !";
} else {
  document.querySelector("h1").innerHTML = "Draw !";
}
