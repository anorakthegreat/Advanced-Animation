//  Mover constructor function +++++++++++++++++++++++++++++
function Mover() {
  moverRange = [-5, 5]
  // this.config = config
  this.locationVector = new JSVector(100, 100)
  this.velocityVector = new JSVector(JSVector.getRandomNumber(moverRange[0], moverRange[1]),JSVector.getRandomNumber(moverRange[0], moverRange[1]))
  // console.log("AHHH" + JSVector.getRandomNumber(-2, 2))
  console.log(this.velocityVector.y)
  this.acc = new JSVector(0, 0)
  this.diam = 10;
  this.isOverlapping = false;
  // this.mass = config.mass;
  this.clr = "rgba(255,255,255,255)";
  // this.action = config.type
}

// Mover.prototype.setMass = function(mass){
//   this.mass = mass
// }



//  placing methods in the prototype (every ball shares functions)
Mover.prototype.run = function (width, height, config) {

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

    
    this.locationVector.add(this.velocityVector)
}





