const canvas=
document.getElementById("game");

const ctx=
canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let camera={x:0,y:0};

function updateCamera(){

camera.x=
player.x-canvas.width/2;

camera.y=
player.y-canvas.height/2;

if(camera.x<0)camera.x=0;
if(camera.y<0)camera.y=0;
}

function render(){

drawMap();

ctx.fillStyle="#ffd966";

ctx.fillRect(
player.x-camera.x,
player.y-camera.y,
player.width,
player.height
);
}

function loop(){

movePlayer();

updateCamera();

render();

requestAnimationFrame(loop);
}

loop();