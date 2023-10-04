//  Mover constructor function +++++++++++++++++++++++++++++
function Mover(config) {
  moverRange = [-3, 3]
  this.config = config
  this.locationVector = new JSVector(config.x, config.y)
  this.velocityVector = new JSVector(JSVector.getRandomNumber(moverRange[0], moverRange[1]),JSVector.getRandomNumber(moverRange[0], moverRange[1]))
  console.log(this.velocityVector.y)
  this.acc = new JSVector(0, 0)
  this.diam = config.diam;
  this.isOverlapping = false;
  this.mass = config.mass;
  this.clr = "rgba(255,255,255,255)";
  this.action = config.type

  this.idArray = [5000, 4000, 70]

  this.orbiters = []
  console.log(this)

  // angleRange = [0, 2 * Math.PI]

  let id = 0;
  console.log(JSVector.getRandomNumber(1, 10))
  for (let i = 0; i < 1; i++) {
    this.orbiters[i] = new Orbiter(this, JSVector.getRandomNumber(0, 2*Math.PI, false), JSVector.getRandomNumber(70, 80), JSVector.getRandomNumber(1, 10)/100, 5, id)
    id++
  }

  console.log("BHAHHFH" + JSVector.getRandomNumber(0, 2*Math.PI, false))


  // this.orbiters[0] = new Orbiter(this, JSVector.getRandomNumber(0, 2*Math.PI, false), 80, JSVector.getRandomNumber(1, 10)/100, 5, id)

  // this.orbiters[1] = new Orbiter(this, JSVector.getRandomNumber(0, 2*Math.PI, false), 80, JSVector.getRandomNumber(1, 10)/100, 5, id)

  console.log(this.orbiters)

  // this.orbiter = new Orbiter(this, 0, JSVector.getRandomNumber(40, 80), 1)

}

//  placing methods in the prototype (every ball shares functions)
Mover.prototype.run = function (movers, width, height) {

  

  if(this.config.move){
    this.checkEdges(width, height);
    this.update();
    for (let i = 0; i < this.orbiters.length; i++) {
      // console.log(i)
      this.orbiters[i].run(this, movers, this.orbiters, this.idArray)
    }
  }

  this.render();

  

  // console.log(JSVector.getRandomNumber(0.1, 1)/10)


  
  // this.orbiter.run()
  
} 

//  Check to see if buuble leaves canvas area and reposition in necessary
Mover.prototype.checkEdges = function (width, height) {

    rangeVel = [-3, 3]

    if(this.locationVector.x > canvas.width && this.velocityVector.x>0){
      this.velocityVector.x *= -1
      this.velocityVector.y = JSVector.getRandomNumber(rangeVel[0], rangeVel[1])
    } else if(this.locationVector.x < 0 && this.velocityVector.x < 0){
      this.velocityVector.x *= -1
      this.velocityVector.y = JSVector.getRandomNumber(rangeVel[0], rangeVel[1])
    } else if(this.locationVector.y > canvas.height && this.velocityVector.y > 0){
      this.velocityVector.y *= -1
      this.velocityVector.x = JSVector.getRandomNumber(rangeVel[0], rangeVel[1])
    } else if(this.locationVector.y <0 && this.velocityVector.y < 0){
      this.velocityVector.y *= -1
      this.velocityVector.x = JSVector.getRandomNumber(rangeVel[0], rangeVel[1])
    }

    // if (this.locationVector.x > canvas.width) this.locationVector.x = 0;
    // if (this.locationVector.x < 0) this.locationVector.x = canvas.width;
    // if (this.locationVector.y > canvas.height) this.locationVector.y = 0;
    // if (this.locationVector.y < 0) this.locationVector.y = canvas.height;
  
}

//  Sets "this.isOverlapping" to true if Movers are overlapping
Mover.prototype.getType = function(){
  return this.config.type
}

// renders a Mover to the canvas
Mover.prototype.render = function () {
    let ctx = context;
    ctx.strokeStyle = "rgba(255, 0, 0, 55)"
    ctx.fillStyle = "rgba(255, 0, 0, 55)"
    ctx.beginPath();
    ctx.arc(this.locationVector.x, this.locationVector.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill() 
}

//  update Mover every animation frame
Mover.prototype.update = function () {
    
    this.locationVector.add(this.velocityVector)
}





