// Typing Game for Beginners (JavaScript)
// A simple typing game designed for elementary school students learning typing.

// Initialize the game variables
let score = 0;
let timeLeft = 30; // 30 seconds time limit
let currentWord = "";
const wordList = ["cat", "dog", "sun", "tree", "book", "apple", "star", "fish", "milk", "home"];
const gameInterval = 1000; // 1-second interval for timer

// Select HTML elements
const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-button");

// Function to generate a random word
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

// Function to start the game
function startGame() {
  score = 0;
  timeLeft = 30;
  inputField.value = "";
  inputField.disabled = false;
  inputField.focus();
  startButton.disabled = true;

  updateWord();
  updateScore();
  updateTimer();

  const timer = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, gameInterval);
}

// Function to update the current word
function updateWord() {
  currentWord = getRandomWord();
  wordDisplay.textContent = currentWord;
}

// Function to update the score display
function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// Function to update the timer display
function updateTimer() {
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
}

// Function to handle input
inputField.addEventListener("input", () => {
  if (inputField.value === currentWord) {
    score += 10; // Increase score by 10 points
    updateScore();
    inputField.value = ""; // Clear the input field
    updateWord(); // Display a new word
  }
});

// Function to end the game
function endGame() {
  inputField.disabled = true;
  startButton.disabled = false;
  wordDisplay.textContent = "Game Over!";
  alert(`Game Over! Your final score is: ${score}`);
}

// Attach event listener to the start button
startButton.addEventListener("click", startGame);

// HTML structure suggestion:
/*
<div id="game-container">
  <h1>Typing Game</h1>
  <p id="word-display">Press Start to Begin!</p>
  <input id="input-field" type="text" disabled />
  <p id="score-display">Score: 0</p>
  <p id="timer-display">Time Left: 30s</p>
  <button id="start-button">Start Game</button>
</div>
*/

// CSS styling suggestion:
/*
#game-container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
}

#word-display {
  font-size: 24px;
  font-weight: bold;
}

#input-field {
  font-size: 18px;
  padding: 10px;
  width: 200px;
}

#score-display, #timer-display {
  font-size: 18px;
  margin: 10px 0;
}

#start-button {
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
}
*/
