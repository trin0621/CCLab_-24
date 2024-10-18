alert('hello!')
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
  }
  
  function draw() {
    background(220);
    drawFace(width / 2, height / 2, 100);
  }
  
  function drawFace(x, y, s) {
    push();
    translate(x, y);
    rotate(frameCount * 0.07);
    //fill(255);
    circle(0, 0, s);
    fill(0);
    circle(-s*0.3, 0, s*0.05);
    circle(s*0.3, 0, s*0.05);
    arc(0, 0, s*0.3, s*0.3, 0, PI);
    pop();
  }
  