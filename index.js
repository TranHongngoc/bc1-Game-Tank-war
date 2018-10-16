var canvas = document.getElementById('myCanvas');
var gameBoard = new GameBoard(canvas);
gameBoard.render();

function onKeyDown(event) {
    gameBoard.action(event.which);
}