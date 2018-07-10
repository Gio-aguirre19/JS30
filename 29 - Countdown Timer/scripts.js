let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(secs) {
  const now = Date.now();
  // now is in milliseconds
  const then = now + (secs * 1000);
  displayTimeLeft(secs);

  countdown = setInterval(() => {
    const secsLeft = Math.round((then - Date.now()) / 1000);
    if (secsLeft < 0) {
      stopInterval(countdown);
      return;
    }
    displayTimeLeft(secsLeft);
  }, 1000)
}

function displayTimeLeft(secs) {
  const minutes = Math.floor(secs / 60);
  const remainingSecs = secs % 60;
  const display = `${minutes < 10 ?  '0' : ''}${minutes}:${remainingSecs < 10 ?  '0' : ''}${remainingSecs}`;
  timerDisplay.textContent = display;
}
