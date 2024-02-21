const changeColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

const random = () => {
    return Math.floor(Math.random() * 255);
};

changeColor.addEventListener("click", () => {
    const rgb = `rgb(${random()}, ${random()}, ${random()})`
    document.body.style.backgroundColor = rgb;
    colorText.textContent = rgb;
});
