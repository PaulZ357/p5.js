function setup() {
 // put setup code here
 createCanvas(1000, 400);
}

function draw() {
  // put drawing code here
  background(220);
  addShadow(false);
  circle(200, 150, 100);

  rect(10, 100, 100, 100);
  triangle(300, 205, 350, 100, 400, 205);

  addShadow(true, 125);
  rect(490, 100, 100, 100);
  circle(690, 150, 100);

 
  addShadow(true, 110);

  triangle(800, 205, 850, 100, 900, 205);

}



