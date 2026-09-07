const startButton = document.getElementById("startBtn");
const exitButton = document.getElementById("exitBtn");

startButton.addEventListener("click", function () {
    window.location.href = "name.html";
});

exitButton.addEventListener("click", function () {
    window.history.back();
});