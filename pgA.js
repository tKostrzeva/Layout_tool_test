let pgA;
let gradientA;

function createPgA() {
    pgA = createGraphics(595, 842);
    rectMode(CENTER);

    updatePgA();
}

function updatePgA() {
    pgA.rectMode(CENTER);
    pgA.clear();
    pgA.noStroke();

    colA = colorSelectorA.value;
    colB = colorSelectorB.value;

    let startX = 0;
    let startY = rectH.value;

    let endX = rectW.value;
    let endY = rectH.value;

    gradientA = drawingContext.createLinearGradient(startX, startY, endX, endY);

    gradientA.addColorStop(0, hexToRgba(colorSelectorA.value, 1));
    gradientA.addColorStop(0.5, hexToRgba(colorSelectorA.value, 0));
    gradientA.addColorStop(1, hexToRgba(colorSelectorA.value, 0));

    pgA.push();
    pgA.drawingContext.fillStyle = gradientA;
    pgA.translate(rectPosX.value, rectPosY.value);
    pgA.rotate(radians(rectRot.value));
    pgA.rect(0, 0, rectW.value, rectH.value);
    pgA.pop();

}

