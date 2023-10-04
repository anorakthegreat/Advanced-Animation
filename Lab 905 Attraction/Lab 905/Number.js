//  Bubble constructor function +++++++++++++++++++++++++++++

this.numArray = [];
function Numbers(a, b, n) {
  this.a = a;
  this.b = b;
  this.n = n;


  
  for(let i = 0; i < n; i++){
    numArray[i] = Math.floor(Math.random() * (b - a) + a) 
  }
  this.clr = "rgba(255,255,255,255)";
}

//  placing methods in the prototype (every ball shares functions)
Numbers.prototype.run = function () {
  // this.checkEdges();
  // this.checkOverlapping()
  // this.update();
  // this.render();
  this.mode();
  this.mean();
  this.median();
}


//  Check to see if buuble leaves canvas area and reposition in necessary
Numbers.prototype.mean = function () {
  let total = 0
  for(let i = 0; i < numArray.length; i++){
    total = total + numArray[i]
  }
  console.log("MEAN: " + (total / numArray.length))
}

Numbers.prototype.median = function(){
  numArray.sort(function(a, b){return a-b});
  console.log(numArray)
  if(numArray.length % 2 != 0 ){
    console.log("MEDIAN: " + numArray[Math.floor(numArray.length / 2)])
  } else{
    let num = numArray[Math.floor(numArray.length/2)] + numArray[Math.floor(numArray.length/2) + 1]
    num = num/2
    console.log("MEDIAN: " + num)
  }
}

Numbers.prototype.mode = function(){
  
  
  let temp = [];

  for(let i = 0; i<= this.b; i++){
    temp.push(0);
  }

  for(let i = 0; i < numArray.length; i++){
    temp[numArray[i]]++
  }

  let maxVal = 0;
  for(let i = 0; i < temp.length; i++){
    if(temp[i] > maxVal){maxVal = temp[i]}
  }

  let mode = [];
  for(let i = 0; i < temp.length; i++){
    if(temp[i] === maxVal){mode.push(i)}
  }

  console.log("MODE: " + mode);

  return mode;


}



