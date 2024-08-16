// Initial array of quiz questions, options, and answers
let quizData = [
    {
        question: "What is the result of 45 + 5?",
        options: ["15", "105", "5", "50"],
        answer: 3
    },
    {
        question: "What is the result of 20 - 18?",
        options: ["2", "28", "18", "8"],
        answer: 0
    },
    {
        question: "What is the result of 15 / 5?",
        options: ["5", "3", "45", "12"],
        answer: 1
    },
    {
        question: "What is the result of 21 % 4?",
        options: ["1", "2", "3", "4"],
        answer: 0
    },
    {
        question: "What is the result of 3 + 4 * 2?",
        options: ["14", "11", "10", "7"],
        answer: 1 
    },
    {
        question: "What is the result of '5' + 5?",
        options: ["10", "55", "NaN", "5"],
        answer: 1 
    },
    {
        question: "What is the result of 10--?",
        options: ["9", "10", "Syntax Error", "11"],
        answer: 0
    },
    {
        question: "What is the result of 4++?",
        options: ["9", "10", "5", "11"],
        answer: 2
    },
    {
        question: "What is the result of 5 += 3?",
        options: ["8", "5", "3", "15"],
        answer: 0
    },
    {
        question: "What is the result of 10 -= 4?",
        options: ["6", "14", "10", "4"],
        answer: 0
    },

    {
        question: "What is the type of undefined?",
        options: ["'string'", "'object'", "'undefined'", "'boolean'"],
        answer: 2 
    },
    {
        question: "What will be the result of 5 == '5';",
        options: ["true", "false", "NaN", "undefined"],
        answer: 0 
    },
    {
        question: "What is the value of a after: let a = 4; a *= 6;",
        options: ["5", "6", "24", "3"],
        answer: 2
    },
    {
        question: "What is the type of an object {}?",
        options: ["'array'", "'object'", "'null'", "'undefined'"],
        answer: 1 
    },
    {
    question: "What is the result of `10 + '20'`;",
    options:[ "'30'", "'1030'", "'1020'", "'10'"],
    answer:2    
    },
    { 
    question: "What is the result of true && false?",
    options: [ "true",  "false", "undefined" ,"null"],
    answer: 1
    }
];
quizData.push({
    question: "What is the result of 2 + '2'?",
    options: ["'22'", "4", "NaN", "error"],
    answer: 0 
});

// Remove the last question using pop method
quizData.pop();

// Insert a new question at index 3 using splice method
quizData.splice(3, 0, {
    question: "What will be the value of b after: let b = 7; b += 2;",
    options: ["9", "7", "2", "undefined"],
    answer: 0 // 9 (Addition assignment)
});

// Create a new array of question texts using map method
let questionTexts = quizData.map(q => q.question);

// Filter questions that have the word 'type' in them using filter method
let typeQuestions = quizData.filter(q => q.question.includes('type'));

// Calculate the total number of points using reduce method
let totalPoints = quizData.reduce((sum, q) => sum + 1, 0);

let currentQuestionIndex = 0; 
let score = 0; 

// Function to load the current question and options
function loadQuestion() {
    let currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("btn0").textContent = currentQuestion.options[0];
    document.getElementById("btn1").textContent = currentQuestion.options[1];
    document.getElementById("btn2").textContent = currentQuestion.options[2];
    document.getElementById("btn3").textContent = currentQuestion.options[3];
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
}

// Function to check the selected answer
function checkAnswer(selectedOptionIndex) {
    let currentQuestion = quizData[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.answer) {
        score++; 
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Wrong! The correct answer is " + currentQuestion.options[currentQuestion.answer];
    }
    document.getElementById("next-btn").style.display = "block";
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++; 
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(); 
    } else {
        showFinalScore(); 
    }
}

function showFinalScore() {
    document.getElementById("quiz-container").innerHTML = "<h2>Your final score is " + score + " out of " + totalPoints + "</h2>";
}

loadQuestion();