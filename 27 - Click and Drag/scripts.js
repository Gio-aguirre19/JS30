const slider = document.querySelector('.items');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Log (e) to see what events and values are possible
  // In this case you are logging page X coords
  // console.log(e.pageX);
  // Setting click startX to page X coords minus left margin of slider
  startX = e.pageX - slider.offsetLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
  if(!isDown) return; // Stop from running this function is isDown is not true

});
