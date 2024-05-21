let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let restartButton = document.getElementById("restart");
let timerInterval; // Variable to store the interval reference

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
restartButton.addEventListener("click", restartTimer);

function startTimer() {
  let timeHours = 0;
  let timeMin = 0;
  let timeSec = 0;

  let hours = document.getElementById("hours");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");

  timerInterval = setInterval(() => {
    timeSec++;
    if (timeSec >= 60) {
      timeSec = 0;
      timeMin++;
      if (timeMin >= 60) {
        timeMin = 0;
        timeHours++;
        if (timeHours >= 24) {
          clearInterval(timerInterval); // Stop the timer after 24 hours
        }
      }
    }

    hours.innerText = formatTime(timeHours);
    min.innerText = formatTime(timeMin);
    sec.innerText = formatTime(timeSec);
  }, 1000);

  // Disable start button, enable pause and restart buttons
  startButton.disabled = true;
  pauseButton.disabled = false;
  restartButton.disabled = false;
}

function pauseTimer() {
  clearInterval(timerInterval);
  // Enable start button, disable pause and restart buttons
  startButton.disabled = false;
  pauseButton.disabled = true;
  restartButton.disabled = false;
}

function restartTimer() {
  clearInterval(timerInterval);
  // Reset timer values to zero
  document.getElementById("hours").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("sec").innerText = "00";
  // Enable start button, disable pause and restart buttons
  startButton.disabled = false;
  pauseButton.disabled = true;
  restartButton.disabled = true;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
