var elX;
var elY;
var nemX;
var nemY;
var movNem = +8;
var balle=[];

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  // by defaults equals to 30
  setShakeThreshold(100);
  elX = windowWidth/2;
  elY = windowHeight - windowHeight/8;
  nemX = windowWidth/2;
  nemY = windowHeight/8;
  }

function draw() {
  var vX = round(map(rotationX, -180, 180, -25, 25))
  var vY = round(map(rotationY, -90, 90, -15, 15))

  background('white');
  noStroke();
  elX = elX + vY;
  elY = elY + vX;



  nemX = nemX + movNem
  nemY = nemY

  text(vX, 100, 100 )
  text(vY, 100, 200 )

  for(var i =0; i<balle.length; i++){
    fill(0)
    balle[i].display();
    balle[i].move();
  }
  // personaggio 1
  fill(0,0,255)
  var giocatore = new Ball(elX, elY, 25)
  giocatore.display();
  //nemico
  fill(255,0,0)
  var nemico = new Ball(nemX, nemY, 25)
  nemico.display();
  var bordodx = true
  if (nemico.x>windowWidth) {movNem = -8;}
  if (nemico.x<0) {movNem = 8;}

  for(var i =1; i<balle.length; i++){
      if (balle[i].intersect(nemico)) {
        background(255,0,0);}
      }
}

function mouseClicked() {
  var miaballa = new Ball(elX, elY, 2)
  balle.push(miaballa)
}

//PIù PALLE
function Ball(_x,_y,_raggio){
  this.size = _raggio;
  this.x = _x;
  this.y = _y;
  this.obx = 1;
  this.oby = 1;


this.intersect = function(other) {
  var d = dist(this.x, this.y, other.x, other.y);
  return(d<this.size+other.size)
      }

this.display = function() {
  noStroke();
  ellipse(this.x,this.y,this.size*2)
  }
this.move = function() {
  this.x = this.x ;
  this.y = this.y - 8;
}
}





//
// function draw() {
  //   background(value);
  //   fill(255-value);
  //   textSize(90);
  //   textAlign(CENTER);
  //   text(value,width/2,height/2+30)
  // }
  //
  // function deviceShaken() {
    //   value = value + 1;
    //   if (value > 255) {
      //     value = 0;
      //   }
      // }
