class SlingShot{
 constructor(bodyA,pointB){
 var options={
     bodyA : bodyA,
     pointB : pointB,
     stiffness : 0.1,
     length : 10
 }
this.sling=Constraint.create(options)
this.pointB=pointB;
this.sling1=loadImage("sprites/sling1.png")
this.sling2=loadImage("sprites/sling2.png")
this.sling3=loadImage("sprites/sling3.png")
World.add(world,this.sling)
 }

 flying(){
     this.sling.bodyA=null;
 }
display(){
    image(this.sling1,200,20);
    image(this.sling2,170,16)
push();
strokeWeight(5)
stroke(48,22,8)
if(this.sling.bodyA){
    if(this.sling.bodyA.position.x<220){
line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)
    } 
    else{
        line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30)
    }
}
pop();
}
}
