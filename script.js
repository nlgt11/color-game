var squares = document.querySelectorAll(".square");
var colorSpan = document.querySelector("span");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var btnReset = document.querySelector("#reset");
var btnEasy = document.querySelector("#easyBtn");
var btnHard = document.querySelector("#hardBtn");

var gameMode = "hard";
var pickedColor;
initialize(gameMode);

//Logic of squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "You win";
            for (var j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = pickedColor;
            }
            h1.style.backgroundColor = pickedColor;
            btnReset.textContent = "Play Again";
        } 
        else {
            message.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

btnReset.addEventListener("click", function() {initialize(gameMode)});

btnEasy.addEventListener("click", function() {
    btnEasy.classList.add("selected");
    btnHard.classList.remove("selected");
    gameMode = "easy";
    initialize(gameMode);
});

btnHard.addEventListener("click", function() {
    btnHard.classList.add("selected");
    btnEasy.classList.remove("selected");
    gameMode = "hard";
    initialize(gameMode);
});

function initialize(gameMode) {
    var numOfSquare = 6;
    if (gameMode === "easy") {
        numOfSquare = 3;
    }
    h1.style.backgroundColor = "#232323";
    var colors = generateColor(numOfSquare);
    colorizeSquares(numOfSquare, colors);
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    colorSpan.textContent = pickedColor;
    btnReset.textContent = "New color"
}

function generateAColor () {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return 'rgb(' + r + ', ' + g + ', '+ b +')';
};

function generateColor(numOfColor) {
    var arr = [];
    for (var i = 0; i < numOfColor; i++) {
        arr[i] = generateAColor();
    }
    return arr;
};


function colorizeSquares(numOfSquare, arrColor) {
    for (var i = 0; i < numOfSquare; i++) {
        squares[i].style.backgroundColor = arrColor[i];
        squares[i].style.display = "block";
    }
    if (numOfSquare == 3) {
        for (var j = 3; j < 6; j++) {
            squares[j].style.display = "none";
        }
    }
}; 

// var colors = generateColor(6);
// var pickedColor = pickColor();
// colorSpan.textContent = pickedColor;
// colorizeSquares(squares, colors);
// var isHard = true;



// //Reset btn function
// btnReset.addEventListener("click", initialize);

// btnEasy.addEventListener("click", function() {
//     this.classList.add("selected");
//     btnHard.classList.remove("selected");
// });

// btnHard.addEventListener("click", function() {
//     this.classList.add("selected");
//     btnEasy.classList.remove("selected");
//     initialize();
// });

// function initialize(gameMode){
//     colors = generateColor(6);
//     pickedColor = pickColor();
//     colorSpan.textContent = pickedColor;
//     colorizeSquares(squares, colors);
//     h1.style.backgroundColor = "#232323";
// };



