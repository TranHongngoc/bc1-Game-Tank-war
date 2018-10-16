function GameBoard(canvas) {
    this.canvas = canvas;
    this.tank = new Tank(200, 200, 'black', DIRECTION_LEFT, this);
    this.bubbles = [];

    this.opponents = [
        new Tank(200, 400, 'red', DIRECTION_RIGHT, this),
        new Tank(100, 300, 'red', DIRECTION_DOWN, this),
    ];

    this.render = function () {
        var context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tank.render();
        this.bubbles.forEach(function (bullet) {
            bullet.render();
        });
        this.opponents.forEach(function (t) {
            t.render();
        });
    };

    this.action = function (code) {
        switch (code) {
            case 37:
                this.tank.setDirection(DIRECTION_LEFT);
                this.tank.move();
                break;
            case 38:
                this.tank.setDirection(DIRECTION_UP);
                this.tank.move();
                break;
            case 39:
                 this.tank.setDirection(DIRECTION_RIGHT);
                 this.tank.move();
                 break;
            case 40:
                this.tank.setDirection(DIRECTION_DOWN);
                this.tank.move();
                break;
        }
    };


    this.getWidth = function () {
        return this.canvas.width;
    };

    this.getHeight = function () {
        return this.canvas.height;
    };

    this.getCanvas = function () {
        return this.canvas;
    };

    this.getOpponents = function () {
        return this.opponents;
    };

    this.addBullet = function (bullet) {
        this.bullets.push(bullet);
    };
}

