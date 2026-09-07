const playerName = localStorage.getItem("playerName") || "لاعب";

const welcomeText = document.getElementById("welcomeText");

welcomeText.textContent = `أهلاً ${playerName}! 🎮`;


let currentLevel = Number(
    localStorage.getItem("currentLevel") || "1"
);


const selectedLevel = Number(
    localStorage.getItem("selectedLevel") || "0"
);


const savedQuestion = localStorage.getItem("currentQuestion");
const savedScore = localStorage.getItem("score");


const levelCards = document.querySelectorAll(".level-card");


levelCards.forEach(function (card) {

    const level = Number(card.dataset.level);

    const status = card.querySelector(".level-status");


    // المراحل المفتوحة
    if (level <= currentLevel) {

        card.classList.remove("locked");

        if (level < currentLevel) {
            status.textContent = "✓";
        } else {
            status.textContent = "⭐";
        }

    } else {

        card.classList.add("locked");

        status.textContent = "🔒";
    }


    card.addEventListener("click", function () {

        if (level > currentLevel) {
            alert("هذه المرحلة مقفلة 🔒");
            return;
        }


        /*
          إذا اللاعب عنده تقدم محفوظ
          بنفس المرحلة، نكمل من مكانه.
        */

        const hasSavedProgress =
            savedQuestion !== null &&
            savedScore !== null &&
            Number(localStorage.getItem("selectedLevel")) === level;


        if (hasSavedProgress) {

            localStorage.setItem("selectedLevel", level);

            window.location.href = "game.html";

            return;
        }


        /*
          إذا بدأ مرحلة جديدة،
          نبدأ من السؤال الأول.
        */

        localStorage.setItem("selectedLevel", level);

        localStorage.setItem("currentQuestion", "0");

        localStorage.setItem("score", "0");

        window.location.href = "game.html";

    });

});