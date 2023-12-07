function Planet(){
    this.loc = new JSVector(700, 200)
    this.originx = this.loc.x
    this.vel = new JSVector(4, 2)
    this.acc = new JSVector(0, 0)
    this.up = new JSVector(0, 0)
    this.lifespan = 100
    this.diam = 10
    this.bounceCount = -2;
    // this.isDead = false
    // let co lors = ["red", "orange", "yellow", "green"]
    this.fl = 0
    this.w = Math.floor(Math.random() * (5 - 1) ) + 1; 
    this.z = Math.floor(Math.random() * (3 - 1) ) + 1; 
    // ctx = context

    // console.log(this.w)
    
    
}

Planet.prototype.run = function(arr, canvas){
    this.update();
    // this.checkEdges(canvas);
    this.render();
    // this.isDead(arr);
    // this.lifespan--
    // console.log(this.lifespan)
}


Planet.prototype.update = function(){

    // console.log(this.loc.distance(ship.loc) < 100)
    // console.log(this.loc.distance(ship.loc))
    let randX = Math.floor(Math.random() * (canvas.width - 0 + 1) + 0);
    let randY = Math.floor(Math.random() * (canvas.height - 0 + 1) + 0);

    // let testVec = new JSVector(200, 200)
    // let testVec2 = new JSVector(100, 100)

    // console.log(this.loc.distance(ship.loc))


    if(this.loc.distance(ship.loc) < 100){
        this.loc = new JSVector(randX, randY)
    }

    
}



Planet.prototype.render = function () {
    // console.log("AHHH")
    let ctx = context;
    ctx.strokeStyle = "rgba(255, 0, 0, 55)"
    ctx.fillStyle = "rgba(255, 0, 0, 55)"
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, 20, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill() 
}




