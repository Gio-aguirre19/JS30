const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling and only fires active event
}

divs.forEach(div => div.addEventListener('click', logText));
// divs.forEach(div => div.addEventListener('click', logText, {
// Instead of bubbling, it calls events while going to the source of where it was called.
// instead of 123 it says 321
// capture: true,
// Only allows event to use function once
// once: true
// }));
