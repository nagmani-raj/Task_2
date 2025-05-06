let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;

function updateDisplay() {
  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  display.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (interval !== null) return;

  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  clearInterval(interval);
  interval = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  const lapTime = display.textContent;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  lapList.appendChild(li);
}
