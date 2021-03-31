function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(400,400);
  rotate(-90);

  //Calculating time using predefined func from p5.js
  hr = hour();
  mn = minute();
  sc = second();

  text(hr + ':' + mn + ':' + sc, 400,400);
  text(10,200);
  strokeWeight(8);
  stroke(150,150,150);
  noFill();

  hrAngle = map(hr % 12, 0, 12, 0, 360);
  stroke("blue");
  arc(0, 0, 300, 300, 0, hrAngle);

  mnAngle = map(mn, 0, 60, 0, 360);
  stroke("green");
  arc(0, 0, 280, 280, 0, mnAngle);

  scAngle = map(sc, 0, 60, 0, 360);
  stroke("red");
  arc(0, 0, 260, 260, 0, scAngle);

  push();
  rotate(hrAngle);
  stroke("blue");
  line(0, 0, 80, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(scAngle);
  stroke("red");
  line(0, 0, 120, 0);
  pop();

  drawSprites();

}