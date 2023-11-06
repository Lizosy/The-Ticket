var x = 400;
var y = 400;
var z = 400;

var rotation = 0;

var objects = [];
var numberOfObjects = 10;
var maxObjects = 100; // Maximum number of objects before old ones get removed

let img;

function preload() {
    // Load your background image
    img = loadImage('lizsory.png', function(loadedImage) {
        loadedImage.resize(100, 100); // Resize the loaded image to 200x200 pixels
        img = loadedImage; // Assign the resized image to the img variable
    });
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(255);
    generateObjects();
    textFont('Helvetica'); // Set the default font
}

function windowResized() {
    resizeCanvas(windowWidth / 2, windowHeight / 2); // ปรับขนาด canvas ให้มีความกว้างและความสูงครึ่งหนึ่งของหน้าต่างเบราว์เซอร์
}

function draw() {
    background(255);
    rotateX(rotation);
    rotateZ(rotation);
    rotation += 0.005;
    translate(-x / 2, -y / 2, -z / 2);
    
    // Display the background image
    push();
    texture(img);
    plane(windowWidth / 20, windowHeight / 20); // ปรับขนาดรูปภาพให้เล็กลง
    pop();
    
    for (var i = 0; i < objects.length; i++) {
        objects[i].render();
    }
    for (let i = 0; i < additionalImages.length; i++) {
        push(); // Start a new drawing state
        let tx = random(-windowWidth / 2, windowWidth / 2);
        let ty = random(-windowHeight / 2, windowHeight / 2);
        let tz = random(-500, 500);
        translate(tx, ty, tz); // Translate to random location

        let angle = random(TWO_PI); // Random rotation angle
        rotateY(angle); // Rotate around the y-axis
        
        // Apply texture and draw plane with image
        texture(additionalImages[i]);
        plane(100, 100); // You can adjust the size if necessary
        pop(); // Restore original state
    }
    
    if (frameCount % 72000 == 0) {
        generateObjects();
    }

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
        stroke(0);
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
        stroke(0);
        noFill();
        beginShape();
        vertex(this.x1, this.y1, this.z1);
        vertex(this.x2, this.y2, this.z2);
        vertex(this.x3, this.y3, this.z3);
        endShape(CLOSE);
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
        stroke(0);
        noFill();
        beginShape();
        vertex(this.x1, this.y1, this.z1);
        vertex(this.x2, this.y2, this.z2);
        vertex(this.x3, this.y3, this.z3);
        vertex(this.x4, this.y4, this.z4);
        endShape(CLOSE);
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

// Ensure the setup function is called once the DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    setup(); // Call the setup function
});