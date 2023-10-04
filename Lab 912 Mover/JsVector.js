// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0,y = 0){
        // called with two arguments
        this.x = x;
        this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){

  let angle = this.getDirection();
  this.x = Math.cos(angle) * mag;
  this.y = Math.sin(angle) * mag

}

JSVector.prototype.getX = function(){
  return this.x
}

JSVector.prototype.getY = function(){
  return this.y
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){

  return Math.sqrt(this.x * this.x + this.y * this.y)

}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
  this.x = Math.cos(angle) * this.getMagnitude();
  this.y = Math.sin(angle) * this.getMagnitude()

}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){

  return Math.atan(this.y/this.x)
  
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
  this.x += v2.x;
  this.y += v2.y;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
  this.x -= v2.x;
  this.y -= v2.y;

}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){

  return new JSVector(v1.x + v2.x, v1.y + v2.y)
  
}

JSVector.getRandomNumber = function(min, max) {
  const random = Math.random();
  const scaledRandom = random * (max - min + 1) + min;
  const randomNumber = Math.floor(scaledRandom);

  if(randomNumber == 0){
    return this.getRandomNumber(min, max)
  }else{
    return randomNumber;

  }
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){

  return new JSVector(v1.x - v2.x, v1.y - v2.y)
 
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){

  this.x *= scalar
  this.y *= scalar

}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  this.y /= scalar
  this.y /= scalar

}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  this.setMagnitude(1)



}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){

  if(this.getMagnitude > lim){
    this.setMagnitude(lim)
  }
  
 
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
  xVal = Math.pow(v2.x - this.x, 2)
  yVal = Math.pow(v2.y - this.y, 2)

  return Math.sqrt(xVal + yVal)
 
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
  return Math.pow(this.distance(v2), 2)

}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |

JSVector.prototype.rotate = function(angle) {

  let x = this.x
  let y = this.y
  let cos = Math.cos(angle)
  let sin = Math.sin(angle)
  
  this.x = x * cos - y*sin
  this.y = x * sin + y  *cos
    return this;
}


// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){

  return this.getDirection() - v2.getDirection()
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
  return new JSVector(this.x, this.y)
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {

  return "X: " + this.x + " Y: " + this.y + " Magnitude: " + this.getMagnitude() + " Direction: " + this.getDirection() 
}
