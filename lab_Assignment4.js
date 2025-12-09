const quizTitle = "JavaScript Basics Quiz";

const questions = [
  {
    text: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Tool Multi Language"],
    correctIndex: 0
  },
  {
    text: "Which keyword is used to declare a constant?",
    options: ["let", "var", "const"],
    correctIndex: 2
  },
  {
    text: "Which method prints a message in the browser console?",
    options: ["console.print()", "console.log()", "log.console()"],
    correctIndex: 1
  },
  {
    text: "Which symbol is used for single-line comments?",
    options: ["//", "/* */", "<!-- -->"],
    correctIndex: 0
  },
  {
    text: "Which data type holds true/false values?",
    options: ["number", "boolean", "string"],
    correctIndex: 1
  }
];

function formatQuestion(question, index) {
  let message = `Q${index + 1}: ${question.text}\n`;
  for (let i = 0; i < question.options.length; i++) {
    message += `${i + 1}. ${question.options[i]}\n`;
  }
  message += "\nType the option number:";
  return message;
}

function askQuestion(question, index) {
  const message = formatQuestion(question, index);
  const input = prompt(message);

  if (input === null) return null;

  const choice = parseInt(input.trim(), 10);
  if (Number.isNaN(choice) || choice < 1 || choice > question.options.length) {
    alert("Invalid choice. This question will be treated as incorrect.");
    return false;
  }

  return choice - 1 === question.correctIndex;
}

function playQuiz() {
  alert(`Welcome to ${quizTitle}`);
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const result = askQuestion(questions[i], i);

    if (result === null) {
      alert("You exited the quiz.");
      return;
    }

    if (result) {
      alert("Correct.");
      score++;
    } else {
      const correctAnswer = questions[i].options[questions[i].correctIndex];
      alert(`Wrong. Correct answer: ${correctAnswer}`);
    }
  }

  alert(`Quiz finished.\nYour score: ${score} / ${questions.length}`);

  const playAgain = prompt("Do you want to play again? (yes/no)");
  if (playAgain && playAgain.trim().toLowerCase() === "yes") {
    playQuiz();
  }
}

playQuiz();
