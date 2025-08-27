const questions = [
    {
        question: "What's the full meaning of HTML",
        answers: [
            {text: "Hype Text Markup Load", correct: "false"},
            {text: "Hyper Test Markup Language", correct: "false"},
            {text: "Hyper Text Markup Language", correct: "true"},
            {text: "Hyper Text Makeup Language", correct: "false"}
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
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerButton.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", selectanswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectanswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";

    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Congratulations! You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();




