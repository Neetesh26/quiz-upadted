const questions = [
  {
    question: "which is the largest animal in the world?",
    answers: [
      { text: "shark", correct: false },
      { text: "blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "girrafe", correct: false },
    ],
  },
  {
    question: "Which is the hardest mineral in the world? ",
    answers: [
      { text: "west", correct: false },
      { text: "north", correct: false },
      { text: "east", correct: true },
      { text: "south", correct: false },
    ],
  },
  {
    question: " How many states are there in India?",
    answers: [
      { text: "29", correct: false },
      { text: "27", correct: false },
      { text: "24", correct: false },
      { text: "28", correct: true },
    ],
  },
  {
    question: " Which city is the capital city of India?",
    answers: [
      { text: "New Delhi", correct: true },
      { text: "jaipur", correct: false },
      { text: "sagar", correct: false },
      { text: "bhopal", correct: false },
    ],
  },
  {
    question: " Which is the smallest state of India?",
    answers: [
      { text: "goa", correct: true },
      { text: "jaipur", correct: false },
      { text: "banglore", correct: false },
      { text: "sagar", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      //  baground color true or false
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
console.log(typeof questions);
console.log(typeof appendChild);
console.log(typeof dataset);
console.log(typeof Array);
