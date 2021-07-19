class Chain{
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);

        this.p = B

       this.image1=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");

    }
    fly(){
        this.chain.bodyA=null;
    }
    
    display(){
        
        image(this.image1,200,20);
        image(this.image2,170,20);
        
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.p;
            push()
            strokeWeight(5);
            stroke(49,22,8)
            if(pointA.x<220){
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                image(this.image3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                line(pointA.x+25, pointA.y, pointB.x+20, pointB.y);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                image(this.image3,pointA.x+25,pointA.y-10,15,30);  
            }
        pop()
        }
        
    }
    
}