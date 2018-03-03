// Nodelist changed into array
const timeNodes = [...document.querySelectorAll('[data-time]')];

const secs = timeNodes
  // Grabs array and gets the time dataset
  .map(node => node.dataset.time)
  // Splits and converts time into seconds
  .map(timeCode => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return (mins * 60) + secs;
  })
  // Adds all seconds together
  .reduce((total, sec) => total + sec)

let secondsLeft = secs;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = (secondsLeft % 3600);

const mins = Math.floor(secondsLeft / 60);
secondsLeft = (secondsLeft % 60);

console.log(hours, mins, secondsLeft);
