var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

document.querySelector(".dice .img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Meghna Wins!";
} else if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Gurdeep Wins!";
}
