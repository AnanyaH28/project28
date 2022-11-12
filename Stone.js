class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/stone.png");
      var options={
        isStatic:false;
        restitution:0;
        friction:1
        density:1.2
      }
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var pos = [this.body.position.x , this.body.position.y];
  
      }
  
      super.display();
    }
  }
  