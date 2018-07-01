const trigger = document.querySelectorAll('a');

// Making Span and appending it to bottom of body
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  // Getting attributes of element that is hovered
  const linkCoords = this.getBoundingClientRect();

  // Making our own Coordinates
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  // Styling using new coords object
  highlight.style.width = `${coords.width}px`
  highlight.style.height = `${coords.height}px`
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

// Adding Event Listeners (Mouse Eneter) to all links
trigger.forEach(a => a.addEventListener("mouseenter", highlightLink))
