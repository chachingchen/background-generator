var _ = require('lodash');


// Write code so that the colour inputs match the background generated on the first page load. 
// Display the initial CSS linear gradient property on page load.
// BONUS: Add a random button which generates two random numbers for the colour inputs.

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient() {
	// color1.value = "#CB33FF";
	// color2.value = "#FFF233";
	body.style.background = "linear-gradient(to right," +color1.value+" ,"+color2.value+" )";

	css.textContent = body.style.background + ";";
}

function colorNow() {

	color1.value = getColor();
	color2.value = getColor();
	setGradient();
	

}

function getColor(){
	var getColor = "#"+Math.floor(Math.random()*16777215).toString(16);
	return getColor;
}



//callback function: if put down function(), 
//it will only be call once when the js was load at the beginning,
//but if put down function, it will call everytime when event is trigger

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();

random.addEventListener("click", colorNow);

