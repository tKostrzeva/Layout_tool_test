let pgC;
/* let colA, colB; */



function createPgC() {
    pgC = createGraphics(595, 842);
    rectMode(CENTER);

    updatePgC();
}

function updatePgC() {
    pgC.rectMode(CENTER);
    pgC.clear();
    pgC.noStroke();

    /*    colA = colorSelectorA.value;
       colB = colorSelectorB.value; */

let p = 15;

    pgC.push();
    pgC.textAlign(LEFT, TOP);
    pgC.fill(0);
    pgC.textSize(120);
    pgC.textLeading(110);
    pgC.textStyle(BOLD);
    pgC.textWrap(WORD);
    pgC.text(inputHeadline.value.toUpperCase(), 285, 0, pgC.width - 60);
    /* pgC.text(inputHeadline.value(), p, p, pgC.width - (2 * p)); */
    pgC.pop();

}
