function ParticleSystem(x, y){
    this.loc = new JSVector(x, y)
    this.particles = []
    this.lifespan = 300
    this.i = 0

    // this.locationParticle = new JSVector(300, 300)
    // particle = new Particle(locationParticle, 100, 5)

    this.particles.push(new Particle(this.loc, 100, 5))
    this.particles.push(new Particle(this.loc, 100, 5))

}


ParticleSystem.prototype.run = function(canvas){

    this.i++

    let w = Math.floor(Math.random() * (500 - 100) ) + 100;   
    // console.log(w)

    if(this.i % 4 == 0){

        if(this.particles.length <= 40){
            this.particles.push(new Particle(this.loc, w, 5))

        }

    }

    // console.log("AHHH")
    // console.log(this.particles)
    this.update(canvas);
}

ParticleSystem.prototype.update = function(canvas){
    // particle.run();

    for(let i = 0; i < this.particles.length; i++){
        this.particles[i].run(this.particles, canvas);
    }

    // this.particles[0].run()
    // this.particles[1].run()
}



