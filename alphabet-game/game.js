const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let mode = null;
let score = 0;
let correct = 0;
let targetCorrect = 10;
let startTime = 0;
let timerInterval = null;
let timeLeft = 30;
let currentPair = [];
let countdownInterval = null;

const gameEl = document.getElementById("game");
const timedBtn = document.getElementById("timedBtn");
const perfectBtn = document.getElementById("perfectBtn");
const lettersEl = document.getElementById("letters");
const statsEl = document.getElementById("stats");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");

function randomPair() {
  let a = alphabet[Math.floor(Math.random() * 26)];
  let b = alphabet[Math.floor(Math.random() * 26)];
  while (b === a) b = alphabet[Math.floor(Math.random() * 26)];
  return [a, b];
}

function newRound() {
  currentPair = randomPair();
  lettersEl.textContent = `${currentPair[0]}   ${currentPair[1]}`;

  choiceA.textContent = currentPair[0]; // left letter
  choiceB.textContent = currentPair[1]; // right letter

  // make sure choices are visible
  choiceA.parentElement.classList.remove("hidden");
}

function startTimed() {
  document.getElementById("instructions").classList.add("hidden");
  mode = "timed";
  score = 0;
  timeLeft = 30;

  startCountdown(() => {
    gameEl.classList.remove("hidden");
    startTime = Date.now(); // reset start time after countdown
    timerInterval = setInterval(updateTimed, 100);
    newRound();
  });
}

function startPerfect() {
  document.getElementById("instructions").classList.add("hidden"); // hide instructions
  mode = "perfect";
  correct = 0;

  startCountdown(() => {
    gameEl.classList.remove("hidden");
    startTime = Date.now();
    newRound();
  });
}

function startCountdown(callback) {
  const countdownEl = document.getElementById("countdown");
  countdownEl.classList.remove("hidden");
  let count = 5;
  countdownEl.textContent = count;

  countdownInterval = setInterval(() => {
    count--;
    countdownEl.textContent = count;

    if (count <= 0) {
      clearInterval(countdownInterval);
      countdownEl.classList.add("hidden");
      callback(); // start the actual game
    }
  }, 1000);
}

function updateTimed() {
  const elapsed = (Date.now() - startTime) / 1000;
  timeLeft = Math.max(0, 30 - elapsed);
  statsEl.textContent = `Time: ${timeLeft.toFixed(1)} | Score: ${score}`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}

function choose(letter) {
  const correctLetter = currentPair[0] < currentPair[1] ? currentPair[1] : currentPair[0];
  const isCorrect = letter === correctLetter;

  if (mode === "timed") {
    score += isCorrect ? 1 : -1;
    newRound();
  } else if (mode === "perfect") {
    if (!isCorrect) return endGame(false);
    correct++;
    statsEl.textContent = `${correct} / ${targetCorrect} correct`;
    if (correct >= targetCorrect) return endGame(true);
    newRound();
  }
}

document.getElementById("stopBtn").onclick = () => {
  clearInterval(countdownInterval);
  resetUI();
  gameEl.classList.add("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("countdown").classList.add("hidden");
  document.getElementById("modeSelect").classList.remove("hidden");
  document.getElementById("instructions").classList.remove("hidden");
};

function resetUI() {
  lettersEl.textContent = "";
  choiceA.textContent = "";
  choiceB.textContent = "";
  // hide the choices container
  choiceA.parentElement.classList.add("hidden");

  statsEl.textContent = "";
  clearInterval(timerInterval);
  timerInterval = null;
  mode = null;
}

function endGame(success = null) {
  const finishedMode = mode;   // save current mode before clearing
  resetUI();                   // now clears mode, timers, letters, etc.

  // show result message depending on the saved mode
  if (finishedMode === "timed") {
    statsEl.textContent = `Time's up! Final Score: ${score}`;
  } else if (finishedMode === "perfect") {
    if (success) {
      const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
      statsEl.textContent = `You did it! 10 correct in ${totalTime}s`;
    } else {
      statsEl.textContent = `Missed one! Try again.`;
    }
  }

  // restore start buttons, hide stop button
  document.getElementById("modeSelect").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("instructions").classList.remove("hidden"); // show instructions again
}

choiceA.onclick = () => choose(choiceA.textContent);
choiceB.onclick = () => choose(choiceB.textContent);
timedBtn.onclick = () => {
  document.getElementById("modeSelect").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  startTimed();
};

perfectBtn.onclick = () => {
  document.getElementById("modeSelect").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  startPerfect();
};

// ------------------------------
// Keyboard Controls: F = Left, J = Right
// ------------------------------
window.addEventListener("keydown", (e) => {
  if (gameEl.classList.contains("hidden")) return;

  if (e.key.toLowerCase() === "f") {
    choose(choiceA.textContent);
  }
  else if (e.key.toLowerCase() === "j") {
    choose(choiceB.textContent);
  }
});
