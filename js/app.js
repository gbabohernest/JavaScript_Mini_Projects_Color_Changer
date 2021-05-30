const allColor = ["#f15025", "green", "red", "rgba(133,122,200)"];

const btn = document.getElementById("btn");
const bgColorText = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNum = getRandomNum();
  console.log(randomNum);
  document.body.style.backgroundColor = allColor[randomNum];
  bgColorText.textContent = allColor[randomNum];
});

// anonymous callback fun
function getRandomNum() {
  return Math.floor(Math.random() * allColor.length);
}
