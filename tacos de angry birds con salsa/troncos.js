class troncos
{
    constructor(x, y,a){
      let options = {
restitution:0.7
      };
      
      this.body = Bodies.rectangle(x, y, 80,15, options);
      this.w = 80;
      this.h = 15;
      Matter.Body.setAngle(this.body, a);
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      push(); 
      rectMode(CENTER);
      translate(pos.x,pos.y)
      //rotate(this.body.angle)
      stroke(255);
      fill(127);
      rect(pos.x, pos.y, this.w, this.h);
      pop();
    }
    
  }

















































