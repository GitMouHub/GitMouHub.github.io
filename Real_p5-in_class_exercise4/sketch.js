let rectX = 0

function setup(){

  createCanvas(500, 500)
  background(0)

}

function draw(){
  rect(rectX, 250, 150, 150)
  rectX = rectX + 1;
  
}
