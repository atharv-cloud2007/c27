
 class Chain{
     constructor(bodya,bodyb){
     var option={
         bodyA:bodya,
         bodyB:bodyb,
         length:15,
         stiffness:0.07
     }
     this.chain=Constraint.create(option)
     World.add(world,this.chain)
     }
     display(){
     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
     }
 }

 