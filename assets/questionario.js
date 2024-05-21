const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const answersContainer = document.querySelector(".answersContainer");
let countdown = 60; // Imposta il timer a 60 secondi
let interval; // Variabile per il timer
let currentQuestionIndex = 0; // Indice della domanda corrente
let score = 0; // Punteggio del giocatore
let userAnswers = []; // Storico delle risposte dell'utente

const startCountdown = () => {
  countdown = 61;
  interval = setInterval(() => {
    countdown--;
    updateDisplay(countdown);
    updateCircleProgress();
    if (countdown === 0) {
      clearInterval(interval);
      // timerFinished();
    }
  }, 1000);
};

const updateDisplay = (countdown) => {
  const minutes = Math.floor(countdown / 61);
  const remainingSeconds = countdown % 61;
  const timer = document.getElementById("textTimer");
  timer.innerText = `
  seconds 
  ${remainingSeconds} 
   remaining`;
  timer.style.color = "white";
};

const timerFinished = () => {
  alert("Il tempo per questa domanda è scaduto!");
  loadNextQuestion();
};

function updateCircleProgress() {
  const progress = (countdown / 61) * 346;
  const circleProgress = document.querySelector("#circle-progress"); // Ensure circleProgress is defined
  circleProgress.style.strokeDashoffset = 346 - progress;
}

//const endTest = () => {
//alert("Test completato!");
// qui dovrei mettere il punteggio finale del giocatore
// e dovrei fare vedere tutto lo storico delle risposte del giocatore
//};

//startCountdown();

// Funzione per caricare la prossima domanda
function loadNextQuestion() {
  currentQuestionIndex++; // Incrementa l'indice della domanda corrente
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endTest();
  }
}
// Funzione per caricare una domanda
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  // Mescola le risposte
  const answers = [question.correct_answer, ...question.incorrect_answers];
  shuffleArray(answers);

  // Aggiorna i pulsanti delle risposte
  answerButtons.forEach((button, index) => {
    if (answers[index]) {
      button.textContent = answers[index];
      button.style.display = "block";
      button.onclick = () => selectAnswer(answers[index]);
    } else {
      button.style.display = "none";
    }
  });

  startCountdown();
}
// Funzione per mescolare un array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Funzione per gestire la selezione della risposta
function selectAnswer(selectedAnswer) {
  const question = questions[currentQuestionIndex];
  const correctAnswer = question.correct_answer;

  // Aggiungi la risposta dell'utente all'array userAnswers
  userAnswers.push({
    question: question.question,
    selectedAnswer,
    correctAnswer,
    isCorrect: selectedAnswer === correctAnswer,
  });

  // Incrementa il punteggio se la risposta è corretta
  if (selectedAnswer === correctAnswer) {
    score++;
  }

  // Carica la prossima domanda
  clearInterval(interval); // Ferma il timer corrente
  loadNextQuestion();
}

// Funzione per terminare il quiz e mostrare il punteggio finale
function endTest() {
  alert(`Test completato! Il tuo punteggio è: ${score}`);
  console.log("User Answers:", userAnswers);
  // Visualizza il punteggio e le risposte
}

// Inizia il quiz caricando la prima domanda
loadQuestion();