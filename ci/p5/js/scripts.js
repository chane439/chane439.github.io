//http://p5js.org/reference/

var ellipseDiameter = 300;
var ellipseRandom;

function setup() {
//console.log('--try--');
createCanvas(windowWidth, windowHeight);
//colors = [color('#ffff'),]
}

function draw() {
    //RANDOM
    //ellipseRandom = random(1,ellipseDiameter);
    
    if (mouseIsPressed) {
        fill (183, 161, 185);
        //fill (getRandomColor);
        //noStroke();
    } else {
        fill (0, 30, 30, 25);
        noStroke ();
    }
   
    //NOT RANDOM
    ellipse(mouseX, mouseY, ellipseDiameter, ellipseDiameter);
    
    //RANDOM
    //ellipse(mouseX, mouseY, ellipseRandom, ellipseRandom);

}


//HELPERS
function getRandomColor() {
    return colors [int(random(0, colors.length))];
}