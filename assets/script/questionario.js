const questionsEasy = [
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

const questionsMedium = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is known as &quot;the brain&quot; of the Computer?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Motherboard", "Graphics Processing Unit", "Keyboard"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Whistler was the codename of this Microsoft Operating System.",
    correct_answer: "Windows XP",
    incorrect_answers: ["Windows 2000", "Windows 7", "Windows 95"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
    correct_answer: "Taiwan",
    incorrect_answers: [
      "United States",
      "Germany",
      "China (People&'s Republic of)",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The first computer bug was formed by faulty wires.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "marquee&gt/marquee&gt;",
    incorrect_answers: [
      "scroll&gt;/scroll&gt;",
      "move&gt;/move&gt;",
      "slide&gt;/slide&gt;",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Laserjet and inkjet printers are both examples of what type of printer?",
    correct_answer: "Non-impact printer",
    incorrect_answers: [
      "Impact printer",
      "Daisywheel printer",
      "Dot matrix printer",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The common software-programming acronym &quot;I18N&quot; comes from the term &quot;Interlocalization&quot;.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];

const questionsHard = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: [
      "Super Dense Coding",
      "Quantum Entanglement",
      "Quantum Programming",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "According to DeMorgan&#039;s Theorem, the Boolean expression (AB) is equivalent to:",
    correct_answer: "A + B;",
    incorrect_answers: ["AB + BA", "A;B", "AB + AB"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const questionNumberElement = document.getElementById("questionNumber");
  const questionElement = document.getElementById("question");
  const answerList = document.getElementById("answerList");
  const startQuizButton = document.getElementById("startQuizButton");
  const timer = document.getElementById("timer");
  timer.style.display = "none";

  startQuizButton.addEventListener("click", function () {
    const difficultySelect = document.getElementById("difficultySelect");
    const selectedDifficulty = difficultySelect.value;
    const numQuestionsInput = document.getElementById("numQuestions");
    const numQuestions = parseInt(numQuestionsInput.value, 10);

    if (selectedDifficulty === "easy") {
      selectedQuestions = questionsEasy.slice(0, numQuestions);
    } else if (selectedDifficulty === "medium") {
      selectedQuestions = questionsMedium.slice(0, numQuestions);
    } else if (selectedDifficulty === "hard") {
      selectedQuestions = questionsHard.slice(0, numQuestions);
    }

    document.getElementById("selectChoice").style.display = "none";
    timer.style.display = "block";
    startQuiz(selectedQuestions);
  });

  function startQuiz(questions) {
    let countdown; // Imposta il timer a 60 secondi
    let interval; // Variabile per il timer
    let currentQuestionIndex = 0; // Indice della domanda corrente
    let score = 0; // Punteggio del giocatore
    let userAnswers = []; // Storico delle risposte dell'utente
    let selectedQuestions = []; // Domande selezionate per il quiz

    const startCountdown = () => {
      countdown = 60;
      updateDisplay(countdown); // Aggiorna subito il display del timer
      updateCircleProgress(); // Aggiorna subito il cerchio di progresso

      interval = setInterval(() => {
        countdown--;
        updateDisplay(countdown); // Aggiorna il display del timer
        updateCircleProgress(); // Aggiorna il cerchio di progresso
        if (countdown <= 0) {
          clearInterval(interval); // Ferma il timer quando il countdown arriva a 0
          loadNextQuestion(); // Carica la prossima domanda
        }
      }, 1000);
    };

    const updateDisplay = (countdown) => {
      const remainingSeconds = countdown % 61;
      const timer = document.getElementById("textTimer");
      timer.innerHTML = `seconds <span class="remainingSeconds">${remainingSeconds} </span>remaining`;
      timer.style.color = "white";
    };

    function updateCircleProgress() {
      const progress = (countdown / 61) * 351;
      const circleProgress = document.querySelector("#circle-progress");
      circleProgress.style.strokeDashoffset = 351 - progress;
    }

    function loadNextQuestion() {
      currentQuestionIndex++; // Incrementa l'indice della domanda corrente
      if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Carica la prossima domanda se ce ne sono ancora
      } else {
        endTest(); // Termina il quiz se non ci sono più domande
      }
    }

    function loadQuestion() {
      const question = questions[currentQuestionIndex];
      questionElement.textContent = question.question; // Visualizza la domanda corrente
      questionNumberElement.textContent = `QUESTION  ${
        currentQuestionIndex + 1
      }  /  ${questions.length}`;

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      const answers = [question.correct_answer, ...question.incorrect_answers];
      shuffleArray(answers); // Mescola l'array delle risposte

      answerList.innerHTML = ""; // Pulisce le risposte precedenti

      answers.forEach((answer) => {
        const li = document.createElement("li");
        li.className = "answer";
        li.dataset.answer = answer;
        li.textContent = answer;
        li.onclick = () => selectAnswer(answer); // Assegna l'evento click alla risposta
        answerList.appendChild(li);
      });

      startCountdown(); // Avvia il timer per la nuova domanda
    }

    function selectAnswer(selectedAnswer) {
      const question = questions[currentQuestionIndex];
      const correctAnswer = question.correct_answer;

      userAnswers.push({
        question: question.question,
        selectedAnswer,
        correctAnswer,
        isCorrect: selectedAnswer === correctAnswer,
      });

      if (selectedAnswer === correctAnswer) {
        score++;
      }

      const answerButtons = document.querySelectorAll(".answer");
      answerButtons.forEach((button) => {
        button.classList.remove("selected", "correct", "incorrect");
        if (button.dataset.answer === correctAnswer) {
          button.classList.add("correct");
        }
        if (
          button.dataset.answer === selectedAnswer &&
          selectedAnswer !== correctAnswer
        ) {
          button.classList.add("incorrect");
        }
      });

      const selectedButton = answerList.querySelector(
        `li[data-answer="${selectedAnswer}"]`
      );
      selectedButton.classList.add("selected");

      clearInterval(interval); // Ferma il timer corrente

      setTimeout(() => {
        loadNextQuestion(); // Carica la prossima domanda
      }, 400);
    }

    function endTest() {
      console.log("User Answers:", userAnswers); // Visualizza le risposte dell'utente nel console log
      localStorage.setItem("score", score); // Salva il punteggio in localStorage
      localStorage.setItem("totalQuestions", questions.length); // Salva il numero di domande totali in localStorage
      localStorage.setItem("currentQuestionIndex", currentQuestionIndex); // Salva l'indice della domanda corrente in localStorage
      window.location.href = "results.html"; // Reindirizza alla pagina dei risultati
    }

    loadQuestion(); // Inizia il quiz caricando la prima domanda
  }
});
