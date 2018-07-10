let countdown;
function timer(secs) {
  const now = Date.now();
  // now is in milliseconds
  const then = now + (secs * 1000);
  countdown = setInterval(() => {
    const secsLeft = Math.round((then - Date.now()) / 1000);
    if (secsLeft < 0) {
      stopInterval(countdown);
      return;
    }
    console.log(secsLeft);
  }, 1000)
}
