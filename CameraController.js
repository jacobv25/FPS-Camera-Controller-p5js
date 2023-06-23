class CameraController {
    constructor(cam, rotSpeed = 0.02, moveSpeed = 2) {
      this.cam = cam;
      this.rotSpeed = rotSpeed;
      this.moveSpeed = moveSpeed;
    }
  
    moveWithMouse(pmouseX, pmouseY, mouseX, mouseY) {
      this.cam.pan((pmouseX - mouseX) * this.rotSpeed);
      this.cam.tilt(-(pmouseY - mouseY) * this.rotSpeed);
    }
  
    moveWithKeys() {
      if (keyIsDown(87)) { // W key
        this.cam.move(0, 0, -this.moveSpeed);
      }
      if (keyIsDown(83)) { // S key
        this.cam.move(0, 0, this.moveSpeed);
      }
      if (keyIsDown(65)) { // A key
        this.cam.move(-this.moveSpeed, 0, 0);
      }
      if (keyIsDown(68)) { // D key
        this.cam.move(this.moveSpeed, 0, 0);
      }
      if (keyIsDown(81)) { // Q key
        this.cam.move(0, this.moveSpeed, 0);
      }
      if (keyIsDown(69)) { // E key
        this.cam.move(0, -this.moveSpeed, 0);
      }
    }
  
    zoom(event) {
      this.cam.move(0, 0, event.delta);
    }
  }
  