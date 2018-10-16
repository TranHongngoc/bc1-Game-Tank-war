function Tank(x, y, color, direction, board) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.direction = direction;
    this.board = board;


    this.setX = function () {
        this.x = x;
    };
    this.setY = function () {
        this.y = y;
    };
    this.setDirection = function () {
        this.direction = direction;
    };

    this.render = function () {
        var context = this.board.getCanvas().getContext('2d');
       // context.clearRect(0,0,500,500);
        //context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,20,20);
        this.renderBarrel(context);
      //  context.fill();
    };

    this.moveRight = function () {
        if (this.x <=470) {
            this.x += 10;
           // this.render(canvas);
        }
    };
    this.moveLeft = function () {
        if (this.x >= 10) {
            this.x -= 10;
            //this.render(canvas);
        }
    };
    this.moveUp = function () {
        if (this.y >= 10) {
            this.y -= 10;
            //this.render(canvas);
        }
    };
    this.moveDown = function () {
        if (this.y <= 470) {
            this.y += 10;
            //this.render(canvas);
        }
    };

    this.renderBarrel = function (context) {
        context.fillStyle = this.color;
        switch (this.direction){
            case DIRECTION_DOWN:
                context.fillRect(this.x + TANK_WIDTH / 2 - BARREL_WIDTH/2, this.y + TANK_HEIGHT, BARREL_WIDTH, BARREL_WIDTH);
                break;
            case DIRECTION_UP:
                context.fillRect(this.x + TANK_WIDTH / 2 - BARREL_WIDTH/2, this.y - BARREL_WIDTH, BARREL_WIDTH, BARREL_WIDTH);
                break;
            case DIRECTION_LEFT:
                context.fillRect(this.x - BARREL_WIDTH, this.y + TANK_HEIGHT / 2 - BARREL_WIDTH/2, BARREL_WIDTH, BARREL_WIDTH);
                break;
            case DIRECTION_RIGHT:
                context.fillRect(this.x + TANK_WIDTH, this.y + TANK_HEIGHT / 2 - BARREL_WIDTH/2, BARREL_WIDTH, BARREL_WIDTH);
                break;
        }
    };

    this.move = function () {
        switch (this.direction) {
            case DIRECTION_UP:
                this.moveUp();
                break;
            case DIRECTION_DOWN:
                this.moveDown();
                break;
            case DIRECTION_LEFT:
                this.moveLeft();
                break;
            case DIRECTION_RIGHT:
                this.moveRight();
                break;

        }
        this.board.render();
    };
}





