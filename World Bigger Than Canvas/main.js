//Lab 1023 - 23: World bigger than Canvas
//Oct. 23, 2023
//Student Code

//Global
let world;
window.onload = init;

function init(){
    world = new World();
    animate();
}

function animate(){
  world.run();
  requestAnimationFrame(animate);
}
