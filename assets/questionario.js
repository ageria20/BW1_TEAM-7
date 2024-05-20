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

const timer = document.getElementById("timer");
const answersBtn = document.querySelectorAll(".answer");
const answersContainer = document.querySelectorAll(".answersContainer");
let countdown = 60; // Setto il timer a 60 secondi
let interval; // Variabile per il time
let questionNumber = 0;
let totalAnswer = 0;

let userPoints = 0; // Punteggio del giocatore

const startCountdown = () => {
  countdown = 60;
  interval = setInterval(() => {
    countdown--;
    updateDisplay(countdown);
    updateCircleProgress();
    if (countdown === 0) {
      clearInterval(interval);
      timerFinished();
      endTest();
    }
  }, 1000);
};

const updateDisplay = (countdown) => {
  const minutes = Math.floor(countdown / 60);
  const remainingSeconds = countdown % 60;
  const timer = document.getElementById("timer");
  timer.innerHTML = "seconds" + remainingSeconds + "remaining";
};

const timerFinished = () => {
  alert("Il tempo per questa domanda è scaduto!");
};

function updateCircleProgress() {
  const progress = (countdown / 60) * 346;
  const circleProgress = document.querySelector(".circle-progress"); // Ensure circleProgress is defined
  circleProgress.style.strokeDashoffset = 346 - progress;
}

const endTest = () => {
  alert("Test completato!");
  // qui dovrei mettere il punteggio finale del giocatore
  // e dovrei fare vedere tutto lo storico delle risposte del giocatore
};

startCountdown();
