class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //elasticity
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("Sprites/ramaji.png")
        //this.sling2=loadImage("Sprites/sling2.png")
        //this.sling3=loadImage("Sprites/sling3.png")



        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
      //  this.slingshot.bodyA = null;
    }

    display(){
        stroke(9)
        image(this.sling1,188,188,30,30)
        //image(this.sling2,160,151)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            if(pointA.x<220){
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x-0.3, pointB.y-30);
                line(pointA.x, pointA.y, pointB.x+50, pointB.y-30);
               // image(this.sling3,pointA.x-6,pointA.y-8,15,30);

            }
            else{
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x, pointA.y, pointB.x+30, pointB.y);
               // image(this.sling3,pointA.x+25,pointA.y-10,15,30);
             }

            }

        }
    }
    
