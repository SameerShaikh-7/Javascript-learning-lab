
// QUESTION DATA 
let allQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is mainly used for styling web pages?",
        options: [
            "HTML",
            "JavaScript",
            "CSS",
            "Python"
        ],
        answer: 2
    },
    {
        question: "Which symbol is used to write comments in JavaScript?",
        options: [
            "//",
            "<!-- -->",
            "#",
            "/* */"
        ],
        answer: 0
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        answer: 3
    },
    {
        question: "What is the correct file extension for JavaScript?",
        options: [
            ".java",
            ".js",
            ".script",
            ".jsx"
        ],
        answer: 1
    },
    {
        question: "Which function is used to print output in JavaScript console?",
        options: [
            "print()",
            "log()",
            "console.log()",
            "write()"
        ],
        answer: 2
    },
    {
        question: "Which data type is used to store true or false values?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Object"
        ],
        answer: 2
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Color Style Sheet",
            "Creative Style System",
            "Cascading Style Sheets",
            "Computer Style Sheet"
        ],
        answer: 2
    },
    {
        question: "Which loop is used when we know the number of iterations?",
        options: [
            "while loop",
            "do-while loop",
            "for loop",
            "foreach loop"
        ],
        answer: 2
    },
    {
        question: "Which operator is used to compare values in JavaScript?",
        options: [
            "=",
            "==",
            "===",
            "Both == and ==="
        ],
        answer: 3
    }
];



// DOM ELEMENTS
const question = document.getElementById('question');
const index = document.getElementById('index');
const timer = document.getElementById('timer');
const options = document.querySelectorAll('span');
const nextBtn = document.getElementById('nextBtn');

// VARIABLES
let currentIndex = 0;
let second = 60;
let timerInterval = null;
let score = 0;

// LOAD QUESTION
function loadQuestion() {

    // QUIZ END
    if (currentIndex >= allQuestions.length) {
        clearInterval(timerInterval);
        timer.textContent = "00:00";

  alert(`${allQuestions.length}/${score}`);

    }

    // TIMER RESET
    clearInterval(timerInterval);
    second = 60;
    startTimer();

    // QUESTION NUMBER
    index.textContent = currentIndex + 1;

    // CURRENT QUESTION
    let currentQuestion = allQuestions[currentIndex];

    // QUESTION TEXT
    question.textContent = currentQuestion.question;

    // OPTIONS TEXT
    options.forEach((span, i) => {
        span.textContent = currentQuestion.options[i];
    });

    // BUTTON TEXT
    if (currentIndex === allQuestions.length - 1) {
        nextBtn.textContent = "Submit";
        nextBtn.style.backgroundColor = "green";
    } else {
        nextBtn.textContent = "Next";
        nextBtn.style.backgroundColor = "";
    }
}

// TIMER FUNCTION
function startTimer() {
    timerInterval = setInterval(() => {
        second--;

        if (second === 0) {
            nextQuestion();
        }

        let ss = second < 10 ? `0${second}` : second;
        timer.textContent = `00:${ss}`;
    }, 1000);
}


// NEXT QUESTION + SCORE
function nextQuestion() {

    // CORRECT ANSWER
    let correctAnswer = allQuestions[currentIndex].answer;

    // CHECK USER ANSWER
    options.forEach((span, i) => {
        let radio = span.previousElementSibling;

        if (radio.checked && i === correctAnswer) {
            score++;
        }
        radio.checked = false; // reset
    });

    currentIndex++;
    loadQuestion();
}

// BUTTON CLICK
nextBtn.addEventListener('click', nextQuestion);

// START QUIZ
loadQuestion();
