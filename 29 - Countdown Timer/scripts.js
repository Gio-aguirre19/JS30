let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(secs) {
  // Clears any existing timers
  clearInterval(countdown);

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
  const remainingSecs = secs % 60;
  let minutes = Math.floor(secs / 60);
  const hours = Math.floor((secs / 60) / 60);

  if (minutes > 60) {
    minutes %= 60;
  }
  const display = `H: ${hours}\n M: ${minutes < 10 ?  '0' : ''}${minutes}\n S: ${remainingSecs < 10 ?  '0' : ''}${remainingSecs}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  let adjustHour;
  if (hour > 12) {
    adjustHour = hour - 12;
  } else if (hour == 0) {
    adjustHour = 12;
  } else {
    adjustHour = hour;
  }

  const minute = end.getMinutes();
  endTime.textContent = `Be back by ${adjustHour}:${minute < 10 ?  '0' : ''}${minute}`;
}

function startTimer() {
  // console.log(this.dataset.time);
  const secs = parseInt(this.dataset.time);
  timer(secs);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  if (isNaN(mins)) {
    alert("Please type number");
    return;
  }
  timer(mins * 60);
})
