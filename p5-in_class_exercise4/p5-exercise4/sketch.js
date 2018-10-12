function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 1;
  ypos = height / 1;
}

function draw() {
  background(102);

  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;


  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(38, 31, 86, 20, 69, 63, 30, 76);
}
