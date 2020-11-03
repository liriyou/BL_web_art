let x;
let y;
let c
function setup() {
  createCanvas(400, 400);
  background(125,125,125);
  x=0;
  y=0;
  c= color(random(255),random(255),random(255));
}

function draw() {
  fill(x,y,255);

 ellipse(x,y,20,20);
 x+=2;
 y+=random(5);


 if(x > 400)
 {
   x=0;
 }
 if(y > 400)
 {
   y=0;
 }
}