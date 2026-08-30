// ========================================
// الأسئلة
// ========================================

const questions = [

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


// ========================================
// المتغيرات
// ========================================

let currentQuestionIndex = 0;

let score = 0;

let timeLeft = 15;

let timer;


// ========================================
// عناصر HTML
// ========================================

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


// ========================================
// الصوت
// ========================================

let audioContext;


// تشغيل نظام الصوت
function initAudio() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    if (audioContext.state === "suspended") {

        audioContext.resume();

    }
}


// ========================================
// صوت Tick
// ========================================

function playTick() {

    if (!audioContext) {
        return;
    }


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.type = "sine";


    oscillator.frequency.setValueAtTime(
        750,
        audioContext.currentTime
    );


    gain.gain.setValueAtTime(
        0.12,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.08
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.08
    );
}


// ========================================
// عرض السؤال
// ========================================

function showQuestion() {

    // إيقاف أي مؤقت سابق
    clearInterval(timer);


    // تجهيز الصوت
    initAudio();


    // إعادة الوقت
    timeLeft = 15;


    timerElement.textContent =
        timeLeft;


    // إعادة الحلقة إلى 100%
    timerBox.style.setProperty(
        "--progress",
        "100%"
    );


    // إزالة حالة التحذير
    timerBox.classList.remove(
        "warning"
    );


    // السؤال الحالي
    const currentQuestion =
        questions[currentQuestionIndex];


    // عرض السؤال
    questionElement.textContent =
        currentQuestion.question;


    // ⭐ مهم للمعادلات
    // المتصفح سيحدد الاتجاه تلقائيًا:
    // المعادلات = LTR
    // العربي = RTL

    questionElement.style.direction =
        "auto";


    questionElement.style.unicodeBidi =
        "plaintext";


    // رقم السؤال
    questionNumberElement.textContent =
        `${currentQuestionIndex + 1} / ${questions.length}`;


    // حذف الخيارات القديمة
    optionsElement.innerHTML = "";


    // إخفاء Next
    nextButton.style.display =
        "none";


    // إنشاء الخيارات
    currentQuestion.options.forEach(
        function(option) {

            const button =
                document.createElement("button");


            button.classList.add(
                "option-btn"
            );


            button.textContent =
                option;


            // اتجاه الخيارات الرياضية LTR
            button.style.direction =
                "ltr";


            button.addEventListener(
                "click",
                function() {

                    selectAnswer(
                        button,
                        option
                    );

                }
            );


            optionsElement.appendChild(
                button
            );

        }
    );


    // تشغيل المؤقت
    startTimer();
}


// ========================================
// اختيار الإجابة
// ========================================

function selectAnswer(
    button,
    selectedAnswer
) {

    // إيقاف المؤقت
    clearInterval(timer);


    const currentQuestion =
        questions[currentQuestionIndex];


    const allButtons =
        document.querySelectorAll(
            ".option-btn"
        );


    // منع اختيار أكثر من إجابة
    allButtons.forEach(
        function(btn) {

            btn.disabled = true;

        }
    );


    // الإجابة الصحيحة
    if (
        selectedAnswer ===
        currentQuestion.answer
    ) {

        button.classList.add(
            "correct"
        );


        score++;


        scoreElement.textContent =
            score;

    }

    // الإجابة الخاطئة
    else {

        button.classList.add(
            "wrong"
        );


        // إظهار الإجابة الصحيحة
        allButtons.forEach(
            function(btn) {

                if (
                    btn.textContent ===
                    currentQuestion.answer
                ) {

                    btn.classList.add(
                        "correct"
                    );

                }

            }
        );

    }


    // إظهار Next
    nextButton.style.display =
        "block";
}


// ========================================
// المؤقت
// ========================================

function startTimer() {

    timer = setInterval(
        function() {

            timeLeft--;


            // عرض الوقت
            timerElement.textContent =
                timeLeft;


            // صوت Tick
            playTick();


            // حساب نسبة الوقت
            const progress =
                (timeLeft / 15) * 100;


            // تحديث الحلقة
            timerBox.style.setProperty(
                "--progress",
                progress + "%"
            );


            // آخر 5 ثواني
            if (timeLeft <= 5) {

                timerBox.classList.add(
                    "warning"
                );

            }


            // انتهى الوقت
            if (timeLeft <= 0) {

                clearInterval(timer);

                timeIsUp();

            }

        },
        1000
    );
}


// ========================================
// انتهاء الوقت
// ========================================

function timeIsUp() {

    const currentQuestion =
        questions[currentQuestionIndex];


    const allButtons =
        document.querySelectorAll(
            ".option-btn"
        );


    // تعطيل الخيارات
    allButtons.forEach(
        function(btn) {

            btn.disabled = true;

        }
    );


    // إظهار الإجابة الصحيحة
    allButtons.forEach(
        function(btn) {

            if (
                btn.textContent ===
                currentQuestion.answer
            ) {

                btn.classList.add(
                    "correct"
                );

            }

        }
    );


    // إظهار Next
    nextButton.style.display =
        "block";
}


// ========================================
// زر Next
// ========================================

nextButton.addEventListener(
    "click",
    function() {

        currentQuestionIndex++;


        if (
            currentQuestionIndex <
            questions.length
        ) {

            showQuestion();

        }

        else {

            endGame();

        }

    }
);


// ========================================
// نهاية اللعبة
// ========================================

function endGame() {

    clearInterval(timer);


    questionElement.textContent =
        "🎉 انتهت اللعبة!";


    questionElement.style.direction =
        "rtl";


    optionsElement.innerHTML = `
        <div class="final-score">
            نتيجتك: ${score} / ${questions.length}
        </div>
    `;


    nextButton.style.display =
        "none";


    timerElement.textContent =
        "✓";


    questionNumberElement.textContent =
        "Game Over";
}


// ========================================
// تشغيل اللعبة
// ========================================

showQuestion();