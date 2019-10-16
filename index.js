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
    // redString = (redDigit.innerText.toString(16).length === 1) ? 0 + redDigit.innerText.toString(16) : redDigit.innerText.toString(16);
    // const colorValue = sliderColor.value;
    sliderColor.nextElementSibling.innerText = sliderColor.value;
    let redString = Number(redDigit.innerText).toString(16);
    redString = (redString.length === 1) ? ("0" + redString) : redString;
    let greenString = Number(greenDigit.innerText).toString(16);
    greenString = (greenString.length === 1) ? ("0" + greenString) : greenString;
    let blueString = Number(blueDigit.innerText).toString(16);
    blueString = (blueString.length === 1) ? ("0" + blueString) : blueString;
    // sliderColor.nextElementSibling.innerText = (redDigit.value.toString(16).length === 1) ? ("0" + colorValue.toString(16)) : colorValue.toString(16);
    // hexadecimalColor.innerText = "#" + redDigit.innerText + greenDigit.innerText + blueDigit.innerText;
    // switch (sliderColor.id) {
    //   case "redRange":
    //     redDigit.innerText = redRange.value;
    //     break;
    //   case "greenRange":
    //     greenDigit.innerText = greenRange.value;
    //     break;
    //   case "blueRange":
    //     blueDigit.innerText = blueRange.value;
    //     break;
    // }
    hexadecimalColor.innerText = "#" + redString + greenString + blueString;
    document.body.style.backgroundColor = hexadecimalColor.innerText;
  }


}

redRange.addEventListener("input", changColor);
greenRange.addEventListener("input", changColor);
blueRange.addEventListener("input", changColor);