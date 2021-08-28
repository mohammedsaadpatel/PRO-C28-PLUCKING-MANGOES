class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB=pointB;
        this.launcherObj = Constraint.create(options);
        World.add(world, this.launcherObj);
    }

    attach(body){
		this.launcherObj.bodyA=body;
	}

    fly(){
        this.launcherObj.bodyA=null;
    }

    
    display(){
       
    }
    
}