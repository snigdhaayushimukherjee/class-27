class Chain{
constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:1,
length:100

}




this.chain=Constraint.create(options)
World.add(world,this.chain)
}

display(){
var A=this.chain.bodyA.position;
var B=this.chain.bodyB.position;
strokeWeight(7);
line(A.x,A.y,B.x,B.y)

}


}


