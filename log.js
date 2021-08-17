class Log{
    constructor(x,y,height,angle){
        //1) create a new object
        //properties of the object

        var options={
            restitution:0.5,
            friction:1.5,
            density:1
        }

        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);

        //2) adding to the world
        World.add(world,this.body);
    }

    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("blue");
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}