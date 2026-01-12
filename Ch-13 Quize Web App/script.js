let allQuestions = [
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of above"],
        answer: 3
    },
    {
        question: "What will typeof null return?",
        options: ["null", "object", "undefiend", "number"],
        answer: 1
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convet()", "JSON.toObject()"],
        answer: 1
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["function", "def", "fun", "method"],
        answer: 0
    }
];

const question = document.getElementById('question');
const index = document.getElementById('index');
const options = document.querySelectorAll('span');
const nextBtn = document.getElementById('nextBtn');
const timer = document.getElementById('timer');

let second = 60;
let timerInterval = null;

let currentIndex = 0
function loadQuestion() {

    // 5 >= 5
    if (currentIndex >= allQuestions.length) {
        clearInterval(timerInterval);
        alert("Quize Submitted...")
        timer.textContent = "00:00";
        return;
    }

    startTimer();

    index.textContent = currentIndex + 1;

    const currentQuestion = allQuestions[currentIndex];

    question.textContent = currentQuestion.question;

    options.forEach((span, index) => {
        span.textContent = currentQuestion.options[index];
    })

    if (currentIndex === 4) {
        nextBtn.textContent = "Submit";
        nextBtn.style.backgroundColor = "green";
    }
}

nextBtn.addEventListener('click', nextQuestion);

function startTimer() {
    timerInterval = setInterval(() => {
        second--;

        if (second == 0) {
            nextQuestion();
        }

        let ss = second < 10 ? `0${second}` : second;
        timer.textContent = `00:${ss}`;
    }, 1000);
}

function nextQuestion() {
    clearInterval(timerInterval);
    second = 60;
    currentIndex++;
    loadQuestion();
}

loadQuestion();