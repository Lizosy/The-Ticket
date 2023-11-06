function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(255);
    generateObjects();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var x = 400;
var y = 400;
var z = 400;

var rotation = 0;

var objects = [];
var numberOfObjects = 10;
var maxObjects = 100; // Maximum number of objects before old ones get removed

function draw() {
    background(255);
    rotateX(rotation);
    //rotateY(rotation); // Uncomment if you also want rotation around the Y-axis
    rotateZ(rotation);
    rotation += 0.005;
    translate(-x / 2, -y / 2, -z / 2);
    for (var i = 0; i < objects.length; i++) {
        objects[i].render();
    }

    // Generate new objects at regular intervals
    if (frameCount % 72000 == 0) {
        generateObjects();
    }

    // Remove old objects if we have reached the maximum count
    if (objects.length > maxObjects) {
        objects.splice(0, numberOfObjects);
    }
}

function Line() {
    this.x1 = random(x);
    this.y1 = random(y);
    this.z1 = random(z);

    this.x2 = random(x);
    this.y2 = random(y);
    this.z2 = random(z);

    this.render = function () {
        stroke(0); // Set the color of the line
        beginShape();
        vertex(this.x1, this.y1, this.z1);
        vertex(this.x2, this.y2, this.z2);
        endShape();
    }
}

function Triangle() {
    this.x1 = random(x);
    this.y1 = random(y);
    this.z1 = random(z);

    this.x2 = random(x);
    this.y2 = random(y);
    this.z2 = random(z);

    this.x3 = random(x);
    this.y3 = random(y);
    this.z3 = random(z);

    this.render = function () {
        stroke(0); // Set the color of the triangle
        noFill(); // No fill for the triangle
        beginShape();
        vertex(this.x1, this.y1, this.z1);
        vertex(this.x2, this.y2, this.z2);
        vertex(this.x3, this.y3, this.z3);
        endShape(CLOSE); // Close the shape
    }
}

function Rectangle() {
    this.x1 = random(x);
    this.y1 = random(y);
    this.z1 = random(z);

    this.x2 = random(x);
    this.y2 = random(y);
    this.z2 = random(z);

    this.x3 = random(x);
    this.y3 = random(y);
    this.z3 = random(z);

    this.x4 = random(x);
    this.y4 = random(y);
    this.z4 = random(z);

    this.render = function () {
        stroke(0); // Set the color of the rectangle
        noFill(); // No fill for the rectangle
        beginShape();
        vertex(this.x1, this.y1, this.z1);
        vertex(this.x2, this.y2, this.z2);
        vertex(this.x3, this.y3, this.z3);
        vertex(this.x4, this.y4, this.z4);
        endShape(CLOSE); // Close the shape
    }
}

function generateObjects() {
    for (var i = 0; i < numberOfObjects; i++) {
        var randomized = random(1);
        if (randomized < 0.33) {
            objects.push(new Line());
        } else if (randomized < 0.66) {
            objects.push(new Triangle());
        } else {
            objects.push(new Rectangle());
        }
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    setupWallpaper(); // Call the renamed setup function
});