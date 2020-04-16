function play() {

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImageSrc = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc);



var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);



if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 is winner! 🥇";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 is winner! 🥇";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Nobody is winner!";
}

}
