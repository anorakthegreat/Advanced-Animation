function Particle(loc, lifeSpan, diam){
    this.loc = loc.copy()
    this.originx = this.loc.x
    this.vel = new JSVector(Math.random() * 4 -2 , Math.random() * -3 -2)
    this.acc = new JSVector(0, 0.05)
    this.lifespan = lifeSpan
    this.diam = diam
    // this.isDead = false
    let colors = ["red", "orange", "yellow", "green"]

    this.w = Math.floor(Math.random() * (5 - 1) ) + 1;   
    // ctx = context

    console.log(this.w)
    
    
}

Particle.prototype.run = function(arr){
    this.update();
    this.render();
    this.isDead(arr);
    this.lifespan--
    // console.log(this.lifespan)
}


Particle.prototype.update = function(){
    this.vel.add(this.acc)
    this.loc.add(this.vel)
}

Particle.prototype.render = function () {
    // console.log("AHHH")
    let ctx = context;
    // ctx.strokeStyle = "rgba(0, 255, 0, 55)"
    // ctx.fillStyle = "rgba(0, 255, 0, 55)"

    // ctx.fillStyle = "Red";
    // ctx.strokeStyle = "Red"

    if(this.w == 1){
        ctx.fillStyle = "Red";
        ctx.strokeStyle = "Red"
    } else if(this.w == 2){
        ctx.fillStyle = "Blue";
        ctx.strokeStyle = "Blue"
    } else if(this.w == 3){
        ctx.fillStyle = "Green";
        ctx.strokeStyle = "Green"
    } else if(this.w == 4){
        ctx.fillStyle = "Yellow";
        ctx.strokeStyle = "Yellow"
    }


    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);

    ctx.stroke();
    ctx.fill() 
}

Particle.prototype.isDead = function (arr) {
    // console.log("AHHH")
    if(this.lifespan <= 0){
        for(let i = 0; i < arr.length ; i++){
            if(this == arr[i]){
                arr.splice(i, 1)
            }
        }
    }
}


