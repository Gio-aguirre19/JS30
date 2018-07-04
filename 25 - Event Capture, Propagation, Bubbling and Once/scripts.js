const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropogation(); // stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText));
// Instead of bubbling, it calls events while going to the source of where it was called.
// instead of 123 it says 321
// divs.forEach(div => div.addEventListener('click', logText, {capture: true}));
