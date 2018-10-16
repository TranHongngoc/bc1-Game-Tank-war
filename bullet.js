function Bullet(x, y, color, direction, board) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.direction = direction;
    this.board = board;
    this.speed = 10;
    this.setX =function () {
        this.x = x;
    };
    this.setY = function () {
        this.y = y;
    };

    this.render = function (canvas) {
        var context = canvas.getContext('2d');
        context.beginPath();
        context.fillStyle =  this.color;
        context.arc(this.x,this.y,20, 0,Math.PI*2);
        context.fill();
    };

this.moveBullet = function () {
    switch (this.direction) {
        case DIRECTION_UP:
            this.moveUp();
    }
};

this.moveUp = function () {
    if (this.x <= 10) {
        this.x += 10;
        this.render(canvas);
    }
}



}

var bullet1 = new Bullet(30,30,'red');
var canvas = document.getElementById('myCanvas');
bullet1.render(canvas);