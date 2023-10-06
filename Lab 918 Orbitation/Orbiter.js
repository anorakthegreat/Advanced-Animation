//  Mover constructor function +++++++++++++++++++++++++++++
function Orbiter(parent, angle, orbitalRadius, angleVel, rad, id) {

    this.id = id

    this.mover = parent;

    this.radius = rad;

    this.angularVelocity = angleVel
    this.angularVelocity = 0.1

    console.log(this.mover.locationVector.x)
    this.loc = new JSVector(this.mover.locationVector.x, this.mover.locationVector.y);
    
    this.orbitalRadius = orbitalRadius
    this.angle = angle

    this.firstRun = true
    
  }
  
  //  placing methods in the prototype (every ball shares functions)
  Orbiter.prototype.run = function (parent, movers, orbiters, idArray) {

    this.checkOverlapping(parent, movers, orbiters)
    this.update();
    this.render();
    
    this.firstRun = false
      
  } 

  Orbiter.prototype.checkOverlapping = function(parent, movers, orbiters){
    for(let i = 0; i < movers.length; i++){
      if(parent != this.mover[i]){
        // console.log(parent.locationVector.angleBetween(movers[i].locationVector))
        // this.angularVelocity = this.angle - this.loc.angleBetween(orbiters[i].loc)
        // this.angularVelocity = (this.loc.angleBetween(movers[i].locationVector) - this.angle)

        // console.log((this.loc.angleBetween(movers[i].locationVector)* 180 / Math.PI - this.angle) * 0.01 )
        this.angularVelocity = (this.loc.angleBetween(movers[i].locationVector)* 180 / Math.PI - (this.angle * 180 / Math.PI)) * 0.01

        if(this.angularVelocity > 0.1){
          this.angularVelocity = 0.11
        } else if(this.angularVelocity < -0.11){
          this.angularVelocity = 0.1
        }
        console.log(this.angularVelocity )

        // context.lineTo(this.loc.x, this.loc.y);


        // console.log(this.angle * 180 / Math.PI)

        // if(this.angularVelocity > 0.01){
        //   this.angularVelocity = 0.01
        // } else if(this.angularVelocity < -0.01){
        //   this.angularVelocity = -0.01

        // }
        // console.log(this.angularVelocity)
      }
    }
  }
  
  
  
  Orbiter.prototype.getType = function(){
    return this.config.type
  }
  
  // renders a Mover to the canvas
  Orbiter.prototype.render = function () {
      let ctx = context;
      ctx.strokeStyle = "rgba(255, 0, 0, 55)"
      ctx.fillStyle = "rgba(255, 0, 0, 55)"
      ctx.beginPath();
      ctx.arc(this.loc.x, this.loc.y, this.radius, Math.PI * 2, 0, false);


      ctx.stroke();
      ctx.fill() 
  }
  
  //  update Mover every animation frame
  Orbiter.prototype.update = function () {
      
      this.loc.x = this.mover.locationVector.x + Math.cos(this.angle) * this.orbitalRadius;
      this.loc.y = this.mover.locationVector.y + Math.sin(this.angle) * this.orbitalRadius;
      this.angle += this.angularVelocity

      if(this.angle * 180 / Math.PI > 360){
        this.angle = 0
      }
  }
  
  
  
  
  
  