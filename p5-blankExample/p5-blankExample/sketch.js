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

  // draw rectangle
  fill(255, 100, 50, 127);
  stroke(100, 200, mouseX, mouseY);
  strokeWeight(10);
  rect(mouseX, mouseY, 38, 31, 86, 20, 69, 63, 30, 76)

  console.log("mouse X is" + mouseX);
}



// write custom functions here
