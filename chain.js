class Chain{
    constructor(bodyA,bodyB){
        var Options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.3,
            length:100
        }
        this.chain=Constraint.create(Options)
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}