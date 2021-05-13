class Baseclass{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
          // bounciness
            
            // so that it doesn't slide
            
            // weight
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        
        //insert
        push();
        translate(this.body.position.x, this.body.position.y);
    
        imageMode(CENTER);
        
        image(this.image, 0, 0, this.width, this.height);
        //delete
        pop();
      }
}