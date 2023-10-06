
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let ps;
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
    animate();      // kick off the animation
    ps = new ParticleSystem(100, 100);
}

// every animation cycle
function animate() {
    context.fillStyle = "rgba(0, 0 ,0, 0.1)"
    context.fillRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}


// move the circle to a new location
function runBubbles() {
    ps.run()
    
}

