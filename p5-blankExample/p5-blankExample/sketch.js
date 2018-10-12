let birds = 0;
// declare variables here

function setup() {
  createCanvas(600, 500);


  console.log(birds);
}


function draw() {

birds -= 5;

console.log("there are " + birds + "birds")

  // set background color in grayscale:
  background(150, 0, 150);

  // drawing a green ellipse at the right of the screen
  fill(random(0, 255));
  strokeWeight(0);
  ellipse(400, 200, 200, 80);

  // draw rectangle
  fill(0, 100, 100);
  stroke(255, 0, 0);
  strokeWeight(10);
  rectMode(CENTER)
  rect(mouseX, mouseY, 80, 150)

  console.log("mouse X is" + mouseX);
}



// write custom functions here
