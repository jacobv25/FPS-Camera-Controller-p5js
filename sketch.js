let cam;
let cubes = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();
  cam.setPosition(0, 0, 100);

  for(let i = -100; i <= 100; i += 50) {
    cubes.push({ x: i, y: i, z: i });
  }
  cam.lookAt(0, 0, 0); // make the camera look at the center of the cubes


  canvas.oncontextmenu = () => false; // prevent context menu on right click
}

function mouseWheel(event) {
  cam.move(0, 0, event.delta);
}

let rotSpeed = 0.02;
let moveSpeed = 2;

function draw() {
  background(200);

  // Draw the cubes
  for(let i = 0; i < cubes.length; i++) {
    push();
    translate(cubes[i].x, cubes[i].y, cubes[i].z);
    box(20);
    pop();
  }

  if (mouseIsPressed && mouseButton === RIGHT) {
    cam.pan((pmouseX - mouseX) * rotSpeed);
    cam.tilt((pmouseY - mouseY) * rotSpeed);
  }

  if (keyIsDown(87)) { // W key
    cam.move(0, 0, -moveSpeed);
  }
  if (keyIsDown(83)) { // S key
    cam.move(0, 0, moveSpeed);
  }
  if (keyIsDown(65)) { // A key
    cam.move(-moveSpeed, 0, 0);
  }
  if (keyIsDown(68)) { // D key
    cam.move(moveSpeed, 0, 0);
  }
  if (keyIsDown(81)) { // Q key
    cam.move(0, -moveSpeed, 0);
  }
  if (keyIsDown(69)) { // E key
    cam.move(0, moveSpeed, 0);
  }
}