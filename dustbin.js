class Bin{
    constructor(x, y, width, height) {
      var options = {
        'restitution':0,
        'friction':5,
        'density':4
    }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
        display(){
          var angle = this.body.angle;
          push();
          imageMode(CENTER);
          image(this.image,0,0, this.width, this.height)
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width,this.height)
          pop();
        }
  }