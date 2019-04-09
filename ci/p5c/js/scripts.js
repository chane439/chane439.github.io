let r1, r2, r3, r4;
const barWidth = 1;
let lastBar = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, height, height, height);
  background('black');

  r1 = new MRect(5, 134.0, 0.532, 0.1 * height, 10.0, 60.0);
  r2 = new MRect(3, 44.0, 0.166, 0.3 * height, 5.0, 50.0);
  r3 = new MRect(4, 58.0, 0.332, 0.4 * height, 10.0, 35.0);
  r4 = new MRect(1, 120.0, 0.0498, 0.9 * height, 15.0, 60.0);
}

function draw() {
  textAlign(CENTER, CENTER);

  if (keyIsPressed === true) {
    textSize(100);
    textFont('Caslon');
    strokeWeight(0.1);
    stroke('white');
    r1.display();
    r2.display();
    r3.display();
    r4.display();
    text('you', width/2, 97.8);
    text('will', width/2, 197.8);
    text('find', width/2, 297.8);
    text('your', width/2, 397.8);
    text('own', width/2, 497.8);
    text('colorwave :-)', width/2, 593);
  } else {
    textSize(200);
    textFont('Gotham');
    noStroke();
    text('STAY', width/2, 150);
    text('COLORFUL', width/2, 350);
    text('AND...', width/2, 550);
    textSize(12);
    textFont('Avenir');
    text('press', 295, 355);
    text('keyboard', 580, 355);
  }

  r1.move(mouseX - width / 2, mouseY + height * 0.1, 100);
  r2.move((mouseX + width * 0.05) % width, mouseY + height * 0.025, 20);
  r3.move(mouseX / 4, mouseY - height * 0.025, 40);
  r4.move(mouseX - width / 2, height - mouseY, 500);

  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

class MRect {
  constructor(iw, ixp, ih, iyp, id, it) {
    this.w = iw;
    this.xpos = ixp;
    this.h = ih;
    this.ypos = iyp;
    this.d = id;
    this.t = it;
  }

  move(posX, posY, damping) {
    let dif = this.ypos - posY;
    if (abs(dif) > 1) {
      this.ypos -= dif / damping;
    }
    dif = this.xpos - posX;
    if (abs(dif) > 1) {
      this.xpos -= dif / damping;
    }
  }

  display() {
    for (let i = 0; i < this.t; i++) {
      rect(this.xpos + i * (this.d + this.w),
           this.ypos,
           this.w,
           height * this.h);
    }
  }
}
