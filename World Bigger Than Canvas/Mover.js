function Mover(loc, vel, d, ctx1, ctx2, worldWidth, worldHeight) {
  //mover properties
  this.loc = loc;
  this.vel = vel;
  this.acc = new JSVector(0, 0);
  this.clr = this.getRandomColor();
  this.diam = d;
  this.ctx1 = ctx1;
  this.ctx2 = ctx2;
  this.wWidth = worldWidth;
  this.wHeight = worldHeight;
  this.worldScale = new JSVector(this.wWidth, this.wHeight);
}//++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ mover methods
Mover.prototype.run = function () {
  // console.log("AHHH")
  this.update();
  this.checkEdges();
  this.render();
}

Mover.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(3);
  this.loc.add(this.vel);
}


Mover.prototype.checkEdges = function () {
  if (this.loc.x >= world.dims.width / 2 || this.loc.x <= -world.dims.width / 2) {
    this.vel.x *= -1;
  }
  if (this.loc.y >= world.dims.height / 2 || this.loc.y < -world.dims.height  / 2) {
    this.vel.y *= -1;
  }
}


Mover.prototype.render = function () {

    

    //  render balls in world
  //   let ctx1 = this.ctx1;
   
  //  //  render balls in mini map
  //   let ctx2 = this.ctx2;

  //   ctx1.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  //   ctx2.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);

  //   let clr = "rgba(255, 100, 16, .83)"
  //   ctx1.strokeStyle = clr;
  //   ctx1.fillStyle = clr;

  //   ctx2.strokeStyle = clr;
  //   ctx2.fillStyle = clr;

  //   ctx1.stroke();
  //   ctx1.fill();

  //   ctx2.fill()
  //   ctx2.stroke();
  

    this.ctx1.beginPath();
   this.ctx1.arc(this.loc.x, this.loc.y, this.diam, 0, Math.PI*2);
   this.ctx1.closePath();
   this.ctx1.strokeStyle = this.clr;
   this.ctx1.fillStyle = this.clr;
   this.ctx1.fill();
   this.ctx1.stroke();

   this.ctx2.beginPath();
   this.ctx2.arc(this.loc.x, this.loc.y, this.diam, 0, Math.PI*2);
   this.ctx2.closePath();
   this.ctx1.strokeStyle = this.clr;
   this.ctx2.fillStyle = this.clr;
   this.ctx2.fill();
   this.ctx2.stroke();



   
}

Mover.prototype.getRandomColor = function(){
  //  List of hex color values for movers
  let colors = [
    "#7102AB",
    "#ab0256",
    "#0285ab",
    "#02ab1a",
    "#ab5302",
    "#773e26",
    "#ab0256",
    "#257874",
    "#78254e",
    "#787725"
  ];
  let index = Math.floor(Math.random()*colors.length);
  return colors[index];
}
