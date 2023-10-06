function ParticleSystem(x, y){
    this.loc = new JSVector(x, y)
    this.particles = []
    this.lifespan = 300

    locationParticle = new JSVector(100, 100)
    particle = new Particle(locationParticle)
}


ParticleSystem.prototype.run = function(){
    this.update();
}

ParticleSystem.prototype.update = function(){
    particle.render();
}



