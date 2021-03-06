function getRGBValue() {
	return Math.floor(Math.random() * 255)
}

function formatRGBString(red, green, blue) {
	return "rgb(" + red + "," + green + "," + blue + ")"
}

function newGame() {
	message.textContent = ""
	message.removeEventListener("click", newGame)
	message.classList.remove("setting")
	red = getRGBValue()
	green = getRGBValue()
	blue = getRGBValue()
	console.log(formatRGBString(red, green, blue))
	updateHeading()
	setBoard()
	console.log(solutionPlacement)
	gameOver = false
}

function updateHeading() {
	document.querySelector("#heading").style.backgroundColor = '#40f5c8'
	document.getElementById("red-display").textContent = red
	document.getElementById("blue-display").textContent = green
	document.getElementById("green-display").textContent = blue
	console.log("changed heading")
}

function setBoard() {
	board = document.querySelectorAll(".square")
	solutionPlacement = Math.floor(Math.random() * (board.length - 1))
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
}

function setSquare(idNumber, red, green, blue) {
	board[idNumber].style.backgroundColor = formatRGBString(red, green, blue)
}

function correct() {
	for (var i = 0; i < board.length; i++) {
		resetBoard()
		board[i].style.backgroundColor = formatRGBString(red, green, blue)
	}
	heading.style.backgroundColor = formatRGBString(red, green, blue)
	message.textContent = "PLAY AGAIN"
	message.classList.add("setting")
	message.addEventListener("click", newGame)
	gameOver = true;
}

function wrong() {
	if (gameOver === false) {
		this.classList.add("tried")
		message.textContent = "KEEP TRYING"
	}
}

function resetBoard() {
	board = document.querySelectorAll(".square")
	for (var i = 0; i < board.length; i++) {
		board[i].removeEventListener("click", correct)
		board[i].removeEventListener("click", wrong)
		board[i].classList.remove("tried")
	}
}

function newHardGame() {
	resetBoard()
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
	resetBoard()
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

var red, green, blue
var solutionPlacement
var gameOver

var columns = document.getElementsByClassName("col-sm-4")
var message = document.querySelector("#message-prompt")

var resetButton = document.querySelector("#new-colors-button")
resetButton.addEventListener("click", newGame)

var hardButton = document.querySelector("#hard-button")
hardButton.addEventListener("click", newHardGame)

var easyButton = document.querySelector("#easy-button")
easyButton.addEventListener("click", newEasyGame)

newGame()





