function Ship(){
    this.loc = new JSVector(100, 100)
    this.originx = this.loc.x

    this.velx = Math.random() * 4 -2
    this.vely = Math.random() * -3 -2

    this.vel = new JSVector(this.velx , this.vely)
    this.acc = new JSVector(0, 0.01)
    this.up = new JSVector(0, 0)
    this.lifespan = 100
    this.diam = 10
    this.bounceCount = -2;
    // this.isDead = false
    // let co lors = ["red", "orange", "yellow", "green"]
    this.fl = 0
    this.w = Math.floor(Math.random() * (5 - 1) ) + 1; 
    this.z = Math.floor(Math.random() * (3 - 1) ) + 1; 
    // ctx = context

    console.log(this.w)

    this.seg = []

    this.vels = []

    this.loadSegments()

    console.log("AHHHH" + this.seg)

    this.locSeg = new JSVector(150, 100);

    
    // this.velSeg = new JSVector(this.velx , this.vely)


    // let vec1 =  new JSVector(100, 100)
    
    
}

Ship.prototype.loadSegments = function(){

    let x = 160
    let y = 100
    for(let i = 0; i < 10; i++){

        this.seg.push(
            new JSVector(x, y)
        )

        x += 60
    }

    // let temp =  new JSVector(110, 100)
    // console.log(temp)
    // this.seg.push(temp)

    // this.seg[0] = temp
    // console.log(this.seg)
}

Ship.prototype.run = function(arr, canvas){

    // console.log(this.seg)


    this.update();
    // this.checkEdges(canvas);
    this.render();
    // this.isDead(arr);
    this.lifespan--
    // console.log(this.lifespan)

}



Ship.prototype.update = function(){

    // console.log(this.seg)

    // this.vel.add(this.up)
   
    dir = JSVector.subGetNew(planet.loc, this.loc)
    if (dir.getMagnitude() > 1) {
        dir.setMagnitude(1)

      }
    dir.multiply(0.2)
    let acceleration = dir;
    this.vel.add(acceleration)
    this.vel.setMagnitude(3)



    // this.velSeg.setMagnitude(3)
    // this.locSeg.add(this.velSeg)

    // let temp = JSVector.subGetNew(this.seg[0], this.loc);
    

    for(let i = 0; i < this.seg.length; i++){
        if(i != 0){
            temp = JSVector.subGetNew(this.seg[i], this.seg[i - 1])

            temp.limit(this.vel.getMagnitude())
            temp.multiply(-1);
        
            // console.log(this.locSeg)
            // this.seg[i].add(temp)

            let dis = this.seg[i].distance( this.seg[i - 1]);

            

            // if(dis<100){
                // temp.setMagnitude(this.segLength-dis);
                // this.seg[i].sub(temp); 
            // }

            if(dis>20){
                // temp.setMagnitude(this.segLength-dis);
                // this.seg[i].sub(temp); 

                this.vels[i] = temp
                this.seg[i].add(temp)

            } 
            
            else {

                // console.log("AHHHH")
                // console.log(temp.getMagnitude())

                // temp.setMagnitude(20-dis);

                console.log("AHHHH")
                console.log(temp.getMagnitude())
                // temp.setMagnitude(20 - dis);
                temp.setMagnitude(temp.getMagnitude() - 1);

                this.vels[i] = temp

                this.seg[i].add(temp)

            }

        } else {
            let temp = JSVector.subGetNew(this.seg[0], this.loc);

            temp.limit(this.vel.getMagnitude())
            temp.multiply(-1);
        
            // console.log(this.locSeg)
            // this.seg[0].add(temp)
            // console.log(this.seg)

            let dis = this.seg[0].distance(this.loc);
            // console.log(dis)

            if(dis>20){
                // temp.setMagnitude(this.segLength-dis);
                // this.seg[i].sub(temp); 
                this.vels[i] = temp

                this.seg[0].add(temp)

            } 
            
            else {
                console.log("AHHHH")
                console.log(temp.getMagnitude())
                // temp.setMagnitude(20 - dis);
                temp.setMagnitude(temp.getMagnitude() - 1);

                this.vels[i] = temp

                this.seg[i].add(temp)

            }
        }
    }

   
    

    this.vel.add(this.acc)
    this.loc.add(this.vel)



}



Ship.prototype.render = function () {
    // console.log("AHHH")
    let ctx = context;
    // ctx.strokeStyle = "rgba(0, 255, 0, 55)"
    // ctx.fillStyle = "rgba(0, 255, 0, 55)"

    // ctx.fillStyle = "Red";
    // ctx.strokeStyle = "Red"

    if(this.w == 1){
        ctx.fillStyle = "Red";
        ctx.strokeStyle = "Red"
    } else if(this.w == 2){
        ctx.fillStyle = "Blue";
        ctx.strokeStyle = "Blue"
    } else if(this.w == 3){
        ctx.fillStyle = "Green";
        ctx.strokeStyle = "Green"
    } else if(this.w == 4){
        ctx.fillStyle = "Yellow";
        ctx.strokeStyle = "Yellow"
    }

    // ctx.save()

    // ctx.translate(this.loc.x, this.loc.y)
    // ctx.rotate(this.loc.angleBetween(planet.loc) * 180 / Math.PI)

    let vec = JSVector.subGetNew(planet.loc, this.loc)
    // ctx.rotate(Math.PI/2 + planet.loc.getDirection())
    // ctx.rotate(Math.PI/2 + this.vel.getDirection())


    // console.log(this.vel.angleBetween(planet.vel) * 180 / Math.PI)
    ctx.beginPath()
    // ctx.moveTo(0, -15)
    // ctx.lineTo(-10, 10)
    // ctx.lineTo(0, 0)
    // ctx.lineTo(10, 10)

    ctx.save()

    // ctx.translate(this.loc.x, this.loc.y)

    // ctx.rotate(this.vel.getDirection())

    ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);

    ctx.closePath()
    ctx.stroke()

    // ctx.fillStyle = "Red";
    // ctx.strokeStyle = "Red"

    ctx.fill()

    ctx.restore()



    // ctx.beginPath()

    for(let i = 0; i < this.seg.length; i++){

        ctx.save()

        // ctx.translate(this.seg[i].x, this.seg[i].y)

        // ctx.rotate(Math.PI/2 + this.vels[i].getDirection())

        ctx.beginPath()

        // ctx.fillStyle = "Blue";
        // ctx.strokeStyle = "Blue"

        ctx.arc(this.seg[i].x, this.seg[i].y, this.diam - i/2, Math.PI * 2, 0, false);
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        ctx.restore()

    }
    // ctx.arc(this.seg[0].x, this.seg[0].y, this.diam, Math.PI * 2, 0, false);




    
    // ctx.beginPath();

    // if(this.z == 1){
    //     ctx.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    // } else {
    //     ctx.rect(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);

    // }

    // ctx.beginPath();

    // let xCenter = this.loc.x
    // let yCenter = this.loc.y


    // ctx.moveTo(xCenter-25, yCenter);
    // ctx.lineTo(xCenter+25, yCenter + 25);
    // ctx.lineTo(xCenter + 5, yCenter)
    // ctx.lineTo(xCenter + 25, yCenter-25);
    // ctx.fill();

    // ctx.rect(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);


    // ctx.stroke();
    // ctx.fill() 

    // let clr = "rgba(255, 100, 16, .83)"
    // ctx.strokeStyle = clr;
    // ctx.fillStyle = clr;

    // ctx.moveTo(0, 15)
    // ctx.lineTo(-4, 20)
    // this.fl += Math.random() *4 - 2;
    // if(this.fl > 90 || this.fl < 25) this.fl = 45
    // ctx.lineTo(0, this.fl)
    // ctx.lineTo(4, 20)
    // ctx.closePath()
    // ctx.stroke()
    // ctx.fill()
    ctx.restore()
}

Ship.prototype.isDead = function (arr) {
    // console.log("AHHH")
    if(this.lifespan <= 0){
        for(let i = 0; i < arr.length ; i++){
            if(this == arr[i]){
                arr.splice(i, 1)
            }
        }
    }
}


