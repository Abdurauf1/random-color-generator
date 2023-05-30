const changeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

const colors = ["#f1f5f8", "red", "rgba(133,122,200)", "#f15025", "green"];

const randomColor = () => {
  return Math.floor(Math.random() * colors.length);
};

changeColor.addEventListener("click", () => {
  const currColor = colors[randomColor()];
  document.body.style.backgroundColor = currColor;
  colorText.textContent = currColor;
});
