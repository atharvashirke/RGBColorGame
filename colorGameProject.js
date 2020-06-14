
function getRGBValue() {
	return Math.floor(Math.random() * 255)
} 

function displayHeading() {
	document.querySelector("#heading").style.backgroundColor = '#40f5c8'
	document.getElementById("red-display").textContent = red
	document.getElementById("blue-display").textContent = blue
	document.getElementById("green-display").textContent = green
	console.log("changed heading")
}

function formatRGBString(red, green, blue) {
	return "rgb(" + red + "," + green + "," + blue + ")"
}

function setSquare(idNumber, red, green, blue) {
	board[idNumber].style.backgroundColor = formatRGBString(red, green, blue)
}

function setBoard() {
	board = document.querySelectorAll(".square")
	var solutionPlacement = Math.floor(Math.random() * (board.length - 1))
	for (var i = 0; i < board.length; i++) {
		if (i == solutionPlacement) {
			setSquare(i, red, green, blue)
			board[i].addEventListener("click", correct)
		} else {
			setSquare(i, getRGBValue(), getRGBValue(), getRGBValue())
			board[i].addEventListener("click", wrong)
		}
	}
	console.log("Board is set.")
	return solutionPlacement
}

function correct() {
	for (var i = 0; i < board.length; i++) {
		board[i].classList.remove("tried")
		board[i].style.backgroundColor = formatRGBString(red, green, blue)
	}
	heading.style.backgroundColor = formatRGBString(red, green, blue)
	message.textContent = "PLAY AGAIN"
	message.addEventListener("click", newGame)
	gameOver = true;
}

function wrong() {
	if (gameOver === false) {
		console.log(this)
		this.classList.add("tried")
		message.textContent = "KEEP TRYING"
	}
}

function newGame() {
	red = getRGBValue()
	blue = getRGBValue()
	green = getRGBValue()
	answer = setBoard()
	displayHeading()
	gameOver = false
	resetTiles()
}

function newHardGame() {
	var newSquares = document.getElementsByClassName("hard-square")
	for (var i = 0; i < newSquares.length; i++) {
		newSquares[i].classList.add("square")
		newSquares[i].classList.remove("invisible")
	}

	for (var i = 0; i < columns.length; i++) {
		columns[i].classList.add("col-lg-3")
	}
	newGame()
}

function newEasyGame() {
	var newSquares = document.getElementsByClassName("hard-square")
	for (var i = 0; i < newSquares.length; i++) {
		newSquares[i].classList.remove("square")
		newSquares[i].classList.add("invisible")
	}

	for (var i = 0; i < columns.length; i++) {
		columns[i].classList.remove("col-lg-3")
	}
	newGame()
}

function resetTiles() {
	var triedTiles = document.getElementsByClassName("tried")
	for (var i = 0; i < triedTiles.length; i++) {
		triedTiles[i].classList.remove("tried")
	}
}

var board = document.querySelectorAll(".square")
var red = getRGBValue()
var blue = getRGBValue()
var green = getRGBValue()
var answer = setBoard()
var gameOver = false
var heading = document.querySelector("#heading")
var message = document.querySelector("#message-prompt")
var columns = document.getElementsByClassName("col-sm-4")
displayHeading()

var resetButton = document.querySelector("#new-colors-button")
resetButton.addEventListener("click", newGame)

var hardButton = document.querySelector("#hard-button")
hardButton.addEventListener("click", newHardGame)

var easyButton = document.querySelector("#easy-button")
easyButton.addEventListener("click", newEasyGame)





