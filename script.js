let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

