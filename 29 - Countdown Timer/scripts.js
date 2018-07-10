let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(secs) {
  const now = Date.now();
  // now is in milliseconds
  const then = now + (secs * 1000);
  displayTimeLeft(secs);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secsLeft = Math.round((then - Date.now()) / 1000);
    if (secsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secsLeft);
  }, 1000)
}

function displayTimeLeft(secs) {
  const minutes = Math.floor(secs / 60);
  const remainingSecs = secs % 60;
  const display = `${minutes < 10 ?  '0' : ''}${minutes}:${remainingSecs < 10 ?  '0' : ''}${remainingSecs}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minute = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${minute}`;
}
