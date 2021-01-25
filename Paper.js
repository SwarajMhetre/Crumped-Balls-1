class Paper{
     constructor(x,y,r){
         var options={
             restitution:1,
             isStatic:false,
             density:1.2,
             friction:0.6
         }
        this.x=x;
        this.y=y;
        this.r=r;  
 this.body=Bodies.circle(this.x,this.y,this.r/2,options);
 World.add(world,this.body);
}
display(){
    
      var paperpos=this.body.position;
 push();
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER)
    strokeWeight(1);
    fill("gold");
    ellipse(0,0,this.r,this.r)
 pop();
}
}
