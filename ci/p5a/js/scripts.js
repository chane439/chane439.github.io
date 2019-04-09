let circle = [];
let square = [];
let morph = [];
let state = false;
var ellipseDiameter = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let angle = 0; angle < 360; angle += 9) {
    let v = p5.Vector.fromAngle(radians(angle - 80));
    v.mult(100);
    circle.push(v);
    morph.push(createVector());
  }

  for (let x = -50; x < 50; x += 10) {
    square.push(createVector(x, -50));
  }
  for (let y = -50; y < 50; y += 10) {
    square.push(createVector(50, y));
  }
  for (let x = 50; x > -50; x -= 10) {
    square.push(createVector(x, 50));
  }
  for (let y = 50; y > -50; y -= 10) {
    square.push(createVector(-50, y));
  }
}

function draw() {
  let totalDistance = 0;

  for (let i = 0; i < circle.length; i++) {
    let v1;
    if (mouseIsPressed) {
      v1 = circle[i];
      background(244, 210, 203);
      stroke (203, 242, 244);
      fill (203, 242, 244);
      stroke(255);
    } else {
      v1 = square[i];
      background (203, 242, 244);
      stroke (244, 210, 203);
      noFill();
      ellipse(mouseX, mouseY, ellipseDiameter, ellipseDiameter);
    }
    let v2 = morph[i];
    v2.lerp(v1, 0.1);
    totalDistance += p5.Vector.dist(v1, v2);
  }

  if (totalDistance < 0.1) {
    state = !state;
  }
  
  translate(width / 2, height / 2);
  strokeWeight(3);
  beginShape();

  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
}