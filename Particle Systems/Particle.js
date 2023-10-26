function Particle(loc, lifeSpan, diam){
    this.loc = loc.copy()
    this.originx = this.loc.x
    this.vel = new JSVector(Math.random() * 4 -2 , Math.random() * -3 -2)
    this.acc = new JSVector(0, 0.2)
    this.up = new JSVector(0, 0)
    this.lifespan = lifeSpan
    this.diam = diam
    this.bounceCount = -2;
    // this.isDead = false
    let colors = ["red", "orange", "yellow", "green"]

    this.w = Math.floor(Math.random() * (5 - 1) ) + 1; 
    this.z = Math.floor(Math.random() * (4 - 1) ) + 1; 
    // ctx = context
    this.x = 0.00000000000000000000000000000000000000000000000000000000000000000000001
    console.log(this.w)
    
    
}

Particle.prototype.run = function(arr, canvas){
    this.update();
    // this.checkEdges(canvas);
    this.render();
    this.isDead(arr);
    this.lifespan--
    // console.log(this.lifespan)
}


Particle.prototype.update = function(){
    // this.vel.add(this.up)
    this.vel.add(this.acc)
    this.loc.add(this.vel)
}



Particle.prototype.render = function () {

    this.x+= Math.PI/2
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
    // z = 2
    if(this.z == 1){
        ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
       
    } else if(this.z == 2){
        ctx.save()

        ctx.translate(this.loc.x, this.loc.y)
        // ctx.rotate(this.loc.angleBetween(planet.loc) * 180 / Math.PI)

        // ctx.rotate(Math.PI/2 + planet.loc.getDirection())
        ctx.rotate(this.x/10)


        // console.log(this.vel.angleBetween(planet.vel) * 180 / Math.PI)
        ctx.beginPath()
        ctx.moveTo(0, -6)
        ctx.lineTo(-4, 4)
        ctx.lineTo(0, 0)
        ctx.lineTo(4, 4)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()

        // ctx.rect(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);


        ctx.stroke();
        ctx.fill() 

        ctx.restore()
    
    
    
    }else{
        ctx.rect(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);

        ctx.stroke();
        ctx.fill()

    }

   


     

    
    
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


