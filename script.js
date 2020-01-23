var squares = document.querySelectorAll(".square");
var colorSpan = document.querySelector("span");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var btnReset = document.querySelector("#reset");

var colors = generateColor(6);
var pickedColor = pickColor();
colorSpan.textContent = pickedColor;
colorizeSquares(squares, colors);

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "You win";
            for (var j = 0; j < squares.length; j++) {
                squares[j].style.backgroundColor = pickedColor;
            }
            h1.style.backgroundColor = pickedColor;

        } 
        else {
            message.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

btnReset.addEventListener("click", function(){
    colors = generateColor(6);
    pickedColor = pickColor();
    colorSpan.textContent = pickedColor;
    colorizeSquares(squares, colors);
    h1.style.backgroundColor = "#232323";
});


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

function pickColor() {
    return colors[Math.floor(Math.random()*colors.length)];
};

function colorizeSquares(arrSquare, arrColor) {
    for (var i = 0; i < arrSquare.length; i++) {
        arrSquare[i].style.backgroundColor = arrColor[i];
    }
}; 