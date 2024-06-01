let timerInterval;
let startTime;
let pausedTime = 0;

const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapsList = document.querySelector('.laps');

function startTimer() {
  startTime = Date.now() - pausedTime;
  timerInterval = setInterval(updateDisplay, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  pausedTime = Date.now() - startTime;
}

function resetTimer() {
  clearInterval(timerInterval);
  pausedTime = 0;
  display.textContent = '00:00:00';
  lapsList.innerHTML = '';
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const formattedTime = formatTime(elapsedTime);
  display.textContent = formattedTime;
}

function formatTime(time) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function addLap() {
  const elapsedTime = Date.now() - startTime;
  const formattedTime = formatTime(elapsedTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = formattedTime;
  lapsList.appendChild(lapItem);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
