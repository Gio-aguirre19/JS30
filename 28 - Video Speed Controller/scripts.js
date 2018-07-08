const speedBar = document.querySelector('.speed-bar');
const fill = document.querySelector('.speed-fill');
const video = document.querySelector('.flex');

function videoSpeed(e) {
  // Getting position of just speedBar top
  const y = e.pageY - this.offsetTop;
  // Dividing position of speedBar top by the height of the speedbar
  const percent = y / this.offsetHeight;
  // Setting mix and max fill
  const min = 0.5;
  const max = 5;
  // Making a percent for height of bar mouse move
  const height = Math.round(percent * 100) + '%';
  // console.log(height);
  const playbackRate = percent * (max - min) + min;
  fill.style.height = height;
  fill.textContent = playbackRate.toFixed(2) + 'x'
}

speedBar.addEventListener('mousemove', videoSpeed);
