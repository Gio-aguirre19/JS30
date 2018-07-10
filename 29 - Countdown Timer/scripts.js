function timer(secs) {
  const now = Date.now();
  // now is in milliseconds
  const then = now + (secs * 1000);
  setInterval(() => {
    const secsLeft = Math.round((then - Date.now()) / 1000);
    console.log(secsLeft);
  }, 1000)
}
