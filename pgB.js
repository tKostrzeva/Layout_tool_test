let pgB;
let gradientB;

function createPgB() {
    pgB = createGraphics(595, 842);
    rectMode(CENTER);

    updatePgB();
}

function updatePgB() {
    pgB.rectMode(CENTER);
    pgB.clear();
    pgB.noStroke();

    /*    colA = colorSelectorA.value;
       colB = colorSelectorB.value; */

    let gradStrenght = elliGrad.value;

    let startX = 0;
    let startY = 0;
    let startR = 0;

    let endX = 0;
    let endY = 0;
    let endR = elliSize.value - gradStrenght;

    gradientB = drawingContext.createRadialGradient(startX, startY, startR, endX, endY, endR);

    gradientB.addColorStop(0, hexToRgba(colorSelectorB.value, 0));
    gradientB.addColorStop(1, hexToRgba(colorSelectorB.value, 1));

    pgB.push();
    pgB.drawingContext.fillStyle = gradientB;
    pgB.translate(elliPosX.value, elliPosY.value);
    pgB.ellipse(0, 0, elliSize.value, elliSize.value);
    pgB.pop();
}
