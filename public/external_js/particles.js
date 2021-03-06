var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight - 190;

var FPS = 60;
    
var canvas;
var context;
var dot;

init();

function init() {
  canvas = document.getElementById('canvas');
  
  if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
  
    createTrail();
    
    setInterval(loop, 1000 / FPS);
  }
}

function createTrail() {

  dot = {
    x: 10, 
    y: 10,
    speed: 3,
    direction: Math.PI * 5 * Math.random()
  }
}

function updatePosition() {
  
  var dx = dot.x + dot.speed * Math.cos(dot.direction);
  var dy = dot.y + dot.speed * Math.sin(dot.direction);
  if (dx < 0 || dx > CANVAS_WIDTH || dy < 0 || dy > CANVAS_HEIGHT) {
    dot.direction = Math.PI * 2 * Math.random();
    updatePosition();
  } else {
    dot.x = dx;
    dot.y = dy;
  }
}

function loop() {
  updatePosition();
  
  // Draw over the whole canvas to create the trail effect
  context.fillStyle = 'rgba(255, 255, 255, 0.15)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw the dot
  context.beginPath();
  context.fillStyle = '#000';
  context.moveTo(dot.x, dot.y);
  context.arc(dot.x, dot.y, 10, 0, Math.PI*2, true);
  context.fill();
}