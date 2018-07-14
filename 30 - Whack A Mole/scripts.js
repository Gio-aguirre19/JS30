const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
// Set last hole used
let lastHoles = [];
// Making flag for time limit
let timeUp = false;

function randomTime(min, max) {
  // Plus min so max so min is min and max is max
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  // Go through the legth of lastHoles
  for (let i = 0; i < lastHoles.length; i++){
    // Recursion so the same hole isn't used twice
    if (hole == lastHoles[i]) {
      return randomHole(holes);
    }
  }
  // Making lastHoles array
  lastHoles.length > 1 ? lastHoles.pop() && lastHoles.unshift(hole) : lastHoles.unshift(hole);
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  peep();
  setTimeout(() => timeUp = true, 10000)
}
