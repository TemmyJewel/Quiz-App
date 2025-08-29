//Array of questions for the quiz
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

//DOM Elements from HTML
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timer = document.getElementById("timer");

// State Variables
let currentQuestionindex = 0;
let score = 0;
let timeLeft = 10;
let timerId;

//Starts Quiz
function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

//Start and update countdown timer
function setTimer(){
    timerId = setInterval(() => {
        timeLeft --;
        timer.innerHTML = timeLeft;

        if(timeLeft <= 0){
        clearInterval(timerId);
        displayCorrectAnswer();
        }
    }, 1000);
}

//Show current question and its answer
function showQuestions(){
    resetState();
    setTimer();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;

    //Display question number + text;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

    // Loop through answers and create a button for each
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;
        answerButton.appendChild(button);

        //  Save whether the button is correct or not as data attribute
        button.dataset.correct = answer.correct;

        //When user clicks button, it calls selectAnswer
        button.addEventListener("click", selectAnswer);
    })

}

// Show which answer was correct after licking r timer runs out
function displayCorrectAnswer(){
        Array.from(answerButton.children).forEach(btn => {
        if(btn.dataset.correct === "true"){
            btn.classList.add("correct");
        }
        btn.disabled = "true";
    }); 

    nextButton.style.display = "block";
}

// Reset UI state for next question
function resetState(){
    timeLeft = 10;
    timer.innerHTML = "10";
    nextButton.style.display = "none";

    // Remove all previous answer button
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

// Handles user selecting an answer
function selectAnswer(e){
    clearInterval(timerId); // Stops time once answer is chosen

    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";

    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }

    displayCorrectAnswer(); //reveal correct answer and also disable buttons
}

// Show final score after last question
function showScore(){
    questionElement.innerHTML = `You score ${score} out of ${questions.length}`;
    answerButton.innerHTML = "";
    nextButton.innerHTML = "Play Again";
}

//Handles Next Button
function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

// Add clcik listener to Next button
nextButton.addEventListener("click", () => {
     if(currentQuestionindex < questions.length){
        handleNextButton();
     }else{
        startQuiz();
     }
});

//Starts quiz once page loads
startQuiz();
