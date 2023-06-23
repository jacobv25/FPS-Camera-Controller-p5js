class DeveloperMode {
    constructor(environmentBuilder) {
        this.active = false;
        this.environmentBuilder = environmentBuilder;
        this.cubeEditor = new CubeEditor(environmentBuilder);
    }

    toggleMode() {
        this.active = !this.active;
    }

    // Draw the developer mode UI
    drawUI() {
        if (!this.active) {
            return;
        }

        // Draw add button
        let button = createButton('Add');
        button.position(10, 10);
        button.mousePressed(() => {
            let newCubeIndex = this.environmentBuilder.addCube();
            this.cubeEditor.selectCube(newCubeIndex);
        });

        // Draw cube list
        let cubeList = this.environmentBuilder.getCubeList();
        cubeList.forEach((cube, index) => {
            let cubeButton = createButton(`Cube ${
                index + 1
            }`);
            cubeButton.position(10, 40 + 30 * index);
            cubeButton.mousePressed(() => this.cubeEditor.selectCube(index));
        });

        // Show FPS
        textSize(16);
        fill(255);
        text(`FPS: ${
            Math.round(frameRate())
        }`, 10, height - 10);

        // Draw cube editor
        this.cubeEditor.draw();
    }
}
