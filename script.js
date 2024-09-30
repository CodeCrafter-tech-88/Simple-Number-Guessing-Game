const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const resultParagraph = document.getElementById("result");
const score = document.getElementById("score");
const scoreDown = document.getElementById("scoreDown");
const youLose = document.getElementById("youLose");
const win = document.getElementById("win");
const scoreWin = document.getElementById("scoreWin");

const secretNumber = Math.floor(Math.random() * 100) + 1;
var initialScor = 0;
var initialScorDown = 10;

guessBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  initialScor++;
  initialScorDown--;
  if (initialScor >= 10) {
    guessInput.setAttribute("disabled", true);
    guessInput.value = "";
    guessBtn.setAttribute("class", "disabled");
    guessInput.setAttribute("class", "inputDisabled");
    resultParagraph.style.display = "none";
    score.style.display = "none";
    scoreDown.style.display = "none";
    youLose.textContent =
      "Unfortunately! You Lose Try Reload The Page To Play Again";
  }

  if (isNaN(guess)) {
    resultParagraph.textContent = "Please enter a valid number.";
    score.textContent = `Your Score Is ${initialScor}`;
    scoreDown.textContent = `After ${initialScorDown} Try You Lose`;
  } else if (guess < secretNumber && secretNumber - guess >= 20) {
    resultParagraph.textContent =
      "Your Number Small Than The Guess Number! Try again.";
    score.textContent = `Your Score Is ${initialScor}`;
    scoreDown.textContent = `After ${initialScorDown} Try You Lose`;
  } else if (
    guess < secretNumber &&
    secretNumber - guess < 20 &&
    secretNumber - guess >= 5
  ) {
    resultParagraph.textContent =
      "Your Number Small Than The Guess Number ,But Close! Try again.";
    score.textContent = `Your Score Is ${initialScor}`;
    scoreDown.textContent = `After ${initialScorDown} Try You Lose`;
  } else if (guess < secretNumber && secretNumber - guess < 5) {
    resultParagraph.textContent =
      "Your Number Small Than The Guess Number ,But To To Close! Try again.";
    score.textContent = `Your Score Is ${initialScor}`;
    scoreDown.textContent = `After ${initialScorDown} Try You Lose`;
  } else if (guess > secretNumber && secretNumber - guess <= -20) {
    resultParagraph.textContent =
      "Your Number Bigger Than The Guess Number! Try again.";
    score.textContent = `Your Score Is ${initialScor}`;
    scoreDown.textContent = `After ${initialScorDown} Try You Lose`;
  } else if (
    guess > secretNumber &&
    secretNumber - guess > -20 &&
    secretNumber - guess <= -5
  ) {
    resultParagraph.textContent =
      "Your Number Bigger Than The Guess Number, But Close! Try again.";
    score.textContent = `Your Score Is ${initialScor}`;
    scoreDown.textContent = `After ${initialScorDown} Try You Lose`;
  } else if (guess > secretNumber && secretNumber - guess > -5) {
    resultParagraph.textContent =
      "Your Number Bigger Than The Guess Number, But To To Close! Try again.";
    score.textContent = `Your Score Is ${initialScor}`;
    scoreDown.textContent = `After ${initialScorDown} Try You Lose`;
  } else {
    resultParagraph.style.display = "none";
    score.style.display = "none";
    scoreDown.style.display = "none";
    win.textContent = `Congratulations! You guessed the number: ${secretNumber}`;
    scoreWin.textContent = `Your Score Is ${initialScor}`;
  }
});
