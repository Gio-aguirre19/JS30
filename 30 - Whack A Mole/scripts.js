const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelector('.mole');

function ranTime(min, max) {
  // Plus min so max so min is min and max is max
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
  console.log(holes.length);
}
