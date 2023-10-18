
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variablessdfsdf
let canvas, context;
let ps;
let mover;
let attract = true;
let mousePos = { x: 0, y: 0 }
let particleSystems = []
let ship;


window.addEventListener("click", onClick)

function onClick(e){

    console.log(e.offsetX)
    console.log(e.offsetY)


    // mousePose.x = e.offsetX
    // mousePose.y = e.offsetY

    particleSystems.push(new ParticleSystem(e.offsetX, e.offsetY))
}


window.addEventListener("click", click)

function click() {

    if (attract) {
        attract = false
    } else {
        attract = true
    }
    console.log(attract)
}

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    // ps = new ParticleSystem(100, 100);
    ship = new Ship()
    mover = new Mover();
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    context.fillStyle = "rgba(0, 0 ,0, 0.1)"
    context.fillRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}


// move G the circle to a new location
function runBubbles() {

    // for(let i = 0; i < particleSystems.length; i++){
    //     particleSystems[i].run(canvas)
    // }

    // mover.run()

    ship.run()
    
}

