//  Mover constructor function +++++++++++++++++++++++++++++
function Mover(config) {
  moverRange = [-5, 5]
  this.config = config
  this.locationVector = new JSVector(config.x, config.y)
  this.velocityVector = new JSVector(JSVector.getRandomNumber(moverRange[0], moverRange[1]),JSVector.getRandomNumber(moverRange[0], moverRange[1]))
  // console.log("AHHH" + JSVector.getRandomNumber(-2, 2))
  console.log(this.velocityVector.y)
  this.acc = new JSVector(0, 0)
  this.diam = config.diam;
  this.isOverlapping = false;
  this.mass = config.mass;
  this.clr = "rgba(255,255,255,255)";
  this.action = config.type
}

Mover.prototype.setMass = function(mass){
  this.mass = mass
}

//  placing methods in the prototype (every ball shares functions)
Mover.prototype.run = function (width, height, config) {

  this.checkOverlapping()
  this.checkEdges(width, height);
  this.update(config);
  this.render();
  
} 

//  Check to see if buuble leaves canvas area and reposition in necessary
Mover.prototype.checkEdges = function (width, height) {

  val = 5
  moverRange = [-1, 1]
    if (this.locationVector.x > canvas.width) this.locationVector.x = 0;
    if (this.locationVector.x < 0) this.locationVector.x = canvas.width;
    if (this.locationVector.y > canvas.height) this.locationVector.y = 0;
    if (this.locationVector.y < 0) this.locationVector.y = canvas.height;
  
}

//  Sets "this.isOverlapping" to true if Movers are overlapping
Mover.prototype.checkOverlapping = function () {

  this.isOverlapping = false;

  let m = movers;

  for (let i = 0; i < m.length; i++) {
    if (this !== m[i]) {
      let d = this.locationVector.distance(m[i].locationVector)
      if (d < this.diam + m[i].diam) {
        this.centerOverlap = [m[i].x, m[i].y]
        this.isOverlapping = true;
        return;
      }
    }
  }
}

Mover.prototype.getType = function(){
  return this.config.type
}

// renders a Mover to the canvas
Mover.prototype.render = function () {

  // if(this.action == "norm"){
  //   let ctx = context;
  //   ctx.strokeStyle = "rgba(255, 155, 0, 255)"
  //   ctx.fillStyle = "rgba(255, 155, 0, 255)"
  //   ctx.beginPath();
  //   ctx.arc(this.locationVector.x, this.locationVector.y, this.diam, Math.PI * 2, 0, false);
  //   ctx.stroke();
  //   ctx.fill()
  // } else if(this.action == "attracted"){
  //   if(this.type == "Mover"){

  //   }
   
  // } else if(this.action == "repelled"){


    let ctx = context;
    ctx.strokeStyle = "rgba(255, 0, 0, 55)"
    ctx.fillStyle = "rgba(255, 0, 0, 55)"
    ctx.beginPath();
    ctx.arc(this.locationVector.x, this.locationVector.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill() 
  // }

  // console.log(config.type)



    
  }

//  update Mover every animation frame
Mover.prototype.update = function (config) {
    // this.applyForce(config)
    // this.velocityVector.add(this.acc)
    // if(this.getType() == "attractor"){
    //   console.log(this.velocityVector.x)

    // }

    
    this.locationVector.add(this.velocityVector)
    // this.acc.multiply(0)
}

Mover.prototype.moveCertain = function(){
  if(this.getType() == "Mover"){

    // this.velocityVector.x *= 1
    // this.velocityVector.y *= 1

    console.log("BEFORE" + this.velocityVector.getMagnitude())

    // if(this.velocityVector.getMagnitude() >= 5){
    //   this.velocityVector.setMagnitude(5)

    // } else if(this.velocityVector.getMagnitude() <= -5){
    //   this.velocityVector.setMagnitude(-5)

    // }

    console.log("AFTER" + this.velocityVector.getMagnitude())



    // if(this.velocityVector.getMagnitude() >= 4 ){
    //   this.velocityVector.setMagnitude(4)
    // }
  }

  

}

Mover.prototype.applySetForce = function(force) {

  config = this.config

  if(force.includes("attracted")){
    this.action = "attracted"
    for (let i = 0; i < movers.length; i++) {
      // console.log("AHHH")


      if (movers[i].getType() == "Mover" && movers[i] != this) {
        // console.log("AHH")
        if (Math.abs(this.locationVector.distance(movers[i].locationVector)) < 300) {
          dir = JSVector.subGetNew(movers[i].locationVector, this.locationVector)
          dir.setMagnitude(1)
          dir.multiply(0.5)
          acceleration = dir;
          this.velocityVector.multiply(3)

          if(this.velocityVector.getMagnitude() >= 2 ){
            this.velocityVector.setMagnitude(2)
          }
          this.velocityVector.add(acceleration)

         
        
          // this.locationVector.add(this.velocityVector)
        }
      }
    }  
  } else if(force.includes("repelled")){
    this.action = "repelled"
    // console.log("HII")
    for (let i = 0; i < movers.length; i++) {
      if (movers[i].getType() == "Mover" && movers[i] != this) {
        if (Math.abs(this.locationVector.distance(movers[i].locationVector)) < 300) {
          dir = JSVector.subGetNew(this.locationVector, movers[i].locationVector)
          dir.setMagnitude(1)
          dir.multiply(0.5)
          acceleration = dir;
          this.velocityVector.multiply(3)

          if(this.velocityVector.getMagnitude() >= 2 ){
            this.velocityVector.setMagnitude(2)
          }
          this.velocityVector.add(acceleration)

         
        
          // this.locationVector.add(this.velocityVector)
        }
      }
    } 
  } else if(force.includes("wind")){
    vector = new JSVector(0.01, 0);
    this.applyNewForce(vector)
  } else if(force.includes("gravity")){
    vector = new JSVector(0, 0.1);
    this.applyNewForce(vector)
  }


  if(this.getType() == "Mover"){
    this.moveCertain()

  // } else {
  //   for (let i = 0; i < movers.length; i++) {
  //     if (movers[i].getType() == "Mover" && movers[i] != this) {
  //       if (Math.abs(this.locationVector.distance(movers[i].locationVector)) < 300) {
  //         dir = JSVector.addGetNew(movers[i].locationVector, this.locationVector, )
  //         dir.setMagnitude(1)
  //         dir.multiply(0.5)
  //         acceleration = dir;
  //         this.velocityVector.multiply(3)
  
  //         if(this.velocityVector.getMagnitude() >= 2 ){
  //           this.velocityVector.setMagnitude(2)
  //         }
  //         this.velocityVector.add(acceleration)
  
         
        
  //         // this.locationVector.add(this.velocityVector)
  //       }
  //     }
  //   } 
  }
  

  


  // console.log(movers.length)

  


  // for (let i = 0; i < movers.length; i++) {
  //   // console.log("AHHH")
  //   // console.log("AHH")

  //   if (movers[i].getType() == "attractor" && movers[i] != this) {
  //     console.log("AHH")
  //       dir = JSVector.subGetNew(movers[i].locationVector, this.locationVector)

  //       if (dir.getMagnitude() > 1) {
  //         dir.setMagnitude(1)

  //       }
  //       dir.multiply(0.1)
  //       acceleration = dir;
  //       this.velocityVector.add(acceleration)
  //       this.velocityVector.setMagnitude(2)
  //   }
  // }  
}

Mover.prototype.applyNewForce = function(vector) {
  this.accelerationVector.add(vector)
}

Mover.prototype.applyWind = function(num){
  vector = new JSVector(num, 0);
  this.applyNewForce(vector)
}

Mover.prototype.applyGravity = function(num){
  vector = new JSVector(0, num);
  this.applyNewForce(vector)
}



