class EnvironmentBuilder {
    constructor() {
        this.cubes = [];
    }

    addCube(x = 0, y = 0, z = 0) {
        let newCube = {
            x,
            y,
            z
        };
        this.cubes.push(newCube);
        return this.cubes.length - 1; // Return the index of the new cube
    }

    getCubeList() {
        return this.cubes;
    }

    drawEnvironment() { // Draw the environment
        this.cubes.forEach((cube) => {
            push();
            translate(cube.x, cube.y, cube.z);
            box(20); // adjust size according to your needs
            pop();
        });
    }

    // Function to update cube position
    updateCubePosition(index, x, y, z) {
        if (index >= 0 && index < this.cubes.length) {
            this.cubes[index].x = x;
            this.cubes[index].y = y;
            this.cubes[index].z = z;
        }
    }

}
