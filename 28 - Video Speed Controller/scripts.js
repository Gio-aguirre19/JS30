const speedBar = document.querySelector('.speed-bar');
const fill = document.querySelector('.speed-fill');
const video = document.querySelector('.flex');
let isDown = false;

function handleSpeed(e) {
  if (!isDown) return;
  e.preventDefault();
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
  // Setting playback rate to be a minimum of minimum value
  const playbackRate = percent * (max - min) + min;
  // Setting fill height and content
  fill.style.height = height;
  fill.textContent = playbackRate.toFixed(2) + 'x'
  // Setting playback rate of video equal to playback rate value
  video.playbackRate = playbackRate;
}

speedBar.addEventListener('mousedown', () => isDown = true);
speedBar.addEventListener('mouseup', () => isDown = false);
speedBar.addEventListener('mouseleave', () => isDown = false);
speedBar.addEventListener('mousedown', handleSpeed);
speedBar.addEventListener('mousemove', handleSpeed);
