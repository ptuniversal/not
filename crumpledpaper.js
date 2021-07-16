class crumpledpaper {
    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.3
        }

        this.x=x;
        this.y=y;
        this.width=10;
        this.height=10;

        this.body=Bodies.rectangle(this.x,this.y,10,10,options);
        this.body = loadImage("paper.png");
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(this.image, 0, 0, this.width, this.height);
        pop();
}
}