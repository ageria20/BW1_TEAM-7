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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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
document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");
  const questionNumberElement = document.getElementById("questionNumber"); // Seleziona il nuovo elemento
  const questionElement = document.getElementById("question");
  const answerList = document.getElementById("answerList");
  let countdown = 60; // Imposta il timer a 60 secondi
  let interval; // Variabile per il timer
  let currentQuestionIndex = 0; // Indice della domanda corrente
  let score = 0; // Punteggio del giocatore
  let userAnswers = []; // Storico delle risposte dell'utente
  const totalQuestions = questions.length; // Numero di domande totali

  // Funzione per avviare il conto alla rovescia
  const startCountdown = () => {
    countdown = 61; // Imposta il countdown a 60 secondi
    interval = setInterval(() => {
      countdown--;
      updateDisplay(countdown); // Aggiorna il display del timer
      updateCircleProgress(); // Aggiorna il cerchio di progresso
      if (countdown <= 0) {
        clearInterval(interval); // Ferma il timer quando il countdown arriva a 0
        timerFinished(); // Chiama la funzione quando il timer finisce
      }
    }, 1000);
  };

  // Funzione per aggiornare il display del timer
  const updateDisplay = (countdown) => {
    const remainingSeconds = countdown % 61;
    const timer = document.getElementById("textTimer");
    timer.innerHTML = `
    seconds 
    <span class="remainingSeconds">${remainingSeconds} </span>
    remaining`;
    timer.style.color = "white";
  };

  // Funzione chiamata quando il timer finisce
  const timerFinished = () => {
    loadNextQuestion(); // Carica la prossima domanda
  };

  // Funzione per aggiornare il cerchio di progresso
  function updateCircleProgress() {
    const progress = (countdown / 61) * 346;
    const circleProgress = document.querySelector("#circle-progress");
    circleProgress.style.strokeDashoffset = 346 - progress;
  }

  // Funzione per caricare la prossima domanda
  function loadNextQuestion() {
    currentQuestionIndex++; // Incrementa l'indice della domanda corrente
    if (currentQuestionIndex < questions.length) {
      loadQuestion(); // Carica la prossima domanda se ce ne sono ancora
    } else {
      endTest(); // Termina il quiz se non ci sono più domande
    }
  }

  // Funzione per caricare una domanda
  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question; // Visualizza la domanda corrente
    questionNumberElement.textContent = `QUESTION  ${
      currentQuestionIndex + 1
    }  /  ${questions.length}`;

    // Mescola le risposte
    const answers = [question.correct_answer, ...question.incorrect_answers];
    shuffleArray(answers); // Mescola l'array delle risposte

    answerList.innerHTML = ""; // Pulisce le risposte precedenti

    // Crea un elemento <li> per ogni risposta e lo aggiunge alla lista
    answers.forEach((answer, index) => {
      const li = document.createElement("li");
      li.className = "answer";
      li.dataset.answer = answer;
      li.textContent = answer;
      li.onclick = () => selectAnswer(answer); // Assegna l'evento click alla risposta
      answerList.appendChild(li);
    });
    clearInterval(interval);
    startCountdown(); // Avvia il timer per la nuova domanda
  }

  // Funzione per mescolare un array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Funzione per gestire la selezione della risposta
  function selectAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.correct_answer;

    // Aggiunge la risposta dell'utente all'array userAnswers
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

    // Rimuove la classe 'selected' da tutti i bottoni
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button) => {
      button.classList.remove("selected");
    });

    // Aggiunge la classe 'selected' al bottone cliccato
    const selectedButton = answerList.querySelector(
      `li[data-answer="${selectedAnswer}"]`
    );
    selectedButton.classList.add("selected");

    clearInterval(interval); // Ferma il timer corrente

    // Carica la prossima domanda dopo un breve ritardo per mostrare la selezione
    setTimeout(() => {
      loadNextQuestion(); // Carica la prossima domanda
    }, 100);
  }

  // Funzione per terminare il quiz e mostrare il punteggio finale
  function endTest() {
    console.log("User Answers:", userAnswers); // Visualizza le risposte dell'utente nel console log
    localStorage.setItem("score", score); // Salva il punteggio in localStorage
    localStorage.setItem("totalQuestions", totalQuestions); // Salva il numero di domande totali in localStorage
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex); // Salva l'indice della domanda corrente in localStorage
    window.location.href = "results.html"; // Reindirizza alla pagina dei risultati
  }

  // Inizia il quiz caricando la prima domanda
  loadQuestion();
});
