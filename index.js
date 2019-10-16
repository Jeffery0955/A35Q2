const redRange = document.querySelector("#redRange");
const redDigit = document.querySelector(".redDigit");
const greenRange = document.querySelector("#greenRange");
const greenDigit = document.querySelector(".greenDigit");
const blueRange = document.querySelector("#blueRange");
const blueDigit = document.querySelector(".blueDigit");
const hexadecimalColor = document.querySelector(".hexadecimal");

function changColor(event) {
  if (event.target.classList.contains("colorRange")) {
    const sliderColor = event.target;
    sliderColor.nextElementSibling.innerText = sliderColor.value;
    let redString = Number(redDigit.innerText).toString(16);
    redString = (redString.length === 1) ? ("0" + redString) : redString;
    let greenString = Number(greenDigit.innerText).toString(16);
    greenString = (greenString.length === 1) ? ("0" + greenString) : greenString;
    let blueString = Number(blueDigit.innerText).toString(16);
    blueString = (blueString.length === 1) ? ("0" + blueString) : blueString;
    hexadecimalColor.innerText = "#" + redString + greenString + blueString;
    document.body.style.backgroundColor = hexadecimalColor.innerText;
  }


}

redRange.addEventListener("input", changColor);
greenRange.addEventListener("input", changColor);
blueRange.addEventListener("input", changColor);