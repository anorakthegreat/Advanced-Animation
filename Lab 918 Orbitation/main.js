
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let movers = [];
let attract = true;
let mousePos = { x: 0, y: 0 }

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
});

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
    loadMovers(1);
    animate();      // kick off the animation

}

// every animation cycle
function animate() {
    context.fillStyle = "rgba(0, 0 ,0, 0.1)"
    context.fillRect(0, 0, canvas.width, canvas.height);
    runBubbles(mousePos);   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadMovers(n) {

    configAttract = { x: 200, y: 200, diam: 20, mass: 7, wallCollision: true, force: ["none"], type: "Mover", move:true }
    configAttract1 = { x: 200, y: 200, diam: 20, mass: 7, wallCollision: true, force: ["none"], type: "Mover", move:false }


    // configRepel = {x: 200, y: 200, diam: 20, mass:7, wallCollision: false, force : ["none"], type: "repeller" }

    movers = []
    movers[0] = new Mover(configAttract)
    movers[1] = new Mover(configAttract1)


    // movers[1] = new Mover(configRepel)
    // console.log(movers)
}

// move the circle to a new location
function runBubbles(mousePos) {
    for (let i = 0; i < movers.length; i++) {
        // if(attract){
        //     movers[i].applySetForce(["attracted"])
        // } else {
        //     console.log("AHHHHHHHHH")
        //     movers[i].applySetForce(["repelled"])
        // } 




        movers[i].run(movers,canvas.width, canvas.height);
    }
}

