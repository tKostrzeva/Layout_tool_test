const inputHeadline = document.getElementById("headline");

let rectW = document.getElementById("rectW");
let rectH = document.getElementById("rectH");
let rectPosX = document.getElementById("rectPosX");
let rectPosY = document.getElementById("rectPosY");
let rectRot = document.getElementById("rectRot");
var colorSelectorA = document.getElementById("colorSelectorA");

let elliSize = document.getElementById("elliSize");
let elliPosX = document.getElementById("elliPosX");
let elliPosY = document.getElementById("elliPosY");
var colorSelectorB = document.getElementById("colorSelectorB");
let elliGrad = document.getElementById("elliGrad");

let img, imgUp;

let status = false;

let finalPG;

function preload() {
  img = loadImage("media/02_1_facies_dorsalis_cerebri.jpg");
}

function setup() {
  var c = createCanvas(windowWidth - 300, windowHeight);
  createPgA();
  createPgB();
  createPgC();

  frameRate(120);
  c.parent("sketch-wrapper");

  finalPG = createGraphics(595, 842);

  noStroke();

  /*   let uploadElement = document.getElementById("imageUpload");
    uploadElement.addEventListener("change", handleImageUpload); */
  document.querySelector("button").addEventListener("click", switch_status);

  imageMode(CENTER);
  rectMode(CENTER);
}

/* function handleImageUpload(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      imgUp = loadImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
} */

function switch_status() {
  status = !status;
}

function draw() {
  updatePgA();
  updatePgB();
  updatePgC();

  clear();

  if (status == true) {
    clear();
    status = !status;
  }




  /*   ////////// LAYER A - rectangle
    push();
    translate(width / 2, height / 2);
    image(pgA, 0, 0);
    pop();
  
    ////////// LAYER C - text
    push();
    translate(width / 2, height / 2);
    image(pgC, 0, 0);
    pop();
  
    ////////// LAYER B - ellipse
    push();
    translate(width / 2, height / 2);
    image(pgB, 0, 0);
    pop();
     */


  finalPG.push();
  finalPG.background("#F5F5F5");
  finalPG.noStroke();
  /* finalPG.clear(); */
  finalPG.image(pgA, 0, 0);
  finalPG.image(pgC, 0, 0);
  finalPG.image(pgB, 0, 0);
  finalPG.pop();

  ////////// PREVIEW
  push();
  translate(width / 2, height / 2);
  image(finalPG, 0, 0);
  pop();

}

function hexToRgba(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function saveImage() {
  /* save(); */
  finalPG.save("kompozicia.png");
}
