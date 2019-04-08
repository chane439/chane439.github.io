let r1, r2, r3, r4;
const barWidth = 20;
let lastBar = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noCursor();
  colorMode(HSB, height, height, height);
  background(0);
  r1 = new MRect(5, 134.0, 0.532, 0.1 * height, 10.0, 60.0);
  r2 = new MRect(3, 44.0, 0.166, 0.3 * height, 5.0, 50.0);
  r3 = new MRect(4, 58.0, 0.332, 0.4 * height, 10.0, 35.0);
  r4 = new MRect(1, 120.0, 0.0498, 0.9 * height, 15.0, 60.0);
}

function draw() {
  textFont('Caslon');
  textSize(16);

  if (keyIsPressed === true) {
    r1.display();
    r2.display();
    r3.display();
    r4.display();
    text('i am sure that you will find your own colorwave :-)', 500, 350);
  } else {
    text('stay colorful and..', 600, 350);
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
    this.w = iw; // single bar width
    this.xpos = ixp; // rect xposition
    this.h = ih; // rect height
    this.ypos = iyp; // rect yposition
    this.d = id; // single bar distance
    this.t = it; // number of bars
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
      rect(
        this.xpos + i * (this.d + this.w),
        this.ypos,
        this.w,
        height * this.h
      );
    }
  }
}
