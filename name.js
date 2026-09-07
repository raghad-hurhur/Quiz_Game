const nameInput = document.getElementById("playerName");
const continueBtn = document.getElementById("continueBtn");

const savedName = localStorage.getItem("playerName");

if (savedName) {
    nameInput.value = savedName;
}

continueBtn.addEventListener("click", function () {

    const playerName = nameInput.value.trim();

    if (playerName === "") {
        alert("اكتب اسمك أولاً!");
        return;
    }

    localStorage.setItem("playerName", playerName);

    // أول دخول فقط
    if (!localStorage.getItem("currentLevel")) {
        localStorage.setItem("currentLevel", "1");
    }

    window.location.href = "levels.html";
});

nameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        continueBtn.click();
    }

});