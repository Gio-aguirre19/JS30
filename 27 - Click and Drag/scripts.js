const slider = document.querySelector('.items');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', () => {
  isDown = true;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', () => {
  if(!isDown) return; // Stop from running this function is isDown is not true
  
});
