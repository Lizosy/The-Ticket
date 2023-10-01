let pdfSavePath = "assets/"; // เปลี่ยนเส้นทางไปยังโฟลเดอร์ที่ต้องการ

function setup() {
    createCanvas(500, 700);
    noLoop();
}

function generateArtWithInput(age, kid_name, gender, lat, lon, date, month, workEx, hobin, hobout, firstname, lastname) {
    colorMode(HSB, 360, 100, 100);
    background(240, 0, 100);

    if (gender === "Male") {
        fill(59, 57, 88);
    } else if (gender === "Female") {
        fill(190, 63, 80);
    }
    noStroke();
    let r = age * 12;
    let rh = r / 2;
    ellipse(250, 250, r, r);

    stroke("#888888");
    line(250, 100, 250, 400);
    line(100, 250, 400, 250);

    // shape(motif1, map(lon, 68.826, 96.128, 100, 400), map(lat, 8.09, 35.55, 400, 100), 116, 73);

    noFill();
    strokeCap(ROUND);
    strokeWeight(6);

    let s = radians(date * 6);
    let e = radians(month * 30);

    if (month <= 3) {
        arc(250, 250, 400, 400, s - HALF_PI, (3 * PI) / 2 + e);
    } else {
        arc(250, 250, 400, 400, s - HALF_PI, e - HALF_PI);
    }

    for (let j = 0; j < Math.ceil(workEx); j++) {
        // motif2.disableStyle();
        noStroke();
        fill(341, 56, 72 - j * 10);
        // shape(motif2, 300 + j * 20, 300 + j * 20, 90, 90);
        ellipse(300 + j * 20, 300 + j * 20, 90, 90);
    }

    push();
    translate(250, 250);

    for (let k = 0; k < hobin; k++) {
        noStroke();
        fill(210, 28, 55);
        ellipse(
            rh / 1.414 - 20 * (k + 1),
            -(rh / 1.414 - 20 * (k + 1)),
            20,
            20
        );
    }

    for (let k = 0; k < hobout; k++) {
        noStroke();
        fill(211, 27, 40);
        ellipse(
            rh / 1.414 + 20 * (k + 1),
            -(rh / 1.414 + 20 * (k + 1)),
            20,
            20
        );
    }
    pop();

    fill(344, 11, 13);
    text(firstname + " " + lastname, 50, 600, 60, 60);
    text("SWU aresadasdasdasdsadasdasdsat generate", 50, 635, 60, 60);

    // บันทึกศิลปะเป็นรูปภาพ
    saveCanvas("generated_art", "png");

    // ดึงข้อมูลรูปภาพที่บันทึกและแสดงใน <img>
    let canvasDataUrl = canvas.toDataURL();
    displayGeneratedImage(canvasDataUrl);
}
