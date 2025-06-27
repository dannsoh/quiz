const questions = [
    {
        question: "Quel langage est principalement utilisé pour le développement web côté client ?",
        options: ["JavaScript", "PHP", "Python", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Quel est le bon moyen de déclarer une variable en JavaScript ?",
        options: ["var x;", "declare x;", "variable x;", "let x;"],
        answer: "var x;"
    },
    {
        question: "Quel langage est utilisé pour styliser les pages web ?",
        options: ["HTML", "CSS", "JavaScript", "XML"],
        answer: "CSS"
    },
    {
        question: "Quelle méthode est utilisée pour ajouter un élément à un tableau en JavaScript ?",
        options: ["push()", "add()", "append()", "insert()"],
        answer: "push()"
    },
    {
        question: "Quel est le bon moyen de définir une fonction en JavaScript ?",
        options: ["function myFunction() {}", "def myFunction() {}", "function: myFunction() {}", "myFunction() = function() {}"],
        answer: "function myFunction() {}"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('startBtn').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.textContent = option;
        button.className = 'option';
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Votre score : ${score} sur ${questions.length}</h2>`;
    resultContainer.style.display = 'block';
}