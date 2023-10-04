
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];

// const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
//   mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
});


function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    number = new Numbers(1, 10, 11  )
    number.run()
    loadBubbles(100);
    animate();      // kick off the animation
    
}

// every animation cycle
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    runBubbles(mousePos);   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let r = Math.random() * 5 + 5;
        // let r = 1
        bubbles[i] = new Bubble(x, y, r, "follow");

        // console.log(x)
        // console.log(y)
    }

    console.log(canvas.width/2)
    bubbles[bubbles.length] = new Bubble(200, 200, 20, "attract")
}

// move the circle to a new location
function runBubbles(mousePos) {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run(canvas.width, canvas.height, mousePos);
    }
}

