const questions = [
    {
        question: "What's the full meaning of HTML",
        answers: [
            {text: "Hype Text Markup Load", correct: false},
            {text: "Hyper Test Markup Language", correct: false},
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hyper Text Makeup Language", correct: false},
        ]
    },
     {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: "true"},
            { text: "Bhutan", correct: "false"},
            { text: "Nepal", correct: "false"},
            { text: "Shri Lanka", correct: "false"}
        ]
    }, 
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: "false"},
            { text: "Gobi", correct: "false"},
            { text: "Sahara", correct: "false"},
            { text: "Antarctica", correct: "true"}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: "false"},
            { text: "Australia", correct: "true"},
            { text: "Artic", correct: "false"},
            { text: "Africa", correct: "false"}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
}

function showQuestions(){
    let currentQuestion = questions[currentQuestionIndex];
    questionElement. innerHTML = currentQuestion.question;
    currentQuestion.answers.forEach(answers => {
        document.createElement("button");
    })
}

startQuiz();
showQuestions();


