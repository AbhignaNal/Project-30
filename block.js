class Block{
    constructor(x, y, width, height){
        var options = {
            //isStatic: false,
            restitution: 0.4,
            friction: 0.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed < 3){
            var angle = this.body.angle;
            var pos = this.body.position;    
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rect(this.x, this.y, 30, 40);
            rectMode(CENTER);
            pop();
        }
        else{
            World.remove(world, this.body);
            push()
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }
    }
}