var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomBg = document.getElementById("randomBg");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomNumber() {
	return Math.floor(Math.random() * 16);
}

function randomColor() {
	var hex = "0123456789ABCDEF";
	var color = "#";
	for(var i=0; i < 6; i++) {
		color += hex[randomNumber()];
	}
	return color;
}

function randomBackground() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

randomBg.addEventListener("click", randomBackground)