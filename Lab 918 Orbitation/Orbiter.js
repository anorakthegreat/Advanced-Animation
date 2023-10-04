//  Mover constructor function +++++++++++++++++++++++++++++
function Orbiter(parent, angle, orbitalRadius, angleVel, rad, id) {
    // this.mover = parent
    // this.angularVelocity = config
    // console.log(this.mover.x)

    // console.log(parent.locationVector.x)

    this.id = id

    // this.idArray = []

    this.mover = parent;

    this.radius = rad;

    this.angularVelocity = angleVel

    console.log(this.mover.locationVector.x)
    this.loc = new JSVector(this.mover.locationVector.x, this.mover.locationVector.y);
    
    this.orbitalRadius = orbitalRadius
    this.angle = angle

    this.firstRun = true
    
  }
  
  //  placing methods in the prototype (every ball shares functions)
  Orbiter.prototype.run = function (orbiters, idArray) {

    this.checkOverlapping(orbiters)
    this.update();
    this.render();
    
    this.firstRun = false
      
  } 

  Orbiter.prototype.checkOverlapping = function(orbiters, idArray){

    for(let i = 0; i < orbiters.length; i++){
      if(orbiters[i] != this){

        // console.log(this.loc.x)
        // let d = JSVector.getDistance(this.loc, orbiters[i].locationVector)
        let d = this.loc.distance(orbiters[i].loc)

        if(d < this.radius + orbiters[i].radius){
          
          if(!this.firstRun){
            // console.log("OVERLAPPING")
            // console.log(orbiters[i].id)
            // console.log(idArray)

            if(idArray.includes(orbiters[i].id) || idArray.includes(this.id)){
             console.log("Hallo")
            } else {
             this.radius *= 2
             orbiters[i].radius = 0
             this.idArray.push(orbiters.id)
            }

          }
          
        }
      }
    }

    // console.log(orbiters)
    
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
  }
  
  
  
  
  
  