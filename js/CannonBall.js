class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution 
     restitution:0.85,


      isStatic: true
    };
//add circle to the body
this.r=40
this.body=Bodies.circle(x,y,this.r,options)
//loadImage
    World.add(world, this.body);
    this.image = loadImage("./assets/cannonball.png")

  }
shoot(){
  //add shoot function 
  var velocity=p5.VectorfromAngle(cannon.angle)
  velocity.mult(20)
  Matter.Body.Setstatic(this.body,false)
  Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
}
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//call the image function
image(this.image,0,0,this.r,this.r)

    pop();

    }
  }

