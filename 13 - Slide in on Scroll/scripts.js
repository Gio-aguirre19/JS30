const sliderImgs = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImgs.forEach(sliderImg => {
    // Scrolling half way down image
    slideIn = (window.scrollY + window.innerHeight) - sliderImg.height / 2;
    // Getting bottom of image
    // const imgBottom = sliderImg.offsetTop + sliderImg.height;
    const isHalf = slideIn > sliderImg.offsetTop;
    // const isNotScrolledPast = window.scrollY < imgBottom;
    // Add (&& isNotScrolledPast) to if statement to make slide in continues when scrolling
    (isHalf) ? sliderImg.classList.add('active') : 0;
    // sliderImg.classList.remove('active');
  })
}

// Stops from calling scroll 100 times when scrolling
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener('scroll', debounce(checkSlide));
