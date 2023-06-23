class CubeEditor {
    constructor(environmentBuilder) {
        this.environmentBuilder = environmentBuilder;
        this.selectedCubeIndex = null;
    }

    selectCube(index) {
        this.selectedCubeIndex = index;
    }

    draw() {
        if (this.selectedCubeIndex === null) {
            return;
        }
        if (this.selectedCubeIndex !== null) {

            // console.log('Cube List:', this.environmentBuilder.getCubeList()); // Logs the cube list
            // console.log('Selected Cube Index:', this.selectedCubeIndex); // Logs the index of the selected cube
            
            let selectedCube = this.environmentBuilder.getCubeList()[this.selectedCubeIndex];
            
            // console.log('Selected Cube:', selectedCube); // Logs the selected cube
            
            // Draw cube editor UI
            let inputX = createInput(selectedCube.x.toString());
            let inputY = createInput(selectedCube.y.toString());
            let inputZ = createInput(selectedCube.z.toString());

            // Position the input fields
            inputX.position(100, 10);
            inputY.position(100, 40);
            inputZ.position(100, 70);

            // Update cube position on input change
            inputX.input(() => this.environmentBuilder.updateCubePosition(this.selectedCubeIndex, inputX.value(), selectedCube.y, selectedCube.z));
            inputY.input(() => this.environmentBuilder.updateCubePosition(this.selectedCubeIndex, selectedCube.x, inputY.value(), selectedCube.z));
            inputZ.input(() => this.environmentBuilder.updateCubePosition(this.selectedCubeIndex, selectedCube.x, selectedCube.y, inputZ.value()));
        }
    }
}
