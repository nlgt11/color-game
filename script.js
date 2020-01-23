var squares = document.querySelectorAll(".square");
var colorSpan = document.querySelector("span");

var colors = generateColor(6);
var pickedColor = colors[Math.floor(Math.random()*colors.length)];

colorSpan.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("yes");
        } 
        else {
            alert("no");
        }
    });
}


function generateAColor () {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return 'rgb(' + r + ', ' + g + ', '+ b +')'
};

function generateColor(numOfColor) {
    var arr = [];
    for (var i = 0; i < numOfColor; i++) {
        arr[i] = generateAColor();
    }
    return arr;
};