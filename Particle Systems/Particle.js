function Particle(loc, lifeSpan, diam){
    this.loc = loc.copy()
    this.originx = this.loc.x
    this.vel = new JSVector(Math.random() * 4 -2 , Math.random() * -3 -2)
    this.acc = new JSVector(0, 0.05)
    this.lifespan = lifeSpan
    this.diam = diam
    this.isDead = false
    let colors = ["red", "orange", "yellow", "green"]
    
}

Particle.prototype.run = function(){
    this.update();
}


Particle.prototype.update = function(){
    this.vel.add(this.acc)
    this.loc.add(this.vel)
}

Particle.prototype.render = function () {
    console.log("AHHH")
    let ctx = context;
    ctx.strokeStyle = "rgba(255, 0, 0, 55)"
    ctx.fillStyle = "rgba(255, 0, 0, 55)"
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill() 
}