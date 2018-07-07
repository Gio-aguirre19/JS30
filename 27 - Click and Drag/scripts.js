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
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop from running this function is isDown is not true
  // Stops from highlighting and/or moving defaults
  e.preventDefault();
  // Setting how much movement is being done
  const x = e.pageX - slider.offsetLeft;
  // Setting how much movement is done left or right
  // Moving fast * 3
  const movement = (x - startX) * 3;
  // Smoothly moving slider.scrollLeft by subtracting scrollLeft by movement
  slider.scrollLeft = scrollLeft - movement;
});
