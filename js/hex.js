const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f1f5f8 = 6
const btn = document.getElementById("btn");
const bgColorText = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hexColors[getRandomHexValue()];
  }
  console.log(hexValue);
  bgColorText.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
});

// randomNum function to generate random hex value
function getRandomHexValue() {
  return Math.floor(Math.random() * hexColors.length);
}
