let num = 60;
let mx = [];
let my = [];
let value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 10; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(77, 90, 112);
  fill(value);
  
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

    if (mouseIsPressed) {
      textFont('Caslon');
      textSize(16);
      text('almost there.', 600, 350);
      for (let i = 0; i < num; i++) {
        let index = (which + 100 + i) % num;
        ellipse(mx[index], my[index], i, i);
        }
      value = value + 2;
      if (value > 255) {
      value = 255;
      }
    } else {
      fill(0);
      textFont('Caslon');
      textSize(16);
      text('try and run away from your shadow, i dare you.', 490, 350);
      for (let i = 0; i < num; i++) {
        let index = (which + 1 + i) % num - 2;
        ellipse(mx[index], my[index], i, i);
        }
    }
}