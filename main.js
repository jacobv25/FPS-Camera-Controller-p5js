let camController;
let developerMode;
let environmentBuilder;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  let cam = createCamera();
  cam.setPosition(0, 0, 100);
  camController = new CameraController(cam);
  environmentBuilder = new EnvironmentBuilder();
  developerMode = new DeveloperMode(environmentBuilder);

  canvas.oncontextmenu = () => false; // prevent context menu on right click
}

function mouseWheel(event) {
  camController.zoom(event);
}

function keyTyped() {
  if(key === '`') {
      console.log('dev mode button pressed.')
      developerMode.toggleMode();
  }
}

function draw() {
  background(200);

  environmentBuilder.drawEnvironment();

  if (mouseIsPressed && mouseButton === RIGHT) {
    camController.moveWithMouse(pmouseX, pmouseY, mouseX, mouseY);
  }

  camController.moveWithKeys();

  // Draw developer mode UI
  developerMode.drawUI();

}
