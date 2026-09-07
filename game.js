/* ========================================
   GET SAVED DATA
======================================== */

let currentLevel = Number(
    localStorage.getItem("selectedLevel") || "1"
);

let currentQuestionIndex = Number(
    localStorage.getItem("currentQuestion") || "0"
);

let score = Number(
    localStorage.getItem("score") || "0"
);


/* ========================================
   QUESTIONS
======================================== */

const level1Questions = [

    {
        question: "5 + 3 = ؟",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },

    {
        question: "9 - 4 = ؟",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },

    {
        question: "6 + 2 = ؟",
        options: ["7", "8", "9", "10"],
        answer: "8"
    },

    {
        question: "10 - 3 = ؟",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },

    {
        question: "4 + 5 = ؟",
        options: ["7", "8", "9", "10"],
        answer: "9"
    },

    {
        question: "8 - 2 = ؟",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },

    {
        question: "7 + 2 = ؟",
        options: ["8", "9", "10", "11"],
        answer: "9"
    },

    {
        question: "9 - 6 = ؟",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },

    {
        question: "3 + 6 = ؟",
        options: ["7", "8", "9", "10"],
        answer: "9"
    },

    {
        question: "10 - 5 = ؟",
        options: ["3", "4", "5", "6"],
        answer: "5"
    }

];


const level2Questions = [

    {
        question: "2 × 3 = ؟",
        options: ["4", "5", "6", "7"],
        answer: "6"
    },

    {
        question: "4 × 2 = ؟",
        options: ["6", "8", "10", "12"],
        answer: "8"
    },

    {
        question: "5 × 3 = ؟",
        options: ["12", "15", "18", "20"],
        answer: "15"
    },

    {
        question: "6 × 4 = ؟",
        options: ["20", "22", "24", "26"],
        answer: "24"
    },

    {
        question: "7 × 3 = ؟",
        options: ["18", "20", "21", "24"],
        answer: "21"
    },

    {
        question: "8 × 2 = ؟",
        options: ["14", "16", "18", "20"],
        answer: "16"
    },

    {
        question: "9 × 3 = ؟",
        options: ["24", "27", "30", "32"],
        answer: "27"
    },

    {
        question: "6 × 5 = ؟",
        options: ["25", "30", "35", "40"],
        answer: "30"
    },

    {
        question: "8 × 4 = ؟",
        options: ["28", "30", "32", "36"],
        answer: "32"
    },

    {
        question: "9 × 5 = ؟",
        options: ["40", "45", "50", "55"],
        answer: "45"
    }

];


const level3Questions = [

    {
        question: "5 × 50 = ؟",
        options: ["150", "200", "250", "300"],
        answer: "250"
    },

    {
        question: "12 + X = 30 | X = ؟",
        options: ["14", "16", "18", "20"],
        answer: "18"
    },

    {
        question: "45 ÷ X = 9 | X = ؟",
        options: ["3", "5", "7", "9"],
        answer: "5"
    },

    {
        question: "(3 × 4) + X = 20 | X = ؟",
        options: ["6", "8", "10", "12"],
        answer: "8"
    },

    {
        question: "(7 × X) + 3 = 31 | X = ؟",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },

    {
        question: "(X ÷ 2) - 5 = 10 | X = ؟",
        options: ["20", "25", "30", "35"],
        answer: "30"
    },

    {
        question: "X × X = 144 | X = ؟",
        options: ["11", "12", "13", "14"],
        answer: "12"
    },

    {
        question: "X + Y = 15 | X - Y = 5 | X = ؟",
        options: ["5", "8", "10", "12"],
        answer: "10"
    },

    {
        question: "أكمل النمط: 2، 4، 8، 16، X | X = ؟",
        options: ["20", "24", "30", "32"],
        answer: "32"
    },

    {
        question: "ثلاثة أعداد متتالية مجموعها 30، ما هو العدد الأكبر؟",
        options: ["9", "10", "11", "12"],
        answer: "11"
    }

];


const level4Questions = [

    {
        question: "8 + 7 = ؟",
        options: ["13", "14", "15", "16"],
        answer: "15"
    },

    {
        question: "9 × 4 = ؟",
        options: ["32", "34", "36", "38"],
        answer: "36"
    },

    {
        question: "25 - X = 10 | X = ؟",
        options: ["10", "12", "15", "20"],
        answer: "15"
    },

    {
        question: "6 × X = 42 | X = ؟",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },

    {
        question: "30 ÷ 5 + 4 = ؟",
        options: ["8", "9", "10", "11"],
        answer: "10"
    },

    {
        question: "X + 8 = 20 | X = ؟",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },

    {
        question: "7 × 8 = ؟",
        options: ["54", "56", "58", "60"],
        answer: "56"
    },

    {
        question: "40 - 17 = ؟",
        options: ["21", "22", "23", "24"],
        answer: "23"
    },

    {
        question: "X × 3 = 27 | X = ؟",
        options: ["7", "8", "9", "10"],
        answer: "9"
    },

    {
        question: "2، 6، 18، 54، X | X = ؟",
        options: ["108", "126", "162", "216"],
        answer: "162"
    }

];


/* ========================================
   SELECT LEVEL
======================================== */

let questions;

if (currentLevel === 1) {

    questions = level1Questions;

} else if (currentLevel === 2) {

    questions = level2Questions;

} else if (currentLevel === 3) {

    questions = level3Questions;

} else {

    questions = level4Questions;

}


/* ========================================
   ELEMENTS
======================================== */

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const nextButton =
    document.getElementById("nextBtn");

const timerElement =
    document.getElementById("timer");

const questionNumberElement =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const timerBox =
    document.getElementById("timerBox");

const gameAudio =
    document.getElementById("gameAudio");


/* ========================================
   TIMER
======================================== */

let timeLeft = 15;

let timer;


/* ========================================
   AUDIO
======================================== */

let audioStarted = false;


function startAudio() {

    if (!gameAudio || audioStarted) {
        return;
    }

    gameAudio.volume = 0.5;

    gameAudio.play()
        .then(function () {
            audioStarted = true;
        })
        .catch(function () {
            // المتصفح ممكن يمنع الصوت قبل أول ضغطة
        });
}


document.addEventListener(
    "click",
    startAudio,
    { once: true }
);


/* ========================================
   SHOW QUESTION
======================================== */

function showQuestion() {

    clearInterval(timer);


    if (currentQuestionIndex >= questions.length) {

        finishLevel();

        return;
    }


    /*
      حفظ مكان اللاعب مباشرة
      حتى لو أغلق الصفحة.
    */

    localStorage.setItem(
        "currentQuestion",
        currentQuestionIndex
    );

    localStorage.setItem(
        "score",
        score
    );

    localStorage.setItem(
        "selectedLevel",
        currentLevel
    );


    timeLeft = 15;

    timerElement.textContent = timeLeft;

    timerBox.style.setProperty(
        "--progress",
        "100%"
    );

    timerBox.classList.remove("warning");


    const currentQuestion =
        questions[currentQuestionIndex];


    questionElement.textContent =
        currentQuestion.question;


    questionElement.style.direction = "auto";

    questionElement.style.unicodeBidi =
        "plaintext";


    questionNumberElement.textContent =
        `${currentQuestionIndex + 1} / ${questions.length}`;


    scoreElement.textContent = score;


    optionsElement.innerHTML = "";


    nextButton.style.display = "none";


    currentQuestion.options.forEach(
        function (option) {

            const button =
                document.createElement("button");

            button.classList.add("option-btn");

            button.textContent = option;

            button.style.direction = "ltr";


            button.addEventListener(
                "click",
                function () {

                    startAudio();

                    selectAnswer(
                        button,
                        option
                    );

                }
            );


            optionsElement.appendChild(button);

        }
    );


    startTimer();
}


/* ========================================
   SELECT ANSWER
======================================== */

function selectAnswer(
    button,
    selectedAnswer
) {

    clearInterval(timer);


    const currentQuestion =
        questions[currentQuestionIndex];


    const allButtons =
        document.querySelectorAll(".option-btn");


    allButtons.forEach(
        function (btn) {

            btn.disabled = true;

        }
    );


    if (
        selectedAnswer ===
        currentQuestion.answer
    ) {

        button.classList.add("correct");

        score++;

        scoreElement.textContent = score;

        localStorage.setItem(
            "score",
            score
        );

    } else {

        button.classList.add("wrong");

    }


    nextButton.style.display = "block";
}


/* ========================================
   TIMER
======================================== */

function startTimer() {

    timer = setInterval(
        function () {

            timeLeft--;

            timerElement.textContent =
                timeLeft;


            const progress =
                (timeLeft / 15) * 100;


            timerBox.style.setProperty(
                "--progress",
                progress + "%"
            );


            if (timeLeft <= 5) {

                timerBox.classList.add(
                    "warning"
                );

            }


            if (timeLeft <= 0) {

                clearInterval(timer);

                timeIsUp();

            }

        },
        1000
    );
}


/* ========================================
   TIME IS UP
======================================== */

function timeIsUp() {

    /*
      مهم:
      ما منظهر الجواب الصحيح.
    */

    const allButtons =
        document.querySelectorAll(
            ".option-btn"
        );


    allButtons.forEach(
        function (btn) {

            btn.disabled = true;

        }
    );


    /*
      ننتقل تلقائياً للسؤال التالي
      بعد انتهاء الوقت.
    */

    setTimeout(
        function () {

            goToNextQuestion();

        },
        400
    );
}


/* ========================================
   NEXT QUESTION
======================================== */

nextButton.addEventListener(
    "click",
    function () {

        startAudio();

        goToNextQuestion();

    }
);


function goToNextQuestion() {

    clearInterval(timer);


    currentQuestionIndex++;


    localStorage.setItem(
        "currentQuestion",
        currentQuestionIndex
    );


    localStorage.setItem(
        "score",
        score
    );


    if (
        currentQuestionIndex <
        questions.length
    ) {

        showQuestion();

    } else {

        finishLevel();

    }
}


/* ========================================
   FINISH LEVEL
======================================== */

function finishLevel() {

    clearInterval(timer);


    const unlockedLevel =
        Number(
            localStorage.getItem(
                "currentLevel"
            ) || "1"
        );


    /*
      إذا خلص المرحلة الحالية،
      نفتح المرحلة التالية.
    */

    if (currentLevel >= unlockedLevel) {

        if (currentLevel < 4) {

            localStorage.setItem(
                "currentLevel",
                currentLevel + 1
            );

        } else {

            // كل المراحل خلصت
            localStorage.setItem(
                "currentLevel",
                "4"
            );

        }

    }


    /*
      نحذف تقدم المرحلة
      لأن اللاعب خلصها.
    */

    localStorage.removeItem(
        "currentQuestion"
    );

    localStorage.removeItem(
        "score"
    );

    localStorage.removeItem(
        "selectedLevel"
    );


    questionElement.textContent =
        "🎉 انتهت المرحلة!";


    questionElement.style.direction =
        "rtl";


    optionsElement.innerHTML = `

        <div class="final-score">

            <h2>أحسنت! 🏆</h2>

            <p>
                نتيجتك:
                ${score} / ${questions.length}
            </p>

        </div>

    `;


    nextButton.style.display = "block";

    nextButton.textContent =
        "العودة للمراحل";


    nextButton.onclick = function () {

        window.location.href =
            "levels.html";

    };


    timerElement.textContent = "✓";

    questionNumberElement.textContent =
        "انتهت المرحلة";


    /*
      إيقاف الصوت عند النهاية
    */

    if (gameAudio) {

        gameAudio.pause();

    }

}