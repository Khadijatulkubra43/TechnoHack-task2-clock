let timerInterval;
let timerRunning = false;
let secondsRemaining = 0;

function updateDisplay() {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('display').innerText = formattedTime;
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  timerInterval = setInterval(() => {
    if (secondsRemaining > 0) {
      secondsRemaining--;
      updateDisplay();
    } else {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  stopTimer();
  secondsRemaining = 0;
  updateDisplay();
}

function initializeTimer(seconds) {
  resetTimer();
  secondsRemaining = seconds;
  updateDisplay();
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Set the initial timer value (e.g., 10 minutes = 600 seconds)
initializeTimer(600);
