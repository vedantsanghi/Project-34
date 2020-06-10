var database;
var position,position1;
var p = [];



function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);

  var pos = database.ref("pos");
  pos.on("value", readPosition, showError);
}

function draw() {
  background("black");
  beginShape()
  //mousePressed();
  //mouseReleased();
  strokeWeight(70)
  stroke("white")
  noFill()
   for (var i = 0; i < p.length; i = i + 1) {
    vertex(p[i][0], p[i][1]);
    endShape();
  }
  drawSprites();

}
function readPosition(data) {
  position = data.val();
  // console.log(position.x);
  mouseX = position.x;
  mouseY = position.y;
}
function showError() {
  console.log("Error in writing to the database");
}

function writePosition(x, y) {
  database.ref("pos").set({
    x: x,
    y: y
  });

}

function mouseDragged() {
  writePosition(mouseX, mouseY)
  position1 = [position.x, position.y];
  p.push(position1);
}
