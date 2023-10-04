//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam, type = "follow") {
  this.locationVector = new JSVector(x, y)

  this.velocityVector = new JSVector(Math.floor(Math.random() * (3 + 3 + 1) - 3), Math.floor(Math.random() * (3 + 3 + 1) - 3))

  this.type = type;
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
}


//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function (width, height) {
  this.checkEdges(width, height);
  this.checkOverlapping()
  this.update();
  this.render();
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Bubble.prototype.checkEdges = function (width, height) {
  let aSpeed = 3
  let fSpeed = 2

  if (this.type === "attract") {
    // console.log("SSSSSSSSSSSSSSSSSSSSSSSF")
    if (this.locationVector.x + this.diam / 2 > canvas.width) {

      if (this.type === "attract") {
        if (this.velocityVector.x >= 0) {
          this.velocityVector.x = -Math.abs(Math.floor(Math.random() * aSpeed) + 1);
        } else {
          this.velocityVector.x = Math.floor(Math.random() * aSpeed) + 1;
        }

      } else {
        this.velocityVector.x = Math.floor(Math.random() * fSpeed) + 1;
      }
    }
    if (this.locationVector.getX() - this.diam / 2 < 0) {
      console.log("BKAFBKVFUFVIDIVFIHVIRV")
      // this.locationVector.x = canvas.width;

      if (this.type == "attract") {

        if (this.velocityVector.x < 0) {
          this.velocityVector.x = Math.floor(Math.random() * aSpeed) + 1;
        } else {
          this.velocityVector.x = -Math.abs(Math.floor(Math.random() * aSpeed) + 1);
        }

      } else {
        this.velocityVector.x = Math.floor(Math.random() * fSpeed) + 1;
      }
    }
    if (this.locationVector.getY() + this.diam / 2 > canvas.height) {
      console.log("I luv bunnies")
      // this.locationVector.y = 0;
      if (this.type == "attract") {
        if (this.velocityVector.y > 0) {
          this.velocityVector.y = -Math.abs(Math.floor(Math.random() * aSpeed) + 1);
        } else {
          // this.velocityVector.y = Math.floor(Math.random() * aSpeed) + 1;
        }
      } else {
        this.velocityVector.y = Math.floor(Math.random() * fSpeed) + 1;
      }
    }
    if (this.locationVector.getY() - this.diam / 2 < 0) {
      console.log("BKAFBKVFUFVIDIVFIHVIRV")
      // this.locationVector.y = canvas.height;
      if (this.type == "attract") {
        if (this.velocityVector.y < 0) {
          this.velocityVector.y = +Math.floor(Math.random() * aSpeed) + 1;
        } else {
          this.velocityVector.y = -Math.abs(Math.floor(Math.random() * aSpeed) + 1);
        }
      } else {
        this.velocityVector.y = Math.floor(Math.random() * fSpeed) + 1;
      }

    }
  } else {
  //   // console.log("AHHHHHHHHHHHHHHHH")

    if (this.locationVector.x > canvas.width) this.locationVector.x = 0;
    if (this.locationVector.x < 0) this.locationVector.x = canvas.width;
    if (this.locationVector.y > canvas.height) this.locationVector.y = 0;
    if (this.locationVector.y < 0) this.locationVector.y = canvas.height;
  }
}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {

  this.isOverlapping = false;

  let b = bubbles;

  for (let i = 0; i < b.length; i++) {
    if (this !== b[i]) {
      let d = this.locationVector.distance(b[i].locationVector)
      if (d < this.diam + b[i].diam) {
        this.centerOverlap = [b[i].x, b[i].y]
        this.isOverlapping = true;
        return;
      }
    }
  }
}

// renders a bubble to the canvas
Bubble.prototype.render = function () {

  let ctx = context;

  // if (this.type == "follow") {
  //   ctx.strokeStyle = "rgba(255, 155, 0, 255)"
  //   ctx.fillStyle = "rgba(255, 155, 0, 255)"
  //   ctx.beginPath();
  //   ctx.arc(this.locationVector.x, this.locationVector.y, this.diam, Math.PI * 2, 0, false);
  //   ctx.stroke();
  //   ctx.fill()

  //   // ctx.strokeStyle = 'red';
  //   // ctx.lineWidth = 20;

  //   // draw a red line
  //   // ctx.beginPath();

  // } else {
  //   ctx.strokeStyle = "rgba(0, 88, 200, 55)"
  //   ctx.fillStyle = "rgba(0, 88, 200, 55)"
  //   ctx.beginPath();
  //   ctx.arc(this.locationVector.x, this.locationVector.y, this.diam, Math.PI * 2, 0, false);
  //   ctx.stroke();
  //   ctx.fill()


  // }

  ctx.strokeStyle = "rgba(255, 155, 0, 255)"
    ctx.fillStyle = "rgba(255, 155, 0, 255)"
    ctx.beginPath();
    ctx.arc(this.locationVector.x, this.locationVector.y, this.diam, Math.PI * 2, 0, false);
    ctx.stroke();
    ctx.fill()

  // console.log(this.centerOverlap)
}

//  update bubble every animation frame
Bubble.prototype.update = function (mousePos) {

  
  if (this.type == "follow") {
    for (let i = 0; i < bubbles.length; i++) {
      if (bubbles[i].type == "attract") {
        if (Math.abs(this.locationVector.distance(bubbles[i].locationVector)) < 300) {

          dir = JSVector.subGetNew(bubbles[i].locationVector, this.locationVector)

          if (dir.getMagnitude() > 1) {
            dir.setMagnitude(1)

          }
          dir.multiply(0.2)
          acceleration = dir;
          this.velocityVector.add(acceleration)
          this.velocityVector.setMagnitude(3)
        
          this.locationVector.add(this.velocityVector)

        } else {
          
          this.locationVector.add(this.velocityVector)
        }
      }
    }
  } else {

    
    this.locationVector.x += this.velocityVector.x
    this.locationVector.y += this.velocityVector.y
  }




}

