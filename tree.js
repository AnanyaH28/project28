class Tree {
    constructor(x,y){
        this.x = x
        this.y = y
        this.image = loadImage("tree.png")
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,400,550,options);
        World.add (world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,400, 550);
        pop();
    }


}